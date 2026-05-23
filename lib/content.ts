import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { DocFile, Subject, DocCategory, BadgeType } from './types'

const CONTENT_DIR = path.join(process.cwd(), 'content')

const SUBJECT_META: Record<string, { name: string; description: string; color: string; icon: string; priority: number }> = {
  Information_Security: {
    name: 'Information Security',
    description: 'Cryptography, attacks, IDS, firewalls, digital signatures',
    color: 'text-red-400',
    icon: '🔒',
    priority: 1,
  },
  Optimization_Technique: {
    name: 'Optimization Technique',
    description: 'Simplex method, transportation, assignment, game theory',
    color: 'text-amber-400',
    icon: '📊',
    priority: 2,
  },
  Mobile_Computing: {
    name: 'Mobile Computing',
    description: 'GSM, CDMA, Mobile IP, wireless networks, handover',
    color: 'text-blue-400',
    icon: '📱',
    priority: 3,
  },
  AI: {
    name: 'Artificial Intelligence',
    description: 'Search algorithms, knowledge representation, ML basics',
    color: 'text-violet-400',
    icon: '🤖',
    priority: 4,
  },
}

function detectCategory(fileName: string): DocCategory {
  const f = fileName.toLowerCase()
  if (f.includes('master_guide')) return 'master_guide'
  if (f.includes('unit_wise') || f.includes('unit_notes')) return 'unit_notes'
  if (f.includes('pyq')) return 'pyq'
  if (f.includes('most_important')) return 'important'
  if (f.includes('last_minute') || f.includes('revision')) return 'revision'
  if (f.includes('exam_answers')) return 'exam_answers'
  return 'other'
}

function detectBadge(category: DocCategory): BadgeType {
  switch (category) {
    case 'important': return '🔥'
    case 'pyq': return '📘'
    case 'revision': return '📝'
    case 'unit_notes': return '✅'
    case 'exam_answers': return '⭐'
    case 'master_guide': return '📖'
    default: return '✅'
  }
}

function humanizeFileName(fileName: string): string {
  const nameMap: Record<string, string> = {
    'unit_wise_notes': 'Unit-wise Notes',
    'pyq_analysis': 'PYQ Analysis',
    'most_important_questions': 'Most Important Questions',
    'last_minute_revision': 'Last Minute Revision',
    'exam_answers_unit1_2': 'Exam Answers — Unit 1 & 2',
    'exam_answers_unit3_4_5': 'Exam Answers — Unit 3, 4 & 5',
    'exam_answers_unit4_5': 'Exam Answers — Unit 4 & 5',
    'exam_answers_unit1_2_3': 'Exam Answers — Unit 1, 2 & 3',
    'exam_answers_unit3_4_5_6': 'Exam Answers — Unit 3, 4, 5 & 6',
    'exam_answers_unit4_5_6_7_8': 'Exam Answers — Unit 4, 5, 6, 7 & 8',
    'master_guide': 'Master Exam Guide',
    'MASTER_GUIDE': 'Master Exam Guide',
  }
  const base = path.basename(fileName, '.md')
  return nameMap[base] ?? base.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}

function extractExcerpt(content: string): string {
  // Strip markdown syntax for a clean excerpt
  const stripped = content
    .replace(/^#+\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/^[-*>\s|]+/gm, '')
    .replace(/\n+/g, ' ')
    .trim()
  return stripped.slice(0, 160) + (stripped.length > 160 ? '…' : '')
}

export function getAllSubjects(): Subject[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
  const subjects: Subject[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const subjectSlug = entry.name
    const meta = SUBJECT_META[subjectSlug]
    if (!meta) continue

    const subjectDir = path.join(CONTENT_DIR, subjectSlug)
    const files = fs.readdirSync(subjectDir).filter(f => f.endsWith('.md'))

    const docs: DocFile[] = files.map(file => {
      const filePath = path.join(subjectDir, file)
      const raw = fs.readFileSync(filePath, 'utf8')
      const { content } = matter(raw)
      const category = detectCategory(file)
      return {
        slug: file.replace('.md', ''),
        title: humanizeFileName(file),
        subject: meta.name,
        subjectSlug,
        fileName: file,
        filePath,
        category,
        badge: detectBadge(category),
        readingTime: estimateReadingTime(content),
        excerpt: extractExcerpt(content),
      }
    })

    // Sort: important first, then pyq, revision, notes, exam answers
    const ORDER: DocCategory[] = ['important', 'pyq', 'revision', 'unit_notes', 'exam_answers', 'master_guide', 'other']
    docs.sort((a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category))

    subjects.push({ ...meta, slug: subjectSlug, docs })
  }

  // Check for top-level MASTER_GUIDE.md
  const masterPath = path.join(CONTENT_DIR, 'MASTER_GUIDE.md')
  if (fs.existsSync(masterPath)) {
    const raw = fs.readFileSync(masterPath, 'utf8')
    const { content } = matter(raw)
    const masterDoc: DocFile = {
      slug: 'MASTER_GUIDE',
      title: 'Master Exam Guide',
      subject: 'All Subjects',
      subjectSlug: '_master',
      fileName: 'MASTER_GUIDE.md',
      filePath: masterPath,
      category: 'master_guide',
      badge: '📖',
      readingTime: estimateReadingTime(content),
      excerpt: extractExcerpt(content),
    }
    // Add a virtual "master" subject
    subjects.unshift({
      name: 'Master Guide',
      slug: '_master',
      description: 'Complete exam overview, priority topics, and study strategy',
      color: 'text-emerald-400',
      icon: '🎓',
      priority: 0,
      docs: [masterDoc],
    })
  }

  return subjects.sort((a, b) => a.priority - b.priority)
}

export function getSubject(slug: string): Subject | undefined {
  return getAllSubjects().find(s => s.slug === slug)
}

export function getDoc(subjectSlug: string, docSlug: string): { content: string; doc: DocFile } | undefined {
  const subject = getSubject(subjectSlug)
  if (!subject) return undefined
  const doc = subject.docs.find(d => d.slug === docSlug)
  if (!doc) return undefined
  const raw = fs.readFileSync(doc.filePath, 'utf8')
  const { content } = matter(raw)
  return { content, doc }
}

export function getAllDocs(): DocFile[] {
  return getAllSubjects().flatMap(s => s.docs)
}

export function getStats() {
  const subjects = getAllSubjects()
  const allDocs = subjects.flatMap(s => s.docs)
  return {
    totalSubjects: subjects.filter(s => s.slug !== '_master').length,
    totalDocs: allDocs.length,
    totalPYQs: allDocs.filter(d => d.category === 'pyq').length,
    totalImportant: allDocs.filter(d => d.category === 'important').length,
    totalRevision: allDocs.filter(d => d.category === 'revision').length,
  }
}

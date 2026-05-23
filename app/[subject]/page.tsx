import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSubjects, getSubject } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ subject: string }>
}

export async function generateStaticParams() {
  const subjects = getAllSubjects()
  return subjects.map(s => ({ subject: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: slug } = await params
  const subject = getSubject(slug)
  if (!subject) return {}
  return { title: subject.name }
}

export default async function SubjectPage({ params }: Props) {
  const { subject: slug } = await params
  const subject = getSubject(slug)
  if (!subject) notFound()

  const grouped = {
    important: subject.docs.filter(d => d.category === 'important'),
    pyq: subject.docs.filter(d => d.category === 'pyq'),
    revision: subject.docs.filter(d => d.category === 'revision'),
    unit_notes: subject.docs.filter(d => d.category === 'unit_notes'),
    exam_answers: subject.docs.filter(d => d.category === 'exam_answers'),
    other: subject.docs.filter(d => !['important','pyq','revision','unit_notes','exam_answers'].includes(d.category)),
  }

  const sections = [
    { key: 'important', label: '🔥 Most Important', docs: grouped.important },
    { key: 'pyq', label: '📘 PYQ Analysis', docs: grouped.pyq },
    { key: 'revision', label: '📝 Revision Notes', docs: grouped.revision },
    { key: 'unit_notes', label: '✅ Unit-wise Notes', docs: grouped.unit_notes },
    { key: 'exam_answers', label: '⭐ Exam Answers', docs: grouped.exam_answers },
    { key: 'other', label: 'Other', docs: grouped.other },
  ].filter(s => s.docs.length > 0)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span className="text-foreground">{subject.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-3">
        <span className="text-3xl">{subject.icon}</span>
        <div>
          <h1 className="text-xl font-semibold">{subject.name}</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{subject.description}</p>
          <p className="text-xs text-muted-foreground mt-1">{subject.docs.length} documents</p>
        </div>
      </div>

      {/* Doc sections */}
      {sections.map(section => (
        <div key={section.key}>
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-2">
            {section.label}
          </h2>
          <div className="space-y-1">
            {section.docs.map(doc => (
              <Link
                key={doc.slug}
                href={`/${slug}/${doc.slug}`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-md bg-card border border-border hover:bg-accent/50 transition-colors group"
              >
                <span className="text-base shrink-0">{doc.badge}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{doc.title}</p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{doc.excerpt}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-1 text-muted-foreground/40">
                    <Clock className="size-3" />
                    <span className="text-[10px]">{doc.readingTime}m</span>
                  </div>
                  <ArrowRight className="size-3.5 text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

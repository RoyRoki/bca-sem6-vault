export interface DocFile {
  slug: string
  title: string
  subject: string
  subjectSlug: string
  fileName: string
  filePath: string
  category: DocCategory
  badge: BadgeType
  readingTime: number
  excerpt: string
}

export interface Subject {
  name: string
  slug: string
  description: string
  color: string
  icon: string
  docs: DocFile[]
  priority: number
}

export interface Heading {
  id: string
  text: string
  level: number
}

export type DocCategory =
  | 'unit_notes'
  | 'pyq'
  | 'important'
  | 'revision'
  | 'exam_answers'
  | 'master_guide'
  | 'other'

export type BadgeType = '🔥' | '⭐' | '📘' | '📝' | '✅' | '📖'

export interface SearchResult {
  slug: string
  title: string
  subject: string
  subjectSlug: string
  excerpt: string
  badge: BadgeType
  score: number
}

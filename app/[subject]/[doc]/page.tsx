import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllSubjects, getSubject, getDoc } from '@/lib/content'
import { MarkdownRenderer } from '@/components/MarkdownRenderer'
import { TableOfContents } from '@/components/TableOfContents'
import { extractHeadings } from '@/lib/headings'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Metadata } from 'next'
import { ReadAloud } from '@/components/ReadAloud'

interface Props {
  params: Promise<{ subject: string; doc: string }>
}

export async function generateStaticParams() {
  const subjects = getAllSubjects()
  return subjects.flatMap(s =>
    s.docs.map(d => ({ subject: s.slug, doc: d.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subject: subjectSlug, doc: docSlug } = await params
  const result = getDoc(subjectSlug, docSlug)
  if (!result) return {}
  return {
    title: result.doc.title,
    description: result.doc.excerpt,
  }
}

export default async function DocPage({ params }: Props) {
  const { subject: subjectSlug, doc: docSlug } = await params
  const result = getDoc(subjectSlug, docSlug)
  if (!result) notFound()

  const { content, doc } = result
  const subject = getSubject(subjectSlug)
  const headings = extractHeadings(content)

  // Prev/next navigation within subject
  const docs = subject?.docs ?? []
  const currentIdx = docs.findIndex(d => d.slug === docSlug)
  const prevDoc = currentIdx > 0 ? docs[currentIdx - 1] : null
  const nextDoc = currentIdx < docs.length - 1 ? docs[currentIdx + 1] : null

  return (
    <div className="flex gap-0 min-h-screen">
      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">

          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            {subject && (
              <>
                <Link href={`/${subjectSlug}`} className="hover:text-foreground transition-colors flex items-center gap-1">
                  <span>{subject.icon}</span>
                  <span>{subject.name}</span>
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground truncate">{doc.title}</span>
          </div>

          {/* Doc header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xl">{doc.badge}</span>
              <Badge variant="secondary" className="text-[10px]">{doc.category.replace('_', ' ')}</Badge>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="size-3" />
                <span className="text-xs">{doc.readingTime} min read</span>
              </div>
              <ReadAloud content={content} title={doc.title} />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">{doc.title}</h1>
            {subject && (
              <p className="text-xs text-muted-foreground mt-1">{subject.icon} {subject.name}</p>
            )}
          </div>

          <Separator className="mb-6 bg-border" />

          {/* Markdown */}
          <article>
            <MarkdownRenderer content={content} />
          </article>

          {/* Prev / Next nav */}
          {(prevDoc || nextDoc) && (
            <div className="flex gap-3 mt-10 pt-6 border-t border-border">
              {prevDoc ? (
                <Link
                  href={`/${subjectSlug}/${prevDoc.slug}`}
                  className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-card border border-border hover:bg-accent/50 transition-colors text-left"
                >
                  <ChevronLeft className="size-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground">Previous</p>
                    <p className="text-xs font-medium truncate">{prevDoc.title}</p>
                  </div>
                </Link>
              ) : <div className="flex-1" />}

              {nextDoc ? (
                <Link
                  href={`/${subjectSlug}/${nextDoc.slug}`}
                  className="flex-1 flex items-center justify-end gap-2 px-3 py-2.5 rounded-lg bg-card border border-border hover:bg-accent/50 transition-colors text-right"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground">Next</p>
                    <p className="text-xs font-medium truncate">{nextDoc.title}</p>
                  </div>
                  <ChevronRight className="size-4 text-muted-foreground shrink-0" />
                </Link>
              ) : <div className="flex-1" />}
            </div>
          )}

          <div className="pb-28" />
        </div>
      </div>

      {/* Table of Contents - desktop only */}
      {headings.length > 2 && (
        <aside className="hidden xl:block w-52 shrink-0 sticky top-0 h-screen overflow-y-auto border-l border-border px-4 py-6">
          <TableOfContents headings={headings} />
        </aside>
      )}
    </div>
  )
}

import Fuse from 'fuse.js'
import type { DocFile, SearchResult } from './types'

let fuseInstance: Fuse<DocFile> | null = null
let searchData: DocFile[] = []

export function initSearch(docs: DocFile[]) {
  searchData = docs
  fuseInstance = new Fuse(docs, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'excerpt', weight: 0.3 },
      { name: 'subject', weight: 0.2 },
    ],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  })
}

export function search(query: string): SearchResult[] {
  if (!fuseInstance || !query.trim()) return []
  const results = fuseInstance.search(query, { limit: 12 })
  return results.map(r => ({
    slug: r.item.slug,
    title: r.item.title,
    subject: r.item.subject,
    subjectSlug: r.item.subjectSlug,
    excerpt: r.item.excerpt,
    badge: r.item.badge,
    score: r.score ?? 1,
  }))
}

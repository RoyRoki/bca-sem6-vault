'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X, FileText } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { initSearch, search } from '@/lib/search'
import type { DocFile, SearchResult } from '@/lib/types'

interface Props {
  docs: DocFile[]
  open: boolean
  onClose: () => void
}

export function SearchDialog({ docs, open, onClose }: Props) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selected, setSelected] = useState(0)
  const router = useRouter()

  useEffect(() => {
    initSearch(docs)
  }, [docs])

  useEffect(() => {
    if (!open) { setQuery(''); setResults([]); setSelected(0) }
  }, [open])

  useEffect(() => {
    const r = search(query)
    setResults(r)
    setSelected(0)
  }, [query])

  const navigate = useCallback((result: SearchResult) => {
    router.push(`/${result.subjectSlug}/${result.slug}`)
    onClose()
  }, [router, onClose])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') setSelected(p => Math.min(p + 1, results.length - 1))
      if (e.key === 'ArrowUp') setSelected(p => Math.max(p - 1, 0))
      if (e.key === 'Enter' && results[selected]) navigate(results[selected])
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, results, selected, navigate, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Dialog */}
      <div
        className="relative w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search topics, subjects, notes…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-muted-foreground hover:text-foreground">
              <X className="size-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
            Esc
          </kbd>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="max-h-80 overflow-y-auto py-1">
            {results.map((r, i) => (
              <li key={`${r.subjectSlug}-${r.slug}`}>
                <button
                  className={`w-full text-left flex items-start gap-2.5 px-3 py-2 transition-colors ${
                    i === selected ? 'bg-accent' : 'hover:bg-accent/60'
                  }`}
                  onClick={() => navigate(r)}
                  onMouseEnter={() => setSelected(i)}
                >
                  <span className="text-base mt-0.5 shrink-0">{r.badge}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{r.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{r.excerpt}</p>
                  </div>
                  <span className="text-xs text-muted-foreground/60 shrink-0 pt-0.5">{r.subject}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : query.length > 1 ? (
          <div className="py-10 text-center text-sm text-muted-foreground">
            No results for &ldquo;{query}&rdquo;
          </div>
        ) : (
          <div className="px-3 py-3">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-2 font-medium">
              Quick access
            </p>
            <div className="flex flex-wrap gap-1.5">
              {docs.filter(d => d.category === 'important' || d.category === 'revision').slice(0, 6).map(d => (
                <button
                  key={d.slug}
                  onClick={() => { router.push(`/${d.subjectSlug}/${d.slug}`); onClose() }}
                  className="text-xs px-2 py-1 rounded-md bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <span>{d.badge}</span>
                  <span>{d.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-3 px-3 py-2 border-t border-border text-[10px] text-muted-foreground/50">
          <span><kbd className="font-mono">↑↓</kbd> navigate</span>
          <span><kbd className="font-mono">↵</kbd> open</span>
          <span><kbd className="font-mono">esc</kbd> close</span>
          <span className="ml-auto">{results.length > 0 ? `${results.length} results` : `${docs.length} docs indexed`}</span>
        </div>
      </div>
    </div>
  )
}

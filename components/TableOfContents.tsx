'use client'
import { useEffect, useState } from 'react'
import type { Heading } from '@/lib/types'

interface Props {
  headings: Heading[]
}

export function TableOfContents({ headings }: Props) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return
    const ids = headings.map(h => h.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-60px 0px -70% 0px', threshold: 0 }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="space-y-0.5">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2 px-1">
        On this page
      </p>
      {headings.map(h => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={`
            block text-xs py-0.5 px-1 rounded transition-colors duration-150 leading-snug
            ${h.level === 1 ? 'pl-1' : h.level === 2 ? 'pl-3' : h.level === 3 ? 'pl-5' : 'pl-7'}
            ${active === h.id
              ? 'text-foreground bg-accent'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
            }
          `}
        >
          {h.text}
        </a>
      ))}
    </nav>
  )
}

// Re-export from server-safe lib for convenience
export { extractHeadings } from '@/lib/headings'

'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, Search, BookOpen, Menu, X } from 'lucide-react'
import type { Subject } from '@/lib/types'

interface SidebarContentProps {
  subjects: Subject[]
  onSearch: () => void
  onClose?: () => void
}

function SidebarContent({ subjects, onSearch, onClose }: SidebarContentProps) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    subjects.forEach(s => { init[s.slug] = pathname.startsWith(`/${s.slug}`) })
    return init
  })

  const toggle = (slug: string) =>
    setExpanded(p => ({ ...p, [slug]: !p[slug] }))

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-4 border-b border-border flex items-center justify-between">
        <Link href="/" onClick={onClose} className="flex items-center gap-2 group">
          <div className="size-6 rounded bg-accent flex items-center justify-center">
            <BookOpen className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div>
            <p className="text-sm font-semibold leading-none">BCA Sem 6</p>
            <p className="text-[10px] text-muted-foreground leading-none mt-0.5">Exam Vault</p>
          </div>
        </Link>
        {onClose && (
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors lg:hidden">
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Search trigger */}
      <div className="px-3 py-2.5 border-b border-border">
        <button
          onClick={() => { onSearch(); onClose?.() }}
          className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-accent/60 hover:bg-accent text-muted-foreground hover:text-foreground text-xs transition-colors"
        >
          <Search className="size-3" />
          <span className="flex-1 text-left">Search…</span>
          <kbd className="text-[10px] opacity-50">⌘K</kbd>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        <Link
          href="/"
          onClick={onClose}
          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs mb-1 transition-colors ${
            pathname === '/'
              ? 'bg-accent text-foreground font-medium'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent/60'
          }`}
        >
          <span>🏠</span> Dashboard
        </Link>

        <div className="my-2 border-t border-border" />

        {subjects.map(subject => {
          const isOpen = expanded[subject.slug]
          const isActive = pathname.startsWith(`/${subject.slug}`)

          return (
            <div key={subject.slug} className="mb-0.5">
              <button
                onClick={() => toggle(subject.slug)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs transition-colors ${
                  isActive
                    ? 'text-foreground bg-accent/50'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/40'
                }`}
              >
                <span className="text-sm">{subject.icon}</span>
                <span className="flex-1 text-left font-medium truncate">{subject.name}</span>
                <span className="text-muted-foreground/40 text-[10px]">{subject.docs.length}</span>
                {isOpen
                  ? <ChevronDown className="size-3 shrink-0" />
                  : <ChevronRight className="size-3 shrink-0" />
                }
              </button>

              {isOpen && (
                <div className="ml-3 mt-0.5 space-y-px border-l border-border pl-2">
                  {subject.docs.map(doc => {
                    const href = `/${subject.slug}/${doc.slug}`
                    const isDocActive = pathname === href
                    return (
                      <Link
                        key={doc.slug}
                        href={href}
                        onClick={onClose}
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs transition-colors ${
                          isDocActive
                            ? 'bg-accent text-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                        }`}
                      >
                        <span className="text-[11px]">{doc.badge}</span>
                        <span className="truncate">{doc.title}</span>
                        <span className="ml-auto text-[10px] text-muted-foreground/40 shrink-0">{doc.readingTime}m</span>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="px-4 py-3 border-t border-border">
        <p className="text-[10px] text-muted-foreground/50">
          BCA Sem 6 · University of North Bengal
        </p>
      </div>
    </div>
  )
}

interface Props {
  subjects: Subject[]
  onSearch: () => void
}

export function Sidebar({ subjects, onSearch }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex flex-col w-56 xl:w-60 shrink-0 border-r border-border bg-sidebar sticky top-0 h-screen overflow-hidden">
        <SidebarContent subjects={subjects} onSearch={onSearch} />
      </aside>

      {/* Mobile FAB */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 z-40 size-11 rounded-full bg-card border border-border shadow-xl flex items-center justify-center hover:bg-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu className="size-4" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <aside className="relative w-64 max-w-[85vw] bg-sidebar border-r border-border h-full overflow-hidden shadow-2xl">
            <SidebarContent
              subjects={subjects}
              onSearch={onSearch}
              onClose={() => setMobileOpen(false)}
            />
          </aside>
        </div>
      )}
    </>
  )
}

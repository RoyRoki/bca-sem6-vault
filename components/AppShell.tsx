'use client'
import { useState, useEffect } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { SearchDialog } from '@/components/SearchDialog'
import { ReadingProgress } from '@/components/ReadingProgress'
import type { Subject, DocFile } from '@/lib/types'

interface Props {
  subjects: Subject[]
  allDocs: DocFile[]
  children: React.ReactNode
}

export function AppShell({ subjects, allDocs, children }: Props) {
  const [searchOpen, setSearchOpen] = useState(false)

  // ⌘K / Ctrl+K to open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(p => !p)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <ReadingProgress />
      <SearchDialog
        docs={allDocs}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      <div className="flex min-h-screen">
        <Sidebar subjects={subjects} onSearch={() => setSearchOpen(true)} />
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </>
  )
}

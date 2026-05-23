import Link from 'next/link'
import { getAllSubjects, getStats } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { BookOpen, FileText, Star, Clock } from 'lucide-react'

export default function HomePage() {
  const subjects = getAllSubjects()
  const stats = getStats()

  const mainSubjects = subjects.filter(s => s.slug !== '_master')
  const allDocs = subjects.flatMap(s => s.docs)
  const importantDocs = allDocs.filter(d => d.category === 'important' || d.category === 'revision')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs text-muted-foreground font-mono mb-1">BCA · Semester 6 · NEP Curriculum</p>
        <h1 className="text-2xl font-semibold tracking-tight">Exam Vault</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Study notes, PYQ analysis, and revision guides — built from 6-year PYQ data.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Subjects', value: stats.totalSubjects, icon: BookOpen, color: 'text-violet-400' },
          { label: 'Total Docs', value: stats.totalDocs, icon: FileText, color: 'text-blue-400' },
          { label: 'PYQ Docs', value: stats.totalPYQs, icon: Star, color: 'text-amber-400' },
          { label: 'Revision Sets', value: stats.totalRevision, icon: Clock, color: 'text-emerald-400' },
        ].map(stat => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-lg px-3 py-3 flex items-center gap-3"
          >
            <stat.icon className={`size-4 ${stat.color} shrink-0`} />
            <div>
              <p className="text-lg font-semibold leading-none">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Master guide */}
      {subjects.find(s => s.slug === '_master') && (
        <Link
          href="/_master/MASTER_GUIDE"
          className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:bg-accent/40 transition-colors group"
        >
          <span className="text-2xl">🎓</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold">Master Exam Guide</p>
            <p className="text-xs text-muted-foreground truncate">
              Complete subject overview, priority topics, and time-limited study strategy
            </p>
          </div>
          <Badge variant="secondary" className="text-[10px] shrink-0">📖 Read first</Badge>
        </Link>
      )}

      {/* Subjects grid */}
      <div>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Subjects</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {mainSubjects.map((subject, i) => (
            <div key={subject.slug} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-border">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{subject.icon}</span>
                  <span className={`text-[10px] font-bold ${
                    i === 0 ? 'text-amber-400' : i === 1 ? 'text-zinc-400' : i === 2 ? 'text-orange-400' : 'text-zinc-500'
                  }`}>#{i + 1}</span>
                  <h3 className="text-sm font-semibold">{subject.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">{subject.description}</p>
              </div>
              <div className="py-1">
                {subject.docs.map(doc => (
                  <Link
                    key={doc.slug}
                    href={`/${subject.slug}/${doc.slug}`}
                    className="flex items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
                  >
                    <span>{doc.badge}</span>
                    <span className="flex-1 truncate">{doc.title}</span>
                    <span className="text-[10px] text-muted-foreground/40">{doc.readingTime}m</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High priority */}
      <div>
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
          🔥 High Priority — Read These First
        </h2>
        <div className="space-y-1">
          {importantDocs.map(doc => (
            <Link
              key={`${doc.subjectSlug}-${doc.slug}`}
              href={`/${doc.subjectSlug}/${doc.slug}`}
              className="flex items-center gap-3 px-3 py-2 rounded-md bg-card border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="text-base">{doc.badge}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">{doc.title}</p>
                <p className="text-[11px] text-muted-foreground">{doc.subject}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0 text-muted-foreground/40">
                <Clock className="size-3" />
                <span className="text-[10px]">{doc.readingTime}m</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-4 pb-8">
        <p className="text-xs text-muted-foreground/50 text-center">
          Built from 6-year PYQ analysis · University of North Bengal · Roki Roy
        </p>
      </div>
    </div>
  )
}

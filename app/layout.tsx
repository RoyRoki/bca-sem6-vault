import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppShell } from '@/components/AppShell'
import { getAllSubjects, getAllDocs } from '@/lib/content'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'BCA Sem 6 — Exam Vault',
    template: '%s · BCA Sem 6',
  },
  description:
    'BCA Semester 6 exam preparation — study notes, PYQ analysis, revision guides, and important topics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const subjects = getAllSubjects()
  const allDocs = getAllDocs()

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`} suppressHydrationWarning>
      <body className="antialiased">
        <AppShell subjects={subjects} allDocs={allDocs}>
          {children}
        </AppShell>
      </body>
    </html>
  )
}

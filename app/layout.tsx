import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AppShell } from '@/components/AppShell'
import { getAllSubjects, getAllDocs } from '@/lib/content'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = 'https://study-platform-jet.vercel.app'

export const metadata: Metadata = {
  title: {
    default: 'BCA Sem 6 — Exam Vault',
    template: '%s · BCA Sem 6',
  },
  description:
    'BCA Semester 6 exam preparation — study notes, PYQ analysis, revision guides, and important topics. Built by Roki Roy.',
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'BCA Sem 6 — Exam Vault',
    description:
      'Study notes, PYQ analysis, revision guides, and important topics for BCA Semester 6. Built by Roki Roy.',
    url: siteUrl,
    siteName: 'BCA Sem 6 Exam Vault',
    images: [
      {
        url: '/logo.png',
        width: 600,
        height: 600,
        alt: 'BCA Sem 6 Exam Vault',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'BCA Sem 6 — Exam Vault',
    description: 'Study notes, PYQ analysis, revision guides for BCA Semester 6.',
    images: ['/logo.png'],
  },
  authors: [{ name: 'Roki Roy', url: 'https://rokiroy.in' }],
  creator: 'Roki Roy',
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

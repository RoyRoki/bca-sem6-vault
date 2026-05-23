import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center px-4">
      <p className="text-4xl">📭</p>
      <h1 className="text-lg font-semibold">Page not found</h1>
      <p className="text-sm text-muted-foreground">That document doesn&apos;t exist or was moved.</p>
      <Link href="/" className="text-sm text-muted-foreground hover:text-foreground border border-border rounded-md px-3 py-1.5 transition-colors mt-2">
        ← Back to Dashboard
      </Link>
    </div>
  )
}

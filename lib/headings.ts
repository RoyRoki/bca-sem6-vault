import type { Heading } from './types'

export function extractHeadings(markdown: string): Heading[] {
  const headingRe = /^(#{1,4})\s+(.+)$/gm
  const headings: Heading[] = []
  let match
  while ((match = headingRe.exec(markdown)) !== null) {
    const level = match[1].length
    const raw = match[2].replace(/[*_`[\]]/g, '').trim()
    const id = raw
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    headings.push({ id, text: raw, level })
  }
  return headings
}

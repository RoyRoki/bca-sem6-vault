'use client'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeRaw from 'rehype-raw'
import 'highlight.js/styles/github-dark.css'

interface Props {
  content: string
}

export function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          rehypeHighlight,
        ]}
        components={{
          // Tables with horizontal scroll
          table: ({ children }) => (
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full">{children}</table>
            </div>
          ),
          // Code blocks
          pre: ({ children }) => (
            <pre className="overflow-x-auto text-xs leading-relaxed">{children}</pre>
          ),
          // Inline code
          code: ({ children, className }) => {
            if (className) return <code className={className}>{children}</code>
            return <code>{children}</code>
          },
          // Blockquote as callout
          blockquote: ({ children }) => (
            <blockquote className="my-4">{children}</blockquote>
          ),
          // Headings with anchor links
          h1: ({ children, id }) => (
            <h1 id={id} className="scroll-mt-20">{children}</h1>
          ),
          h2: ({ children, id }) => (
            <h2 id={id} className="scroll-mt-20">{children}</h2>
          ),
          h3: ({ children, id }) => (
            <h3 id={id} className="scroll-mt-20">{children}</h3>
          ),
          h4: ({ children, id }) => (
            <h4 id={id} className="scroll-mt-20">{children}</h4>
          ),
          // Links open in same tab (internal content)
          a: ({ href, children }) => (
            <a href={href} className="break-all">{children}</a>
          ),
          // Images are responsive
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? ''} className="max-w-full h-auto rounded-lg border border-border" />
          ),
          // Horizontal rules
          hr: () => <hr className="my-6 border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

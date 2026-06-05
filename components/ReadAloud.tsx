'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Volume2, Pause, Play, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

function markdownToText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/^[-*+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/^[-]{3,}$/gm, '')
    .replace(/\|[^\n]+\|/g, '')
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function splitIntoChunks(text: string): string[] {
  const raw = text.match(/[^.!?]+[.!?]+\s*/g) ?? [text]
  const chunks: string[] = []
  let buf = ''
  for (const s of raw) {
    if ((buf + s).length > 250 && buf) {
      chunks.push(buf.trim())
      buf = s
    } else {
      buf += s
    }
  }
  if (buf.trim()) chunks.push(buf.trim())
  return chunks.length ? chunks : [text]
}

const SPEEDS = [0.75, 1, 1.25, 1.5, 2] as const
type Speed = typeof SPEEDS[number]

interface Props {
  content: string
  title: string
}

export function ReadAloud({ content, title }: Props) {
  const [supported, setSupported] = useState(false)
  const [active, setActive] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [chunkIndex, setChunkIndex] = useState(0)
  const [speed, setSpeed] = useState<Speed>(1)

  const chunksRef = useRef<string[]>([])
  const chunkIndexRef = useRef(0)
  const isPlayingRef = useRef(false)
  const speedRef = useRef<Speed>(1)

  useEffect(() => {
    setSupported('speechSynthesis' in window)
    chunksRef.current = splitIntoChunks(markdownToText(content))
    return () => { window.speechSynthesis?.cancel() }
  }, [content])

  // Stable ref so onend closure can call the latest version
  const speakChunkRef = useRef<(idx: number) => void>(() => {})

  const speakChunk = useCallback((idx: number) => {
    window.speechSynthesis.cancel()
    const chunks = chunksRef.current
    if (idx >= chunks.length) {
      isPlayingRef.current = false
      setIsPlaying(false)
      chunkIndexRef.current = 0
      setChunkIndex(0)
      return
    }
    chunkIndexRef.current = idx
    setChunkIndex(idx)
    const utt = new SpeechSynthesisUtterance(chunks[idx])
    utt.lang = 'en-US'
    utt.rate = speedRef.current
    utt.onend = () => {
      if (isPlayingRef.current) speakChunkRef.current(chunkIndexRef.current + 1)
    }
    utt.onerror = (e) => {
      if ((e as SpeechSynthesisErrorEvent).error === 'interrupted') return
      isPlayingRef.current = false
      setIsPlaying(false)
    }
    window.speechSynthesis.speak(utt)
  }, [])

  useEffect(() => { speakChunkRef.current = speakChunk }, [speakChunk])

  const start = useCallback(() => {
    chunkIndexRef.current = 0
    isPlayingRef.current = true
    setChunkIndex(0)
    setIsPlaying(true)
    setActive(true)
    speakChunk(0)
  }, [speakChunk])

  const toggle = useCallback(() => {
    if (isPlayingRef.current) {
      window.speechSynthesis.cancel()
      isPlayingRef.current = false
      setIsPlaying(false)
    } else {
      isPlayingRef.current = true
      setIsPlaying(true)
      speakChunk(chunkIndexRef.current)
    }
  }, [speakChunk])

  const seek = useCallback((ratio: number) => {
    const idx = Math.min(
      Math.floor(ratio * chunksRef.current.length),
      chunksRef.current.length - 1
    )
    chunkIndexRef.current = idx
    setChunkIndex(idx)
    if (isPlayingRef.current) speakChunk(idx)
  }, [speakChunk])

  const cycleSpeed = useCallback(() => {
    const next = SPEEDS[(SPEEDS.indexOf(speedRef.current) + 1) % SPEEDS.length]
    speedRef.current = next
    setSpeed(next)
    if (isPlayingRef.current) speakChunk(chunkIndexRef.current)
  }, [speakChunk])

  const close = useCallback(() => {
    window.speechSynthesis.cancel()
    isPlayingRef.current = false
    chunkIndexRef.current = 0
    setIsPlaying(false)
    setChunkIndex(0)
    setActive(false)
  }, [])

  const handleProgressClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    seek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)))
  }, [seek])

  if (!supported) return null

  const progress = chunksRef.current.length > 0 ? chunkIndex / chunksRef.current.length : 0

  return (
    <>
      {/* Inline trigger — only shown before player opens */}
      {!active && (
        <Button
          variant="outline"
          size="sm"
          onClick={start}
          className="gap-1.5 text-xs h-7 cursor-pointer"
          aria-label="Read page aloud"
        >
          <Volume2 className="size-3.5" />
          Read
        </Button>
      )}

      {/* Fixed bottom player bar */}
      {active && (
        <div
          role="region"
          aria-label="Read Aloud player"
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-2xl"
        >
          {/* Seekable progress track */}
          <div
            className="relative h-1 bg-muted cursor-pointer group"
            onClick={handleProgressClick}
            role="slider"
            aria-label="Reading progress"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full bg-primary transition-[width] duration-300 ease-linear"
              style={{ width: `${progress * 100}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-3 rounded-full bg-primary shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ left: `${progress * 100}%` }}
            />
          </div>

          {/* Controls */}
          <div
            className="flex items-center gap-3 px-4 py-3 max-w-3xl mx-auto"
            style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
          >
            {/* Title */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <Volume2 className="size-4 text-primary shrink-0" aria-hidden />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground leading-none mb-0.5">Reading</p>
                <p className="text-xs font-medium truncate">{title}</p>
              </div>
            </div>

            {/* Speed cycle */}
            <button
              onClick={cycleSpeed}
              className="text-[11px] font-mono text-muted-foreground hover:text-foreground tabular-nums w-9 text-center transition-colors shrink-0"
              aria-label={`Speed ${speed}×, tap to change`}
            >
              {speed}×
            </button>

            {/* Play / Pause */}
            <button
              onClick={toggle}
              className="size-9 flex items-center justify-center rounded-full bg-foreground text-background hover:opacity-80 active:scale-95 transition-all shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Resume'}
            >
              {isPlaying
                ? <Pause className="size-4 fill-current" />
                : <Play className="size-4 fill-current ml-0.5" />}
            </button>

            {/* Close */}
            <button
              onClick={close}
              className="size-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors shrink-0"
              aria-label="Close player"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

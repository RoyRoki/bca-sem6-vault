'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
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
    .trim()
}

interface Props {
  content: string
}

export function ReadAloud({ content }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [supported, setSupported] = useState(false)
  const isPlayingRef = useRef(false)

  useEffect(() => {
    setSupported('speechSynthesis' in window)
    return () => { window.speechSynthesis?.cancel() }
  }, [])

  const toggle = useCallback(() => {
    if (!supported) return
    if (isPlayingRef.current) {
      window.speechSynthesis.cancel()
      isPlayingRef.current = false
      setIsPlaying(false)
      return
    }
    const text = markdownToText(content)
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = 0.95
    utterance.onend = () => { isPlayingRef.current = false; setIsPlaying(false) }
    utterance.onerror = () => { isPlayingRef.current = false; setIsPlaying(false) }
    window.speechSynthesis.speak(utterance)
    isPlayingRef.current = true
    setIsPlaying(true)
  }, [content, supported])

  if (!supported) return null

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      className="gap-1.5 text-xs h-7 cursor-pointer"
      aria-label={isPlaying ? 'Stop reading aloud' : 'Read page aloud'}
    >
      {isPlaying
        ? <VolumeX className="size-3.5" />
        : <Volume2 className="size-3.5" />}
      {isPlaying ? 'Stop' : 'Read'}
    </Button>
  )
}

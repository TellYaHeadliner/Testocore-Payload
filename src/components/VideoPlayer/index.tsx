'use client'
import { useRef, useEffect } from 'react'
import './style.css'
import { cn } from '@/utilities/ui'

interface VideoPlayerProps {
  src: string
  poster?: string
  ratio?: string
  title?: string
  loop?: boolean
  className?: string
}

const VideoPlayer = ({ src, poster, ratio, title, loop = true, className }: VideoPlayerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const videoRef  = useRef<HTMLVideoElement>(null)
  const playRef   = useRef<HTMLButtonElement>(null)
  const muteRef   = useRef<HTMLButtonElement>(null)
  const seekRef   = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const w    = wrapperRef.current
    const v    = videoRef.current
    const play = playRef.current
    const mute = muteRef.current
    const seek = seekRef.current
    if (!w || !v || !play || !mute || !seek) return

    /* ── toggle play / pause (giống const toggle) ── */
    const toggle = () => (v.paused ? v.play().catch(() => {}) : v.pause())

    play.addEventListener('click', toggle)
    v.addEventListener('click', toggle)

    /* ── v.play / v.pause → cập nhật class + aria ── */
    const onPlay = () => {
      w.classList.add('is-playing')
      play.setAttribute('aria-label', 'Pause')
      /* pause các video khác trong trang */
      document
        .querySelectorAll<HTMLVideoElement>('video[data-video-player]')
        .forEach((other) => { if (other !== v) other.pause() })
    }
    const onPause = () => {
      w.classList.remove('is-playing')
      play.setAttribute('aria-label', `Play${title ? ` ${title}` : ''}`)
    }
    v.addEventListener('play',  onPlay)
    v.addEventListener('pause', onPause)

    /* ── mute toggle ── */
    const onMuteClick = () => {
      v.muted = !v.muted
      w.classList.toggle('is-muted', v.muted)
      mute.setAttribute('aria-label', v.muted ? 'Unmute' : 'Mute')
    }
    mute.addEventListener('click', onMuteClick)

    /* ── timeupdate → seek bar + --p ── */
    const onTimeUpdate = () => {
      if (!v.duration) return
      const p = (v.currentTime / v.duration) * 100
      seek.value = String(p)
      seek.style.setProperty('--p', `${p}%`)
    }
    v.addEventListener('timeupdate', onTimeUpdate)

    /* ── seek input → scrub ── */
    const onSeekInput = () => {
      if (v.duration) v.currentTime = (Number(seek.value) / 100) * v.duration
      seek.style.setProperty('--p', `${seek.value}%`)
    }
    seek.addEventListener('input', onSeekInput)

    return () => {
      play.removeEventListener('click', toggle)
      v.removeEventListener('click',     toggle)
      v.removeEventListener('play',      onPlay)
      v.removeEventListener('pause',     onPause)
      mute.removeEventListener('click',  onMuteClick)
      v.removeEventListener('timeupdate', onTimeUpdate)
      seek.removeEventListener('input',  onSeekInput)
    }
  }, [title])

  return (
    <div
      ref={wrapperRef}
      /* is-muted mặc định vì video bắt đầu muted */
      className={cn('responsive-video-wrapper is-muted', className)}
      style={{ aspectRatio: ratio }}
    >
      <video
        ref={videoRef}
        data-video-player
        src={src}
        poster={poster}
        loop={loop}
        muted          /* muted mặc định */
        playsInline
        preload="metadata"
      />

      <div className="video-controls">
        {/* Play / Pause */}
        <button
          ref={playRef}
          type="button"
          className="vc-btn vc-play"
          aria-label={`Play${title ? ` ${title}` : ''}`}
        >
          <svg className="i-play"  viewBox="0 0 40 40" aria-hidden="true">
            <path d="M8 3 L35 20 L8 37 Z" fill="currentColor" />
          </svg>
          <svg className="i-pause" viewBox="0 0 40 40" aria-hidden="true">
            <rect x="7"  y="4" width="9" height="32" fill="currentColor" />
            <rect x="24" y="4" width="9" height="32" fill="currentColor" />
          </svg>
        </button>

        {/* Seek */}
        <input
          ref={seekRef}
          className="vc-seek"
          type="range"
          min={0}
          max={100}
          step={0.1}
          defaultValue={0}
          aria-label="Seek"
        />

        {/* Mute / Unmute */}
        <button
          ref={muteRef}
          type="button"
          className="vc-btn vc-mute"
          aria-label="Unmute"   /* muted mặc định → label là Unmute */
        >
          <svg className="i-on" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M4 15h7l9-8v26l-9-8H4z" fill="#e6e6e6" />
            <path d="M25 14c2.5 2.8 2.5 9.2 0 12"
              fill="none" stroke="#3b7bf0" strokeWidth="3" strokeLinecap="round" />
            <path d="M30 9c5 5.5 5 16.5 0 22"
              fill="none" stroke="#3b7bf0" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg className="i-off" viewBox="0 0 40 40" aria-hidden="true">
            <path d="M6 15.5h6l9-7.5v24l-9-7.5H6z"
              fill="#f2f2f2" stroke="#f2f2f2" strokeWidth="3" strokeLinejoin="round" />
            <path d="M5 6L35 35" stroke="#f0527c" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayer
  
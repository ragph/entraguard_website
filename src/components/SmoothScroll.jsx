import { useEffect } from 'react'
import Lenis from 'lenis'
import { setLenis } from '../lib/lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    setLenis(lenis)

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return children
}

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from '../lib/lenis'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Skip smooth scrolling for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    setLenis(lenis)

    // Keep ScrollTrigger in lockstep with Lenis: update on every Lenis scroll
    // and drive Lenis from GSAP's ticker so scrubbed animations never lag.
    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return children
}

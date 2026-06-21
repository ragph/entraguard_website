import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveal-on-scroll via GSAP ScrollTrigger. Attach the returned ref to the
 * element you want revealed. Pass `children: true` to stagger the element's
 * direct children instead of animating the element itself.
 *
 * Animations run once, stay in sync with Lenis (wired in SmoothScroll), and
 * are skipped entirely for users who prefer reduced motion (the element keeps
 * its natural, visible state).
 */
export function useReveal({
  children = false,
  y = 32,
  duration = 0.7,
  stagger = 0.12,
  delay = 0,
  start = 'top 85%',
} = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const targets = children ? gsap.utils.toArray(el.children) : el
      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power3.out',
        stagger: children ? stagger : 0,
        scrollTrigger: { trigger: el, start, once: true },
      })
    })

    return () => mm.revert()
  }, [children, y, duration, stagger, delay, start])

  return ref
}

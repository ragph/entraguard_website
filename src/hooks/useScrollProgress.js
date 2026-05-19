import { useEffect, useRef, useState } from 'react'

/**
 * Returns a progress value 0→1 based on how far the section's center
 * has entered the viewport. Animation starts when the center first
 * becomes visible and completes after `travelPx` of scrolling.
 *
 * @param {number} travelPx - pixels of scroll needed to go from 0 to 1 (default 300)
 */
export function useScrollProgress(travelPx = 300) {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function update() {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Use the vertical center of the section as the trigger point
      const center = rect.top + rect.height / 2
      // How far the center has travelled past the bottom of the viewport
      const travelled = vh - center
      const raw = travelled / travelPx
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    let rafId = null
    const onScroll = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        update()
        rafId = null
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [travelPx])

  return [ref, progress]
}

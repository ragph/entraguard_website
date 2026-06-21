import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollTo, getLenis } from '../lib/lenis'

/**
 * Router-aware scroll behavior for a page:
 *  - no hash  → jump to the top on mount / route change
 *  - #section → scroll to that element, accounting for the fixed navbar
 *
 * Depends on `location` so it also fires when only the hash changes on the
 * SAME path (e.g. clicking a footer "#teachers" link while already on the
 * page — which does NOT remount the route). Lenis lives above the router and
 * keeps the previous page's dimensions, so we wait for layout, recompute its
 * limit, then scroll — with one re-correction after lazy content settles.
 */
export function useHashScroll(offset = 64) {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const id = hash ? hash.slice(1) : ''

    if (!id) {
      scrollTo(0, { immediate: true })
      return
    }

    let raf1, raf2, timer
    const doScroll = () => {
      const el = document.getElementById(id)
      if (!el) return
      getLenis()?.resize()
      scrollTo(el, { offset: -offset })
    }

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        doScroll()
        // Re-correct once after lazy chunks / images above the target settle.
        timer = setTimeout(doScroll, 450)
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      clearTimeout(timer)
    }
  }, [pathname, hash, offset])
}

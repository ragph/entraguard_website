import { useSyncExternalStore } from 'react'

function subscribe(callback) {
  window.addEventListener('resize', callback)
  return () => window.removeEventListener('resize', callback)
}

export function useIsMobile(breakpoint = 768) {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth < breakpoint,
    () => false
  )
}

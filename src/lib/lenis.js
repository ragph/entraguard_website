let lenisInstance = null

export function setLenis(instance) {
  lenisInstance = instance
}

export function getLenis() {
  return lenisInstance
}

export function scrollTo(target, options) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options)
    return
  }
  // No Lenis (e.g. prefers-reduced-motion): honor `immediate` and `offset`.
  const behavior = options?.immediate ? 'auto' : 'smooth'
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior })
  } else if (target instanceof HTMLElement) {
    const top = target.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0)
    window.scrollTo({ top, behavior })
  }
}

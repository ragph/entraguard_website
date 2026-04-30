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
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else if (target instanceof HTMLElement) {
    const top = target.getBoundingClientRect().top + window.scrollY + (options?.offset ?? 0)
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

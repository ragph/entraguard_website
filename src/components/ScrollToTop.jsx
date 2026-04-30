import { useState, useEffect } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { scrollTo } from '../lib/lenis'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const scrolledPastTrigger = window.scrollY > 400
      const distanceFromBottom =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight
      const nearFooter = distanceFromBottom < 120
      setIsVisible(scrolledPastTrigger && !nearFooter)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    scrollTo(0)
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="text-xl" />
    </button>
  )
}

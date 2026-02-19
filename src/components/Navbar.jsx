import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const NAVBAR_HEIGHT = 64

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && open) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    if (!isHomePage) return

    const sectionIds = navLinks.map((link) => link.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: `-${NAVBAR_HEIGHT + 1}px 0px -40% 0px`,
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => sections.forEach((section) => observer.unobserve(section))
  }, [isHomePage])

  const scrollTo = useCallback((e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    setOpen(false)

    if (!isHomePage) {
      // Navigate to home page with hash
      navigate('/' + href)
      return
    }

    const el = document.getElementById(id)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
    window.scrollTo({ top, behavior: 'smooth' })
  }, [isHomePage, navigate])

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
          window.scrollTo({ top, behavior: 'smooth' })
        }, 100)
      }
    }
  }, [isHomePage, location.hash])

  const atHero = !scrolled && isHomePage
  const mobileOpen = open
  const showDark = isHomePage && atHero && !mobileOpen
  const logoSrc = showDark ? '/images/logo-light.png' : '/images/logo.png'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDark ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollTo(e, '#home')}
          className="flex items-center"
        >
          <img src={logoSrc} alt="EntraGuard" className="h-8 sm:h-9 w-auto transition-all duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`transition-colors duration-300 text-base font-semibold ${
                  showDark
                    ? isActive
                      ? 'text-amber-400'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#pricing"
          onClick={(e) => scrollTo(e, '#pricing')}
          className={`hidden md:inline-block text-base font-semibold rounded-full px-6 py-2.5 transition-all duration-300 ${
            showDark
              ? 'bg-white text-blue-950 hover:bg-slate-200'
              : 'bg-amber-400 hover:bg-amber-500 text-blue-950'
          }`}
        >
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-2xl bg-transparent border-none cursor-pointer transition-colors duration-300 ${
            showDark ? 'text-white' : 'text-gray-700'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 sm:px-6 pb-5 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = isHomePage && activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`transition-colors duration-300 text-base font-medium py-3 text-center border-b border-gray-100 ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, '#pricing')}
            className="bg-amber-400 hover:bg-amber-500 text-blue-950 text-base font-semibold rounded-full px-6 py-2.5 text-center transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { scrollTo } from '../lib/lenis'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Choose Us', to: '/why-choose-us' },
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

    const sectionIds = navLinks.filter((link) => link.href).map((link) => link.href.slice(1))
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

  const handleNavClick = useCallback((e, link) => {
    e.preventDefault()
    setOpen(false)

    // `link` is either a hash string ('#home') or a nav object that may carry
    // a route (`to`) for an inner page or a hash (`href`) for a homepage section.
    const to = typeof link === 'object' ? link.to : undefined
    const href = typeof link === 'string' ? link : link.href

    if (to) {
      navigate(to)
      return
    }

    if (!isHomePage) {
      navigate('/' + href)
      return
    }

    const el = document.getElementById(href.slice(1))
    if (!el) return

    scrollTo(el, { offset: -NAVBAR_HEIGHT })
  }, [isHomePage, navigate])

  // Arriving at the homepage with a hash (e.g. from /faq, or a footer link) is
  // handled by useHashScroll() in App — kept in one place to avoid drift.

  const atHero = !scrolled && isHomePage
  const mobileOpen = open
  const showDark = isHomePage && atHero && !mobileOpen
  const logoSrc = showDark ? '/images/logo-light.webp' : '/images/logo.webp'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showDark ? 'bg-transparent' : 'bg-white shadow-sm'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo — full page refresh back to home */}
        <a href="/" className="flex items-center">
          <img
            src={logoSrc}
            alt="EntraGuard"
            width={2100}
            height={426}
            loading="eager"
            decoding="async"
            className="h-8 sm:h-9 w-auto transition-all duration-300"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => {
            const isActive = link.to
              ? location.pathname === link.to
              : isHomePage && activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.to || link.href}
                onClick={(e) => handleNavClick(e, link)}
                aria-current={isActive ? 'page' : undefined}
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
          onClick={(e) => handleNavClick(e, '#pricing')}
          className={`hidden xl:inline-block text-base font-semibold rounded-full px-6 py-2.5 transition-all duration-300 ${
            showDark
              ? 'bg-white text-blue-950 hover:bg-slate-200'
              : 'bg-amber-400 hover:bg-amber-500 text-blue-950'
          }`}
        >
          Get Started
        </a>

        {/* Mobile Hamburger — two lines that morph into an X */}
        <button
          onClick={() => setOpen(!open)}
          className={`xl:hidden flex h-10 w-10 items-center justify-center bg-transparent border-none cursor-pointer transition-colors duration-300 ${
            showDark ? 'text-white' : 'text-gray-700'
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
                open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={open ? undefined : true}
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[36rem] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 sm:px-6 pb-5 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = link.to
              ? location.pathname === link.to
              : isHomePage && activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.to || link.href}
                onClick={(e) => handleNavClick(e, link)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl py-3 text-center text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="mt-3 bg-amber-400 hover:bg-amber-500 text-blue-950 text-base font-semibold rounded-full px-6 py-3 text-center transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}

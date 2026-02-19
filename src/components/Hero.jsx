import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden pt-32 md:pt-0 md:pb-0 -mt-16 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500"
    >
      {/* Background underlay image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 -bottom-20 opacity-10 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      <div className="max-w-max relative mx-auto px-4 sm:px-6 md:px-20 flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {/* Left Content */}
        <div
          className={`flex-1 text-center md:text-left md:pt-32 md:pb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block bg-emerald-400/20 text-emerald-400 text-sm font-extrabold px-4 py-1.5 rounded-full mb-6">
            Smart School Attendance System
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
            Smart Attendance,{' '}
            <span className="text-amber-400">Safer Campus,</span>{' '}
            Happier Parents
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
            Entraguard is a smart school attendance system that tracks student entry and exit in real time, sends instant notifications to parents, and gives administrators full visibility — all in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
            <a
              href="#pricing"
              className="bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-8 py-3.5 text-center transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full px-8 py-3.5 text-center transition-all duration-300"
            >
              Learn More
            </a>
          </div>

        </div>

        {/* Right Image */}
        <div
          className={`flex-1 hidden md:flex justify-end items-end self-end transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/images/hero-img.png"
            alt="Student protected by EntraGuard" 
            className="w-full max-w-2xl h-auto mt-28"
          />
        </div>

        {/* Mobile Image */}
        <div
          className={`md:hidden flex justify-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <img
            src="/images/hero-img.png"
            alt="Student protected by EntraGuard"
            className="w-72 sm:w-80 h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

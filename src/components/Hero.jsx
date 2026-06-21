import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const contentRef = useRef(null)
  const deskImgRef = useRef(null)
  const mobImgRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Entrance — plays on load since the hero is above the fold.
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      gsap.from([deskImgRef.current, mobImgRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex flex-col pt-24 sm:pt-28 xl:pt-4 xl:pb-0 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500"
    >
      <div className="max-w-[1720px] w-full relative mx-auto px-4 sm:px-6 md:px-12 xl:px-20 flex-1 flex flex-col xl:flex-row items-center justify-center gap-4 sm:gap-6 xl:gap-0">
        {/* Left Content */}
        <div ref={contentRef} className="flex-1 text-center xl:text-left xl:pt-32 xl:pb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white leading-[1.05] mb-4 md:mb-6">
            Stay <span className="text-amber-400">Connected</span> to Your Child's Education
          </h1>
          <p className="text-blue-100 text-sm sm:text-lg md:text-xl mb-4 max-w-xl mx-auto xl:mx-0">
            EntraGuard is the school companion platform that connects parents, teachers, and schools through attendance, academic progress, classroom updates, and meaningful communication — all in one secure and easy-to-use platform.
          </p>

          <div className="flex flex-row items-stretch gap-3 sm:gap-4 justify-center xl:justify-start mb-0 xl:mb-8">
            <a
              href="#contact"
              className="flex-1 sm:flex-none flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-4 py-2.5 text-sm sm:px-8 sm:py-3.5 sm:text-base text-center whitespace-nowrap transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full px-4 py-2.5 text-sm sm:px-8 sm:py-3.5 sm:text-base text-center whitespace-nowrap transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>

        </div>

        {/* Right Image */}
        <div ref={deskImgRef} className="flex-1 hidden xl:flex justify-end items-end self-end">
          <img
            src="/images/hero-cropped.webp"
            alt="Student protected by EntraGuard"
            width={971}
            height={1211}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-xl h-auto mt-28"
          />
        </div>

        {/* Mobile Image */}
        <div ref={mobImgRef} className="xl:hidden flex justify-center">
          <img
            src="/images/hero-cropped.webp"
            alt="Student protected by EntraGuard"
            width={971}
            height={1211}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-72 sm:w-80 md:w-96 h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

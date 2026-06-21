import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
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

      // Background parallax — scrubbed and Lenis-synced via ScrollTrigger.
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex flex-col pt-32 xl:pt-4 xl:pb-0 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500"
    >
      {/* Background underlay image */}
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 -bottom-20 opacity-10 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      <div className="max-w-[1720px] w-full relative mx-auto px-4 sm:px-6 md:px-12 xl:px-20 flex-1 flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-0">
        {/* Left Content */}
        <div ref={contentRef} className="flex-1 text-center xl:text-left xl:pt-32 xl:pb-24">
          <span className="inline-block bg-emerald-500 text-white text-sm font-extrabold px-4 py-1.5 rounded-full mb-6">
            Connecting Parents, Teachers &amp; Schools
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
            Stay Connected to Your Child's Education —{' '}
            <span className="text-amber-400">Every Day, Every Subject, Every Milestone.</span>
          </h1>
          <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-4 max-w-xl mx-auto xl:mx-0">
            EntraGuard is the school companion platform that connects parents, teachers, and schools through attendance, academic progress, classroom updates, and meaningful communication — all in one secure and easy-to-use platform.
          </p>
          <p className="font-script text-amber-300 text-base sm:text-lg md:text-xl leading-tight mb-6 md:mb-8 max-w-xl mx-auto xl:mx-0">
            Built for parents. Empowering teachers. Supporting schools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mb-8">
            <a
              href="#contact"
              className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-8 py-3.5 text-center transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold rounded-full px-8 py-3.5 text-center transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>

        </div>

        {/* Right Image */}
        <div ref={deskImgRef} className="flex-1 hidden xl:flex justify-end items-end self-end">
          <img
            src="/images/hero-img.webp"
            alt="Student protected by EntraGuard"
            width={1122}
            height={1268}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full max-w-2xl h-auto mt-28"
          />
        </div>

        {/* Mobile Image */}
        <div ref={mobImgRef} className="xl:hidden flex justify-center">
          <img
            src="/images/hero-img.webp"
            alt="Student protected by EntraGuard"
            width={1122}
            height={1268}
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

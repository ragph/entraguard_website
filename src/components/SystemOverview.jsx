import { useLayoutEffect, useRef } from 'react'
import { HiCheckCircle } from 'react-icons/hi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

function SystemRow({ system, index }) {
  const rowRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const isEven = index % 2 === 1

  useLayoutEffect(() => {
    // Only animate on tablet/desktop (the md+ side-by-side layout). On the
    // stacked mobile layout the slide-ins and parallax fight the small
    // viewport, so leave content in its natural, visible state there.
    // matchMedia also opts out of reduced-motion automatically.
    const mm = gsap.matchMedia()

    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      // Scroll-reveal: image and copy slide in from opposite sides, once.
      gsap.from(imageRef.current, {
        opacity: 0,
        xPercent: isEven ? 12 : -12,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%', once: true },
      })
      gsap.from(contentRef.current, {
        opacity: 0,
        xPercent: isEven ? -10 : 10,
        duration: 1,
        ease: 'power3.out',
        delay: 0.12,
        scrollTrigger: { trigger: rowRef.current, start: 'top 80%', once: true },
      })
    })

    return () => mm.revert()
  }, [isEven])

  return (
    <div
      ref={rowRef}
      className={`flex flex-col md:flex-row items-center gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* System mockup image */}
      <div ref={imageRef} className="w-full md:w-1/2 shrink-0">
        <img
          src={system.image}
          alt={system.title}
          width={774}
          height={722}
          loading="lazy"
          decoding="async"
          onLoad={() => ScrollTrigger.refresh()}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-5">{system.title}</h3>
        <ul className="space-y-1">
          {system.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 bg-white/0 py-4 rounded-2xl text-sm sm:text-base md:text-lg text-blue-100">
              <HiCheckCircle className="text-amber-400 mt-0.5 shrink-0 text-2xl" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const systems = [
  {
    title: 'For Parents',
    image: '/images/parent-system.webp?v=2',
    features: [
      'Attendance monitoring — notified whenever attendance is recorded',
      'Academic progress tracking — grades, remarks & performance summaries',
      'School announcements and advisories',
      'Student records access anytime',
      'Direct parent-teacher communication',
    ],
  },
  {
    title: 'For Teachers',
    image: '/images/teacher-system.webp?v=2',
    features: [
      'Subject-based attendance recording',
      'Academic record uploads & student profiles',
      'DepEd-compliant school forms generation',
      'Attendance reports & class management tools',
      'Built-in parent communication tools',
    ],
  },
  {
    title: 'For Schools',
    image: '/images/school-system.webp?v=2',
    features: [
      'School-wide attendance monitoring',
      'Academic performance & teacher compliance visibility',
      'Centralized reporting and digital student records',
      'Improved school-home communication',
    ],
  },
]

export default function SystemOverview() {
  return (
    <section id="system-overview" className="py-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          title="One Platform Connecting Parents, Teachers, and Schools"
          subtitle="EntraGuard serves as a digital companion throughout the student's educational journey — providing transparency, communication, attendance monitoring, and academic visibility, instead of paper notices, delayed reports, and fragmented communication."
          light
        />

        <div className="flex flex-col gap-20 mt-12 max-w-7xl mx-auto">
          {systems.map((system, index) => (
            <SystemRow key={system.title} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

const leftCards = [
  {
    title: 'Our Mission',
    description:
      'To strengthen the partnership between schools, teachers, and parents by making student progress, attendance, and communication more visible, accessible, and actionable.',
  },
  {
    title: 'Our Vision',
    description:
      'A future where every parent, teacher, and school works together through real-time information and meaningful collaboration to help every learner succeed.',
  },
]

const rightCards = [
  {
    title: 'Our Values',
    description:
      'Clarity. Reliability. Trust. We believe stronger schools start with shared information — so we give parents, teachers, and schools an honest, real-time view of every student\'s progress.',
  },
  {
    title: 'Our Commitment',
    description:
      'We are committed to continuously improving EntraGuard — making it simpler, faster, and more dependable so families and schools stay connected to every learner\'s progress.',
  },
]

function InfoCard({ card }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50">
      <h3 className="text-xl font-bold text-blue-950 mb-2">{card.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
    </div>
  )
}

export default function WhoWeAre() {
  const sectionRef = useRef(null)
  const leftColRef = useRef(null)
  const rightColRef = useRef(null)
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    // Desktop: scroll-scrubbed — the columns slide in from the sides while the
    // shield scales up, all tied to scroll position as the section enters.
    mm.add('(min-width: 1280px) and (prefers-reduced-motion: no-preference)', () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: true,
          },
        })
        .fromTo(imageRef.current, { scale: 0.4, opacity: 0.3 }, { scale: 1, opacity: 1, ease: 'none' }, 0)
        .fromTo(leftColRef.current, { x: -120, opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
        .fromTo(rightColRef.current, { x: 120, opacity: 0 }, { x: 0, opacity: 1, ease: 'none' }, 0)
    })

    // Mobile/tablet: a simple staggered fade-up reveal.
    mm.add('(max-width: 1279px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.from([leftColRef.current, imageRef.current, rightColRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading title="Who We Are" />

        <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-10">
          {/* Left Cards */}
          <div ref={leftColRef} className="flex-1 flex flex-col gap-5">
            {leftCards.map((card) => (
              <InfoCard key={card.title} card={card} />
            ))}
          </div>

          {/* Center - Image */}
          <div className="shrink-0 flex justify-center">
            <img
              ref={imageRef}
              src="/images/family-shield.webp"
              alt="A family protected and connected by EntraGuard"
              width={1128}
              height={1128}
              loading="lazy"
              decoding="async"
              className="w-72 sm:w-96 lg:w-[26rem] xl:w-[28rem] h-auto"
            />
          </div>

          {/* Right Cards */}
          <div ref={rightColRef} className="flex-1 flex flex-col gap-5">
            {rightCards.map((card) => (
              <InfoCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

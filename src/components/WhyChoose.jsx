import { useLayoutEffect, useRef } from 'react'
import {
  HiClipboardCheck,
  HiTrendingUp,
  HiChatAlt2,
  HiCheck,
} from 'react-icons/hi'
import gsap from 'gsap'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const reasons = [
  {
    icon: <HiClipboardCheck className="text-xl" />,
    chip: 'bg-blue-600',
    title: 'Stay Connected to Every Class',
    description:
      "Receive attendance updates from every subject and stay informed about your child's participation throughout the school day.",
  },
  {
    icon: <HiTrendingUp className="text-xl" />,
    chip: 'bg-emerald-500',
    title: 'Follow Academic Progress Beyond Report Cards',
    description:
      'Monitor grades, teacher remarks, and academic standing throughout the school year instead of waiting until the end of the grading period.',
  },
  {
    icon: <HiChatAlt2 className="text-xl" />,
    chip: 'bg-amber-500',
    title: 'Stronger Parent-Teacher Collaboration',
    description:
      'Receive announcements, reminders, and important school updates directly through the platform.',
  },
]

const FAMILY_IMG = '/images/parent-child.webp'

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const notifRef = useRef(null)
  const gradeRef = useRef(null)

  useLayoutEffect(() => {
    // Gentle, continuous bob so the overlay cards read as a live app rather
    // than a flat screenshot. Slightly different timing keeps them out of sync.
    // matchMedia opts out for users who prefer reduced motion.
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(notifRef.current, {
        y: -12,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
      gsap.to(gradeRef.current, {
        y: 10,
        duration: 3.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.4,
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left — copy + reasons */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="max-w-md text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.05] text-blue-950">
              Why parents love EntraGuard
            </h2>

            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-gray-600">
              When parents, teachers, and schools stay connected, students receive the support they
              need to thrive academically and personally.
            </p>

            <div className="mt-10 space-y-7">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${reason.chip}`}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950">{reason.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image with floating UI accents */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src={FAMILY_IMG}
              alt="Parents staying connected to their child's school day"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover ring-1 ring-blue-100"
            />

            {/* Floating attendance notification */}
            <div ref={notifRef} className="absolute -top-4 left-3 sm:left-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <HiClipboardCheck className="text-xl" />
              </div>
              <div className="pr-1">
                <p className="text-sm font-bold leading-tight text-blue-950">Attendance recorded</p>
                <p className="text-xs leading-tight text-gray-500">Math · Present</p>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <HiCheck className="text-base" />
              </div>
            </div>

            {/* Floating grade card */}
            <div ref={gradeRef} className="absolute -bottom-4 right-3 sm:right-6 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm">
              <div className="flex items-end gap-1">
                <span className="h-3 w-1.5 rounded-sm bg-blue-300" />
                <span className="h-6 w-1.5 rounded-sm bg-blue-500" />
                <span className="h-4 w-1.5 rounded-sm bg-amber-400" />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight text-blue-950">English</p>
                <p className="text-xs leading-tight text-gray-500">87.7 · Very Good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

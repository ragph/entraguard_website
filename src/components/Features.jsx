import { useCallback } from 'react'
import {
  HiBell,
  HiChartBar,
  HiTrendingUp,
  HiChat,
  HiClipboardCheck,
  HiShieldCheck,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useScrollProgress } from '../hooks/useScrollProgress'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: <HiBell className="text-2xl text-amber-500" />,
    title: 'Real-Time Attendance Notifications',
    description: 'Get notified instantly when your child is marked present or absent in every class.',
  },
  {
    icon: <HiChartBar className="text-2xl text-amber-500" />,
    title: 'Grades & Performance Tracking',
    description: 'View grades, subject performance, and evaluation insights anytime.',
  },
  {
    icon: <HiTrendingUp className="text-2xl text-amber-500" />,
    title: 'Performance Evaluation Insights',
    description: "Understand trends in your child's academic behavior and attendance patterns.",
  },
  {
    icon: <HiChat className="text-2xl text-amber-500" />,
    title: 'School & Teacher Communication',
    description: 'Receive announcements and communicate directly with teachers and school staff.',
  },
  {
    icon: <HiClipboardCheck className="text-2xl text-amber-500" />,
    title: 'Digital Roll Call Monitoring',
    description: 'Transparent, subject-level attendance logs — no hidden gaps.',
  },
  {
    icon: <HiShieldCheck className="text-2xl text-amber-500" />,
    title: 'Secure & Reliable System',
    description: "Your child's data is protected and always accessible — built with security and reliability in mind.",
  },
]

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

function FeatureBlock({ feature }) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-lg">
      <div className="w-12 h-12 rounded-full bg-blue-800 shrink-0 flex items-center justify-center">
        {feature.icon}
      </div>
      <div className="text-center">
        <h3 className="text-xl font-bold text-blue-950 mb-2">{feature.title}</h3>
        <p className="text-gray-500 text-md leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )
}

export default function Features() {
  const [mobileRef, isVisible] = useScrollAnimation(0.1)
  const [desktopRef, progress] = useScrollProgress(500)
  const eased = easeOut(progress)

  // Merge both refs so both hooks always track the element
  const mergedRef = useCallback(
    (node) => {
      mobileRef.current = node
      desktopRef.current = node
    },
    [mobileRef, desktopRef]
  )

  return (
    <section id="features" ref={mergedRef} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-0">
        <SectionHeading
          title="Everything You Need to Stay Connected to Your Child's School Life"
          subtitle="Real-time visibility into attendance, grades, and your child's daily progress."
        />

        {/* Mobile: stacked list */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <FeatureBlock feature={feature} />
            </div>
          ))}
        </div>

        {/* Desktop: radial hub layout with scroll-driven animation */}
        <div className="hidden lg:flex flex-col items-center gap-10">
          {/* Row 1 — Top feature (slides down) */}
          <div
            style={{
              transform: `translateY(${(1 - eased) * -60}px)`,
              opacity: eased,
            }}
          >
            <FeatureBlock feature={features[0]} />
          </div>

          {/* Row 2 — Left column + Shield + Right column */}
          <div className="flex items-center justify-center gap-16 xl:gap-24 w-full">
            {/* Left column (slides from left) */}
            <div
              className="flex flex-col items-end gap-14"
              style={{
                transform: `translateX(${(1 - eased) * -150}px)`,
                opacity: eased,
              }}
            >
              <FeatureBlock feature={features[1]} />
              <FeatureBlock feature={features[2]} />
            </div>

            {/* Center shield (scales up) */}
            <div
              className="shrink-0 w-60 h-w-60 flex items-center justify-center"
              style={{
                transform: `scale(${0.3 + eased * 0.7})`,
                opacity: eased,
              }}
            >
              <img src="/images/entraguard.png" alt="Entraguard" className="w-full h-full object-contain" />
            </div>

            {/* Right column (slides from right) */}
            <div
              className="flex flex-col items-start gap-14"
              style={{
                transform: `translateX(${(1 - eased) * 150}px)`,
                opacity: eased,
              }}
            >
              <FeatureBlock feature={features[3]} />
              <FeatureBlock feature={features[4]} />
            </div>
          </div>

          {/* Row 3 — Bottom feature (slides up) */}
          <div
            style={{
              transform: `translateY(${(1 - eased) * 60}px)`,
              opacity: eased,
            }}
          >
            <FeatureBlock feature={features[5]} />
          </div>
        </div>
      </div>
    </section>
  )
}

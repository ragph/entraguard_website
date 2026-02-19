import {
  HiIdentification,
  HiBell,
  HiChartBar,
  HiStatusOnline,
  HiExclamation,
  HiServer,
  HiFingerPrint,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useIsMobile } from '../hooks/useIsMobile'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: <HiIdentification className="text-2xl text-gray-600" />,
    title: 'ID & Photo Verification',
    description: 'Multi-factor identity verification combining photo recognition and ID card scanning.',
  },
  {
    icon: <HiBell className="text-2xl text-gray-600" />,
    title: 'Real-Time Notifications',
    description: 'Instant push notifications to parents and staff for every entry, exit, and security event.',
  },
  {
    icon: <HiChartBar className="text-2xl text-gray-600" />,
    title: 'Advanced Analytics',
    description: 'Comprehensive analytics with visual reports on attendance patterns and security data.',
  },
  {
    icon: <HiStatusOnline className="text-2xl text-gray-600" />,
    title: 'Offline Capability',
    description: 'Continue operating seamlessly even without internet — data syncs when connection restores.',
  },
  {
    icon: <HiExclamation className="text-2xl text-gray-600" />,
    title: 'Emergency Management',
    description: 'One-tap lockdown, emergency broadcasts, and real-time headcount during critical events.',
  },
  {
    icon: <HiServer className="text-2xl text-gray-600" />,
    title: 'Scalable Architecture',
    description: 'Cloud-native infrastructure that grows with you — from a single school to an entire district.',
  },
]

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

function FeatureBlock({ feature }) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-lg">
      <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 flex items-center justify-center">
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
  const mobile = useIsMobile(1024)
  const eased = easeOut(progress)

  return (
    <section id="features" ref={mobile ? mobileRef : desktopRef} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-0">
        <SectionHeading
          title="Advanced Security Features"
          subtitle="Powered by modern technology to keep schools safe and parents informed."
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
              className="shrink-0 w-44 h-44 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center shadow-xl"
              style={{
                transform: `scale(${0.3 + eased * 0.7})`,
                opacity: eased,
              }}
            >
              <HiFingerPrint className="text-7xl text-white" />
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

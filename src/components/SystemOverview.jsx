import { HiCheckCircle } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

function SystemRow({ system, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15)
  const isEven = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* System mockup image */}
      <div
        className={`w-full md:w-5/12 shrink-0 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isEven
            ? 'opacity-0 translate-x-16'
            : 'opacity-0 -translate-x-16'
        }`}
      >
        <img
          src={system.image}
          alt={system.title}
          width={774}
          height={722}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div
        className={`w-full md:w-7/12 transition-all duration-700 ease-out delay-150 ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isEven
            ? 'opacity-0 -translate-x-16'
            : 'opacity-0 translate-x-16'
        }`}
      >
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-5">{system.title}</h3>
        <ul className="space-y-1">
          {system.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 bg-white/0 py-4 rounded-2xl text-base md:text-xl text-blue-100">
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
    image: '/images/parent-system.webp',
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
    image: '/images/teacher-system.webp',
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
    image: '/images/school-system.webp',
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

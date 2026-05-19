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
    title: 'Your Parent Mobile App',
    image: '/images/parent-system.png',
    features: [
      'Real-time classroom attendance notifications',
      'Grades & subject performance reports',
      'Performance evaluation insights',
      'School & teacher announcements',
      'Direct communication with teachers',
    ],
  },
  {
    title: 'Backed by Your Child\'s Teachers',
    image: '/images/teacher-system.png',
    features: [
      'Teachers mark classroom attendance per subject',
      'Subject-level roll call you can see instantly',
      'Grades and evaluations shared with parents',
      'Updates synced to your app the moment they happen',
    ],
  },
  {
    title: 'Trusted by the School',
    image: '/images/school-system.png',
    features: [
      'Verified, accurate attendance and grade records',
      'Official school announcements delivered to parents',
      'A secure, school-adopted platform you can rely on',
    ],
  },
]

export default function SystemOverview() {
  return (
    <section id="system-overview" className="py-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeading
          title="One App for Your Child's Whole School Day"
          subtitle="Real-time attendance, grades, and communication — built around what every parent wants to know, and backed by teachers and the school."
          light
        />

        <div className="flex flex-col gap-20 mt-12">
          {systems.map((system, index) => (
            <SystemRow key={system.title} system={system} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

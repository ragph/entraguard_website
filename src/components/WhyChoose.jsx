import { HiCheck } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    image: '/images/identity.webp',
    title: 'Stay Connected to Every Class',
    description:
      "Receive attendance updates from every subject and stay informed about your child's participation throughout the school day.",
    benefits: [
      'Subject-based attendance updates',
      'Real-time notifications',
      'Attendance history tracking',
      'Better student accountability',
    ],
  },
  {
    image: '/images/growth.webp',
    title: 'Follow Academic Progress Beyond Report Cards',
    description:
      'Monitor grades, teacher remarks, and academic standing throughout the school year instead of waiting until the end of the grading period.',
    benefits: [
      'View academic performance',
      'Access teacher feedback',
      'Monitor student progress',
      'Identify concerns early',
    ],
  },
  {
    image: '/images/opportunity.webp',
    title: 'Stronger Parent-Teacher Collaboration',
    description:
      'Receive announcements, reminders, and important school updates directly through the platform.',
    benefits: [
      'Faster communication',
      'School announcements',
      'Activity reminders',
      'Improved parent involvement',
    ],
  },
]

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Parents Love EntraGuard"
          subtitle="When parents, teachers, and schools stay connected, students receive the support they need to thrive academically and personally."
          dotColors={['bg-amber-400', 'bg-amber-400', 'bg-amber-400']}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-16 h-16 mb-5">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  width={512}
                  height={512}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">{pillar.description}</p>
              <ul className="space-y-3 border-t border-gray-100 pt-6">
                {pillar.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-base text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <HiCheck className="text-xs" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

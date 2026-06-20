import {
  HiClipboardCheck,
  HiDocumentReport,
  HiChat,
  HiDatabase,
  HiEye,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const reasons = [
  {
    icon: <HiClipboardCheck className="text-2xl" />,
    title: 'Simple attendance recording',
    description: 'Quickly record attendance per subject session.',
  },
  {
    icon: <HiDocumentReport className="text-2xl" />,
    title: 'Reduced administrative work',
    description: 'Generate reports and school forms with fewer manual processes.',
  },
  {
    icon: <HiChat className="text-2xl" />,
    title: 'Better communication',
    description: 'Keep parents informed without repetitive messaging.',
  },
  {
    icon: <HiDatabase className="text-2xl" />,
    title: 'Centralized student information',
    description: 'Access attendance and academic records from one platform.',
  },
  {
    icon: <HiEye className="text-2xl" />,
    title: 'Improved student monitoring',
    description: 'Identify attendance concerns early and take action sooner.',
  },
]

export default function WhyTeachers() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="teachers" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Teachers Love EntraGuard"
          subtitle="Helping teachers spend more time teaching — less administrative workload, better communication with parents and students."
          dotColors={['bg-blue-600', 'bg-blue-600', 'bg-blue-600']}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex items-start gap-5 py-6 transition-all duration-700 ${
                index < reasons.length - 1 ? 'border-b border-gray-100' : ''
              } ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                {reason.icon}
              </div>
              <div className="pt-0.5">
                <h3 className="text-lg font-bold text-blue-950 mb-1">{reason.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}

          {/* Closing accent cell to balance the 5-item odd grid */}
          <div
            className={`flex items-center py-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
            style={{ transitionDelay: isVisible ? `${reasons.length * 90}ms` : '0ms' }}
          >
            <p className="text-blue-950 font-semibold text-lg leading-snug">
              Built around the way teachers actually work —{' '}
              <span className="text-blue-600">so the platform saves time instead of adding to the day.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

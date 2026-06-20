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

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex flex-col items-center text-center rounded-2xl bg-blue-50 p-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                {reason.icon}
              </div>
              <h3 className="mb-1.5 text-base font-bold text-blue-950">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Closing subtitle */}
        <p className="mx-auto mt-12 max-w-3xl text-center text-lg leading-relaxed text-gray-600">
          Built around the way teachers actually work —{' '}
          <span className="font-semibold text-blue-600">
            so the platform saves time instead of adding to the day.
          </span>
        </p>
      </div>
    </section>
  )
}

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
    icon: <HiClipboardCheck className="text-2xl text-amber-500" />,
    title: 'Simple Attendance Recording',
    description: 'Quickly record attendance per subject session.',
  },
  {
    icon: <HiDocumentReport className="text-2xl text-amber-500" />,
    title: 'Reduced Administrative Work',
    description: 'Generate reports and school forms with fewer manual processes.',
  },
  {
    icon: <HiChat className="text-2xl text-amber-500" />,
    title: 'Better Communication',
    description: 'Keep parents informed without repetitive messaging.',
  },
  {
    icon: <HiDatabase className="text-2xl text-amber-500" />,
    title: 'Centralized Student Information',
    description: 'Access attendance and academic records from one platform.',
  },
  {
    icon: <HiEye className="text-2xl text-amber-500" />,
    title: 'Improved Student Monitoring',
    description: 'Identify attendance concerns early and take action sooner.',
  },
]

export default function WhyTeachers() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="teachers" ref={ref} className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Teachers Love EntraGuard"
          subtitle="Helping teachers spend more time teaching — EntraGuard reduces administrative workload while improving communication with parents and students."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 mb-5 rounded-full bg-blue-800 flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

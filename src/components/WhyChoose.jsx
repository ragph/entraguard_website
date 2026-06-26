import {
  PiClipboardTextDuotone,
  PiTrendUpDuotone,
  PiChatsDuotone,
} from 'react-icons/pi'
import { useReveal } from '../hooks/useReveal'

const reasons = [
  {
    icon: <PiClipboardTextDuotone className="text-3xl" />,
    color: 'text-blue-600',
    title: 'Stay Connected to Every Class',
    description:
      "Receive attendance updates from every subject and stay informed about your child's participation throughout the school day.",
  },
  {
    icon: <PiTrendUpDuotone className="text-3xl" />,
    color: 'text-blue-600',
    title: 'Follow Academic Progress Beyond Report Cards',
    description:
      'Monitor grades, teacher remarks, and academic standing throughout the school year instead of waiting until the end of the grading period.',
  },
  {
    icon: <PiChatsDuotone className="text-3xl" />,
    color: 'text-blue-600',
    title: 'Stronger Parent-Teacher Collaboration',
    description:
      'Receive announcements, reminders, and important school updates directly through the platform.',
  },
]

const PARENT_APP_IMG = '/images/parent-app.webp'

export default function WhyChoose() {
  const gridRef = useReveal({ children: true })

  return (
    <section id="parents" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
          {/* Left — copy + reasons */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-3">
              For Parents
            </p>
            <h2 className="max-w-md text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] text-blue-950">
              Why parents love EntraGuard
            </h2>

            <p className="mt-6 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
              When parents, teachers, and schools stay connected, students receive the support they
              need to thrive academically and personally.
            </p>

            <div className="mt-10 space-y-7">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center ${reason.color}`}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-blue-950">{reason.title}</h3>
                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — EntraGuard parent app */}
          <div className="flex justify-center">
            <img
              src={PARENT_APP_IMG}
              alt="The EntraGuard parent app on a phone"
              width={634}
              height={1327}
              loading="lazy"
              decoding="async"
              className="h-[520px] w-auto drop-shadow-2xl sm:h-[660px] lg:h-[780px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

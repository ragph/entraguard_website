import {
  HiOfficeBuilding,
  HiClipboardCheck,
  HiBell,
  HiChartBar,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const steps = [
  {
    icon: <HiOfficeBuilding className="text-2xl" />,
    title: 'School sets up',
    description: 'Roles, classes, and student records are configured in minutes — no complex setup.',
  },
  {
    icon: <HiClipboardCheck className="text-2xl" />,
    title: 'Teachers record',
    description: 'Attendance is logged per subject, with grades and remarks added from any device.',
  },
  {
    icon: <HiBell className="text-2xl" />,
    title: 'Parents stay informed',
    description: 'Parents get real-time alerts the moment attendance or grades are posted.',
  },
  {
    icon: <HiChartBar className="text-2xl" />,
    title: 'Schools get visibility',
    description: 'Schools see centralized reports and insights across every class, anytime.',
  },
]

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="how-it-works" ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="How EntraGuard Works"
          subtitle="From setup to daily updates, EntraGuard keeps schools, teachers, and parents working from the same real-time information — in four simple steps."
        />

        <div className="relative mx-auto mt-14 max-w-6xl">
          {/* Connector line behind the step badges (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-blue-200"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
              >
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                  {step.icon}
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-extrabold text-blue-950 ring-2 ring-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-950">{step.title}</h3>
                <p className="max-w-xs text-base leading-relaxed text-gray-500">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

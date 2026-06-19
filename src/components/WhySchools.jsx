import { HiCheckCircle } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const benefits = [
  'School-wide attendance monitoring',
  'Parent engagement tracking',
  'Academic performance visibility',
  'Teacher compliance monitoring',
  'Centralized reporting',
  'Digital student records',
  'Improved school-home communication',
]

export default function WhySchools() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="schools" ref={ref} className="py-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Schools Choose EntraGuard"
          subtitle="School leaders need visibility into student attendance, academic progress, teacher compliance, and parent engagement. EntraGuard provides school-wide monitoring and reporting tools to support better decision-making."
          light
        />

        <div
          className={`max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-10 md:p-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-base md:text-lg text-blue-100">
                <HiCheckCircle className="text-amber-400 mt-0.5 shrink-0 text-2xl" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { HiUserGroup, HiAcademicCap, HiOfficeBuilding } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: <HiUserGroup className="text-2xl text-amber-500" />,
    title: 'Parents stay informed',
    description:
      "Follow your child's attendance, grades, and school updates as they happen — no more waiting until the end of the day.",
  },
  {
    icon: <HiAcademicCap className="text-2xl text-amber-500" />,
    title: 'Teachers reduce administrative workload',
    description:
      'Record attendance, share progress, and communicate with parents from a single platform — with less paperwork.',
  },
  {
    icon: <HiOfficeBuilding className="text-2xl text-amber-500" />,
    title: 'Schools gain better visibility',
    description:
      'Get school-wide insight into attendance, communication, and academic performance to support better decisions.',
  },
]

export default function BuiltFor() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Built for Parents. Empowering Teachers. Supporting Schools."
          subtitle="EntraGuard creates a stronger connection between home and school by giving everyone the information they need to support student success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-blue-800 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-10 md:mt-12">
          Together, they create a more connected learning environment for every student.
        </p>
      </div>
    </section>
  )
}

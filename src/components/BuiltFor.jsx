import { HiUserGroup, HiAcademicCap, HiOfficeBuilding } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: <HiUserGroup className="text-3xl" />,
    audience: 'For Parents',
    title: 'Stay informed, every day',
    description:
      "Follow your child's attendance, grades, and school updates as they happen — no more waiting until the end of the day.",
    accent: 'bg-amber-400',
    iconWrap: 'bg-amber-100 text-amber-500',
    label: 'text-amber-600',
  },
  {
    icon: <HiAcademicCap className="text-3xl" />,
    audience: 'For Teachers',
    title: 'Less paperwork, more teaching',
    description:
      'Record attendance, share progress, and communicate with parents from a single platform — with far less manual work.',
    accent: 'bg-blue-600',
    iconWrap: 'bg-blue-100 text-blue-600',
    label: 'text-blue-600',
  },
  {
    icon: <HiOfficeBuilding className="text-3xl" />,
    audience: 'For Schools',
    title: 'Visibility across the school',
    description:
      'See school-wide attendance, communication, and academic performance at a glance to support better decisions.',
    accent: 'bg-emerald-500',
    iconWrap: 'bg-emerald-100 text-emerald-600',
    label: 'text-emerald-600',
  },
]

export default function BuiltFor() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Built for Parents. Empowering Teachers. Supporting Schools."
          subtitle="EntraGuard gives everyone the information they need to support student success — and the same shared view of every learner's day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.audience}
              className={`group relative bg-white rounded-2xl border border-gray-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
            >
              <div className={`h-1.5 w-full ${pillar.accent}`} />
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${pillar.iconWrap}`}>
                  {pillar.icon}
                </div>
                <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${pillar.label}`}>
                  {pillar.audience}
                </p>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-base md:text-lg max-w-2xl mx-auto mt-12">
          One shared view — so parents, teachers, and schools support every student together.
        </p>
      </div>
    </section>
  )
}

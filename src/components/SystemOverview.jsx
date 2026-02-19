import { HiCheck, HiCheckCircle, HiChip, HiClipboardList, HiDeviceMobile, HiAcademicCap } from 'react-icons/hi'
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
      {/* Placeholder image */}
      <div
        className={`w-full md:w-5/12 shrink-0 transition-all duration-700 ease-out ${
          isVisible
            ? 'opacity-100 translate-x-0'
            : isEven
            ? 'opacity-0 translate-x-16'
            : 'opacity-0 -translate-x-16'
        }`}
      >
        <div className="w-full aspect-4/3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${system.iconBg}`}>
            <system.Icon className={`w-8 h-8 ${system.iconColor}`} />
          </div>
        </div>
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
        <ul className="space-y-3">
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
    title: 'Gate / Access System',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-300',
    Icon: HiChip,
    features: [
      'Automated gate control',
      'QR code & ID scanning',
      'Real-time entry logging',
      'Visitor management portal',
    ],
  },
  {
    title: 'School Administration',
    iconBg: 'bg-lime-500/20',
    iconColor: 'text-lime-300',
    Icon: HiClipboardList,
    features: [
      'Centralized dashboard',
      'Attendance tracking',
      'Security alert management',
      'Staff access control',
    ],
  },
  {
    title: 'Parent Mobile App',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-300',
    Icon: HiDeviceMobile,
    features: [
      'Real-time notifications',
      'Student check-in/out alerts',
      'Emergency announcements',
      'Digital authorization',
    ],
  },
  {
    title: 'Classroom Management',
    iconBg: 'bg-amber-400/20',
    iconColor: 'text-amber-300',
    Icon: HiAcademicCap,
    features: [
      'Attendance automation',
      'Student tracking by room',
      'Teacher access permissions',
      'Emergency headcount tools',
    ],
  },
]

export default function SystemOverview() {
  return (
    <section className="py-20 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-28">
        <SectionHeading
          title="Complete System Overview"
          subtitle="Four integrated modules working together to deliver comprehensive school security."
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

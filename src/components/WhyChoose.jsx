import {
  HiFingerPrint,
  HiShieldCheck,
  HiKey,
  HiClipboardList,
  HiExclamationCircle,
  HiGlobe,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  {
    icon: <HiFingerPrint className="text-2xl" />,
    color: 'bg-blue-100 text-blue-500',
    title: 'Advanced Identity',
    description: 'Biometric and photo-based verification ensures only authorized individuals enter school premises.',
  },
  {
    icon: <HiShieldCheck className="text-2xl" />,
    color: 'bg-amber-400/20 text-amber-500',
    title: 'Secure Environment',
    description: 'Multi-layered security protocols create a safe environment for students, staff, and visitors.',
  },
  {
    icon: <HiKey className="text-2xl" />,
    color: 'bg-emerald-500/15 text-emerald-500',
    title: 'Entrance Management',
    description: 'Smart gates and access points with automated logging of every entry and exit in real time.',
  },
  {
    icon: <HiClipboardList className="text-2xl" />,
    color: 'bg-lime-500/15 text-lime-500',
    title: 'Administrative Efficiency',
    description: 'Streamlined dashboards for school admins to manage attendance, reports, and security alerts.',
  },
  {
    icon: <HiExclamationCircle className="text-2xl" />,
    color: 'bg-red-400/20 text-red-600',
    title: 'Emergency Readiness',
    description: 'Instant lockdown capabilities and emergency protocols to respond to critical situations fast.',
  },
  {
    icon: <HiGlobe className="text-2xl" />,
    color: 'bg-purple-200 text-purple-600',
    title: 'Unlimited Scalability',
    description: 'Whether one school or a hundred, Entraguard scales seamlessly with your growing needs.',
  },
]

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Choose EntraGuard"
          subtitle="Built with cutting-edge technology and designed with schools in mind, Entraguard delivers unmatched security and peace of mind."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 border border-gray-200/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className={`w-14 h-14 mx-auto rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

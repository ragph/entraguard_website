import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  {
    image: '/images/identity.png',
    title: 'Advanced Identity',
    description: 'Biometric and photo-based verification ensures only authorized individuals enter school premises.',
  },
  {
    image: '/images/quality-assurance.png',
    title: 'Secure Environment',
    description: 'Multi-layered security protocols create a safe environment for students, staff, and visitors.',
  },
  {
    image: '/images/opportunity.png',
    title: 'Entrance Management',
    description: 'Smart gates and access points with automated logging of every entry and exit in real time.',
  },
  {
    image: '/images/data-monitoring.png',
    title: 'Administrative Efficiency',
    description: 'Streamlined dashboards for school admins to manage attendance, reports, and security alerts.',
  },
  {
    image: '/images/health-service.png',
    title: 'Emergency Readiness',
    description: 'Instant lockdown capabilities and emergency protocols to respond to critical situations fast.',
  },
  {
    image: '/images/growth.png',
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
              <div className="w-16 h-16 mx-auto mb-5">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
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

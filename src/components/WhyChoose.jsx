import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  {
    image: '/images/identity.png',
    title: 'Real-Time Entry Monitoring',
    description: 'Advanced RFID-based kiosk scanning logs every student entry and exit instantly — giving schools accurate, automated attendance records.',
  },
  {
    image: '/images/quality-assurance.png',
    title: 'Parent Peace of Mind',
    description: 'Parents receive instant notifications when their child enters or exits school, along with subject-level attendance updates and school announcements.',
  },
  {
    image: '/images/opportunity.png',
    title: 'Smarter Attendance Management',
    description: 'Teachers can easily track classroom attendance, student logs, and subject performance within a streamlined, easy-to-use system.',
  },
  {
    image: '/images/data-monitoring.png',
    title: 'Centralized Admin Dashboard',
    description: 'School administrators gain full visibility through a comprehensive dashboard with real-time monitoring and attendance analytics.',
  },
  {
    image: '/images/computer-device.png',
    title: 'Intelligent Analytics',
    description: 'AI-powered insights help schools identify attendance patterns, improve engagement, and make data-driven decisions.',
  },
  {
    image: '/images/growth.png',
    title: 'Built to Scale',
    description: 'From a single campus to an entire district, Entraguard grows with your institution — seamlessly and reliably.',
  },
]

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Schools Choose Entraguard"
          subtitle="Built for modern campuses, Entraguard connects parents, teachers, and administrators through real-time attendance visibility and intelligent monitoring."
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

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  {
    image: '/images/identity.png',
    title: 'Accurate, Real-Time Classroom Attendance',
    description: 'Teachers record attendance per subject with instant synchronization across the system — eliminating manual errors and ensuring reliable, up-to-date student records at all times.',
  },
  {
    image: '/images/quality-assurance.png',
    title: 'Instant Parent Notifications & Visibility',
    description: 'Parents receive real-time alerts when teachers mark attendance, along with subject-level updates and school announcements — improving transparency and trust.',
  },
  {
    image: '/images/opportunity.png',
    title: 'Streamlined Attendance & Student Tracking',
    description: 'Easily monitor attendance logs, subject records, and student activity in one intuitive system designed to simplify daily operations for teachers and staff.',
  },
  {
    image: '/images/data-monitoring.png',
    title: 'Unified Administrative Control Center',
    description: 'Administrators gain full visibility through a centralized dashboard with real-time monitoring, reporting tools, and system-wide attendance oversight.',
  },
  {
    image: '/images/computer-device.png',
    title: 'Actionable Insights with Smart Analytics',
    description: 'Identify trends, detect absentee patterns, and support data-driven decisions with built-in analytics designed to improve student engagement and performance.',
  },
  {
    image: '/images/growth.png',
    title: 'Scalable for Schools, Districts, and Beyond',
    description: 'From single campuses to multi-school deployments, Entraguard is built to grow with your institution — delivering consistent performance, reliability, and flexibility.',
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

import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  {
    image: '/images/identity.webp',
    title: 'Real-Time Classroom Visibility',
    description: 'Know exactly when your child enters every class with instant roll call notifications — no more guessing if they made it to school.',
  },
  {
    image: '/images/growth.webp',
    title: 'Stay Updated on Academic Performance',
    description: "Access grades, subject performance, and evaluation reports anytime — so you're always aware of your child's progress.",
  },
  {
    image: '/images/opportunity.webp',
    title: 'Direct Communication with Teachers',
    description: 'Receive announcements, updates, and communicate directly with teachers and the school — all in one place.',
  },
  {
    image: '/images/quality-assurance.webp',
    title: 'Daily Peace of Mind',
    description: "From attendance to performance, Entraguard keeps you connected to your child's school life — wherever you are.",
  },
]

export default function WhyChoose() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Built for Parents. Designed for Peace of Mind."
          subtitle="Entraguard keeps you connected to your child's daily progress — real-time attendance, grades, and direct communication with teachers, all in one app."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-16 h-16 mx-auto mb-5">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={512}
                  height={512}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
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

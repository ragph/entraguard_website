import { HiCheck } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  'Real-time classroom attendance notifications',
  'Full access to grades and performance reports',
  'Direct communication with teachers and school',
  'Subject-level attendance tracking (roll call visibility)',
  'Performance insights and evaluation tracking',
  'Secure parent mobile app access',
  'Continuous updates and system improvements',
]

export default function Pricing() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="pricing" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Affordable Peace of Mind for Every Parent"
          subtitle="Less than ₱1 per day to stay connected to your child's education."
        />

        <div className="flex justify-center">
          <div
            className={`bg-white/70 backdrop-blur-sm rounded-2xl hover:scale-105 p-6 sm:p-10 md:p-14 max-w-lg w-full border border-gray-200/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-8">
              <p className="text-gray-500 text-base font-medium mb-2">Per Student / Year</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">&#8369;99</span>
                <span className="text-gray-400 text-lg">.00</span>
              </div>
              <p className="text-gray-500 text-base mt-2">Billed annually</p>
            </div>

            <div className="border-t border-gray-100 pt-8 mb-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-gray-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <HiCheck className="text-xs" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="block w-full bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full py-4 text-center transition-all duration-300"
            >
              Get Started for Your Child Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

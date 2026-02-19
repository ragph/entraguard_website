import { HiCheck } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const features = [
  'Full access to all security modules',
  'Real-time parent notifications',
  'Admin dashboard & analytics',
  'Unlimited gate integrations',
  'Emergency management tools',
  'Dedicated support team',
  '99.9% uptime guarantee',
  'Free onboarding & training',
]

export default function Pricing() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="pricing" ref={ref} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Simple Pricing. Full Access."
          subtitle="One plan. Everything included. No hidden fees."
        />

        <div className="flex justify-center">
          <div
            className={`bg-white/70 backdrop-blur-sm rounded-2xl hover:scale-105 p-6 sm:p-10 md:p-14 max-w-lg w-full border border-gray-200/50 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-8">
              <p className="text-gray-500 text-base font-medium mb-2">Per Month Per Student</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">&#8369;180</span>
                <span className="text-gray-400 text-lg">.00</span>
              </div>
              <p className="text-gray-500 text-base mt-2">Billed monthly</p>
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
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

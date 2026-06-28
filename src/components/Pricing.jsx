import { useState } from 'react'
import { HiCheck } from 'react-icons/hi'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

const features = [
  'Real-time, subject-based attendance updates',
  'Grades, remarks & academic progress tracking',
  'Parent-teacher communication & school announcements',
  'Centralized digital student records',
  'DepEd-compliant school forms & reports',
  'Secure parent mobile app access',
  'Continuous updates and system improvements',
]

export default function Pricing() {
  const ref = useReveal()
  // Bumping this changes the <img> key, remounting it so the SVG's CSS
  // entrance/draw animations replay on click — from cache, no re-fetch.
  const [logoPlay, setLogoPlay] = useState(0)

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Affordable School-Home Connection"
          subtitle="For less than ₱1 per day, stay connected to your child's attendance, academic progress, and school life."
        />

        <div className="flex justify-center">
          <div
            ref={ref}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-10 md:p-14 max-w-lg w-full border border-gray-200/50"
          >
            <div className="text-center mb-8">
              <button
                type="button"
                onClick={() => setLogoPlay((n) => n + 1)}
                aria-label="Replay EntraGuard logo animation"
                className="mx-auto mb-6 block h-32 w-32 cursor-pointer border-0 bg-transparent p-0"
              >
                <img
                  key={logoPlay}
                  src="/images/logo-animated.svg"
                  alt="EntraGuard"
                  width={360}
                  height={360}
                  loading="lazy"
                  decoding="async"
                  className="h-32 w-32 object-contain"
                />
              </button>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                EntraGuard provides parents, teachers, and schools with the tools they need to support student success through better communication and visibility.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 mb-8">
              <ul className="space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
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
              className="block w-full bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full py-2.5 text-sm sm:py-3.5 sm:text-base text-center transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>

        {/* Optional add-ons */}
        <p className="text-center text-sm sm:text-base text-gray-500 mt-8">
          Looking for more? Schools can add the optional{' '}
          <a href="#fetcher" className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2">
            Gate Keeper &amp; Fetcher
          </a>{' '}
          add-on for safer arrivals and verified pickup.
        </p>
      </div>
    </section>
  )
}

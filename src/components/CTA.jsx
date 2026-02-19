import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTA() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-20">
        <div
          className={`bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-6 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-2 overflow-hidden relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-400/10 rounded-full" />
          <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-white/5 rounded-full" />
          <div className="absolute top-8 right-1/4 w-16 h-16 bg-emerald-400/10 rounded-full" />

          {/* Left */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Modernize Your School's Attendance System?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base mb-6 md:mb-8 max-w-xl">
              Join hundreds of schools and thousands of parents who trust Entraguard's
              smart attendance system to track every student, notify every parent, and secure every campus — in real time.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-amber-400 text-blue-950 hover:bg-amber-500 font-semibold rounded-full px-8 py-3.5 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Right */}
          <div className="md:block flex-shrink-0 self-end relative z-10">
            <img
              src="/images/cta.png"
              alt="Student celebrating with EntraGuard"
              className="w-full lg:w-[500px] h-auto -mb-10 sm:-mb-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

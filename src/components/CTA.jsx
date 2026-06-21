import { useReveal } from '../hooks/useReveal'

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-20">
        <div
          ref={ref}
          className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[2.5rem] p-6 sm:p-10 md:p-16 flex flex-col xl:flex-row items-center gap-8 xl:gap-2 overflow-hidden relative"
        >
          {/* Left */}
          <div className="flex-1 text-center xl:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-5 md:mb-6 leading-tight">
              Join Schools Building Stronger Parent Partnerships
            </h2>
            <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
              Help parents stay informed, support teachers, and create a more
              connected learning experience for every student. Request a demo and
              discover how EntraGuard can transform school-home communication.
            </p>
            <a
              href="#contact"
              className="inline-block bg-amber-400 text-blue-950 hover:bg-amber-500 font-semibold text-base md:text-lg rounded-full px-9 py-4 transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>

          {/* Right */}
          <div className="flex-shrink-0 self-center xl:self-end relative z-10">
            <img
              src="/images/cta.webp"
              alt="Student celebrating with EntraGuard"
              width={1158}
              height={1268}
              loading="lazy"
              decoding="async"
              className="w-64 sm:w-80 xl:w-[500px] h-auto -mb-10 sm:-mb-16"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

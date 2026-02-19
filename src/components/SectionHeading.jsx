import { useScrollAnimation } from '../hooks/useScrollAnimation'

const defaultDots = ['bg-amber-400', 'bg-blue-500', 'bg-emerald-500']

export default function SectionHeading({ title, subtitle, light = false, className = '', dotColors }) {
  const dots = dotColors || defaultDots
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <div ref={ref} className={`mb-10 md:mb-16 px-2 ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight transition-all duration-700 ${
          light ? 'text-white' : 'text-blue-950'
        } ${subtitle ? 'mb-4 md:mb-5' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {title}
      </h2>
      <div
        className={`flex justify-center gap-1.5 mb-5 transition-all duration-700 delay-75 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        {dots.map((color, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${color}`} />
        ))}
      </div>
      {subtitle && (
        <p
          className={`text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
            light ? 'text-blue-100' : 'text-gray-600'
          } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

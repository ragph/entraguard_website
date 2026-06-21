import { useReveal } from '../hooks/useReveal'

const defaultDots = ['bg-amber-400', 'bg-blue-500', 'bg-emerald-500']

export default function SectionHeading({ title, subtitle, light = false, className = '', dotColors, eyebrow, eyebrowColor = 'text-amber-600' }) {
  const dots = dotColors || defaultDots
  const ref = useReveal({ children: true })

  return (
    <div ref={ref} className={`mb-10 md:mb-16 px-2 ${className}`}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.14em] text-center mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight max-w-4xl mx-auto px-4 ${
          light ? 'text-white' : 'text-blue-950'
        } ${subtitle ? 'mb-4 md:mb-5' : ''}`}
      >
        {title}
      </h2>
      <div className="flex justify-center gap-1.5 mb-5">
        {dots.map((color, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${color}`} />
        ))}
      </div>
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto leading-relaxed ${
            light ? 'text-blue-100' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

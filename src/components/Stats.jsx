import { useState, useEffect, useRef, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { end: 4, suffix: '', label: 'Integrated Modules' },
  { text: '24/7', label: 'System Uptime' },
  { end: 100, suffix: '%', label: 'Data Encryption' },
  { end: 60, suffix: '+', label: 'Partner Schools' },
]

const DURATION = 2000

function CountUp({ end, suffix = '', isVisible }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const start = 0
    const startTime = performance.now()

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(start + (end - start) * eased))

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }, [end])

  useEffect(() => {
    if (isVisible) animate()
  }, [isVisible, animate])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

export default function Stats() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <div
          className={`bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl py-10 sm:py-16 md:py-20 px-4 sm:px-10 md:px-16 transition-all duration-700 relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-amber-400/10 rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 md:gap-16 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 mb-2 sm:mb-3">
                  {stat.text ? (
                    stat.text
                  ) : (
                    <CountUp end={stat.end} suffix={stat.suffix} isVisible={isVisible} />
                  )}
                </p>
                <p className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

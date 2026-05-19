import { useCallback } from 'react'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useIsMobile } from '../hooks/useIsMobile'
import SectionHeading from './SectionHeading'

const leftCards = [
  {
    title: 'Our Mission',
    description:
      "To keep parents connected to their child's school day — delivering real-time attendance, grades, and updates the moment they happen, all in one secure app.",
  },
  {
    title: 'Our Vision',
    description:
      "A future where every parent feels confident and informed about their child's education — never left guessing, never waiting until the end of the day.",
  },
]

const rightCards = [
  {
    title: 'Our Values',
    description:
      "Clarity. Reliability. Trust. We believe peace of mind comes from knowing — so we give parents an honest, real-time window into their child's school life.",
  },
  {
    title: 'Our Commitment',
    description:
      "We are committed to continuously improving Entraguard — making it simpler, faster, and more dependable so parents stay close to their child's progress, wherever they are.",
  },
]

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

function InfoCard({ card, index, progress, slideFrom, isVisible, mobile }) {
  if (mobile) {
    return (
      <div
        className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <h3 className="text-xl font-bold text-blue-950 mb-2">{card.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
      </div>
    )
  }

  const eased = easeOut(progress)
  const offset = (1 - eased) * 200 * (1 + index * 0.4)
  const tx = slideFrom === 'left' ? -offset : offset

  return (
    <div
      className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50"
      style={{ transform: `translateX(${tx}px)`, opacity: eased }}
    >
      <h3 className="text-xl font-bold text-blue-950 mb-2">{card.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
    </div>
  )
}

export default function WhoWeAre() {
  const [desktopRef, progress] = useScrollProgress(400)
  const [mobileRef, isVisible] = useScrollAnimation(0.15)
  const eased = easeOut(progress)
  const mobile = useIsMobile()

  // Merge both refs so both hooks always track the element
  const mergedRef = useCallback(
    (node) => {
      mobileRef.current = node
      desktopRef.current = node
    },
    [mobileRef, desktopRef]
  )

  const imageDesktopStyle = {
    transform: `scale(${0.2 + eased * 0.8})`,
    opacity: eased,
    transformOrigin: 'center center',
  }
  const imageMobileClass = `relative transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`

  return (
    <section
      id="about"
      ref={mergedRef}
      className="py-20"
    >
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading title="Who We Are" />

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* Left Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {leftCards.map((card, index) => (
              <InfoCard
                key={card.title}
                card={card}
                index={index}
                progress={progress}
                slideFrom="left"
                isVisible={isVisible}
                mobile={mobile}
              />
            ))}
          </div>

          {/* Center - Image */}
          <div className="order-last md:order-0 shrink-0 flex justify-center">
            <div
              className={mobile ? imageMobileClass : 'relative'}
              style={mobile ? undefined : imageDesktopStyle}
            >
              <img
                src="/images/family.png"
                alt="Parent receiving real-time school attendance notification"
                className="w-72 sm:w-96 md:w-md h-auto"
              />
              <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-emerald-400 rounded-full -z-10" />
              <div className="absolute -top-2 -left-4 w-16 h-16 bg-blue-500 rounded-full -z-10" />
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {rightCards.map((card, index) => (
              <InfoCard
                key={card.title}
                card={card}
                index={index}
                progress={progress}
                slideFrom="right"
                isVisible={isVisible}
                mobile={mobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useReveal } from '../hooks/useReveal'

// Three grouped value props shown as cards below the product shot — mirrors the
// reference layout's "category / title / description" card pattern.
const cards = [
  {
    eyebrow: 'Attendance',
    title: 'Roll-call · Live',
    description:
      'Record subject-level attendance in seconds from any device — accurate, paperless, and instant.',
  },
  {
    eyebrow: 'Paperwork',
    title: 'Reports · Automated',
    description:
      'DepEd-compliant forms and reports are generated for you, cutting down manual admin work.',
  },
  {
    eyebrow: 'Communication',
    title: 'Parents · Connected',
    description:
      'Share grades and updates and reach parents directly — without repetitive messaging.',
  },
  {
    eyebrow: 'Insights',
    title: 'Students · Tracked',
    description:
      'Spot attendance concerns early with every student’s records and trends in one place.',
  },
]

export default function WhyTeachers() {
  const cardsRef = useReveal({ children: true })

  return (
    <section id="teachers" className="bg-white py-12 md:py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 sm:px-10 md:px-16 py-16 md:py-24">
          {/* Hero */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              For Teachers
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              Why Teachers Love EntraGuard
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-blue-200">
              Helping teachers spend more time teaching — less administrative workload, better
              communication with parents and students.
            </p>
          </div>

          {/* Product shot */}
          <div className="mt-12 md:mt-16">
            <img
              src="/images/teacher-dashboard.webp"
              alt="EntraGuard teacher dashboard"
              width={1492}
              height={1054}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-5xl"
            />
          </div>

          {/* Heading + Learn More + cards */}
          <div className="mt-16 md:mt-24">
            <h3 className="max-w-md text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Built around how teachers work.
            </h3>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-blue-200">
              From taking attendance to reaching parents, every tool is designed to save time during
              a busy teaching day — so the platform works the way you already do.
            </p>

            <div ref={cardsRef} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                    {card.eyebrow}
                  </p>
                  <h4 className="mb-2 text-lg font-bold text-white">{card.title}</h4>
                  <p className="text-sm leading-relaxed text-blue-200">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

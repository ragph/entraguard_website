import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

// Labels are placed on an arc around the circle. `angle` is in degrees
// (0° = right, 90° = straight up); positions are derived via trig below.
const labels = [
  { text: 'Improved school-home communication', side: 'top', angle: 90 },
  { text: 'School-wide attendance monitoring', side: 'left', angle: 132 },
  { text: 'Parent engagement tracking', side: 'left', angle: 162 },
  { text: 'Academic performance visibility', side: 'left', angle: 182 },
  { text: 'Teacher compliance monitoring', side: 'right', angle: 48 },
  { text: 'Centralized reporting', side: 'right', angle: 18 },
  { text: 'Digital student records', side: 'right', angle: -2 },
]

// Circle center (within the 600px desktop stage) and the elliptical radii the
// labels are placed on. RADIUS_Y is larger so the top label clears the person's
// head and the rows get more vertical breathing room; RADIUS_X stays modest so
// the side text doesn't clip on narrower lg screens.
const CENTER_Y = 510
const RADIUS_X = 330
const RADIUS_Y = 420

const dot = (
  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />
)

function FeatureLabel({ text, side, angle }) {
  const rad = (angle * Math.PI) / 180
  const dx = Math.round(RADIUS_X * Math.cos(rad))
  const dy = Math.round(-RADIUS_Y * Math.sin(rad))
  const left = `calc(50% + ${dx}px)`
  const top = `${CENTER_Y + dy}px`

  if (side === 'top') {
    return (
      <div
        style={{ left, top, transform: 'translate(-50%, -100%)' }}
        className="absolute flex max-w-[220px] flex-col items-center gap-2 text-center"
      >
        <span className="text-sm font-medium text-blue-50">{text}</span>
        {dot}
      </div>
    )
  }
  if (side === 'left') {
    return (
      <div
        style={{ left, top, transform: 'translate(-100%, -50%)' }}
        className="absolute flex max-w-[210px] items-center gap-2"
      >
        <span className="text-right text-sm font-medium text-blue-50">{text}</span>
        {dot}
      </div>
    )
  }
  return (
    <div
      style={{ left, top, transform: 'translate(0, -50%)' }}
      className="absolute flex max-w-[210px] items-center gap-2"
    >
      {dot}
      <span className="text-sm font-medium text-blue-50">{text}</span>
    </div>
  )
}

export default function WhySchools() {
  const ref = useReveal()

  return (
    <section
      id="schools"
      className="overflow-hidden pt-20 md:pt-28 pb-0 bg-linear-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Why Schools Choose EntraGuard"
          subtitle="School leaders need visibility into student attendance, academic progress, teacher compliance, and parent engagement. EntraGuard provides school-wide monitoring and reporting tools to support better decision-making."
          light
          dotColors={['bg-emerald-400', 'bg-emerald-400', 'bg-emerald-400']}
        />

        <div ref={ref}>
          {/* Desktop — radial constellation */}
          <div className="relative mx-auto mt-4 hidden h-[600px] max-w-6xl lg:block">
            {/* radial backdrop: concentric rings + solid emerald circle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-[calc(50%-210px)] rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[510px] w-[510px] -translate-x-1/2 -translate-y-[calc(50%-210px)] rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 bottom-0 h-[520px] w-[520px] -translate-x-1/2 translate-y-[170px] rounded-full bg-emerald-500"
            />

            {/* person */}
            <img
              src="/images/school-admin.webp"
              alt="School administrator using EntraGuard"
              loading="lazy"
              decoding="async"
              className="absolute bottom-0 left-1/2 h-[500px] w-auto -translate-x-1/2 object-contain object-bottom"
            />

            {/* floating feature labels */}
            {labels.map((label) => (
              <FeatureLabel key={label.text} {...label} />
            ))}
          </div>

          {/* Mobile / tablet — list above, grounded photo below */}
          <div className="lg:hidden">
            <ul className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {labels.map((label) => (
                <li key={label.text} className="flex items-start gap-3 text-base text-blue-100">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  {label.text}
                </li>
              ))}
            </ul>
            <div className="relative mx-auto mt-10 flex w-full max-w-xs justify-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 translate-y-[96px] rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 translate-y-16 rounded-full bg-emerald-500"
              />
              <img
                src="/images/school-admin.webp"
                alt="School administrator using EntraGuard"
                loading="lazy"
                decoding="async"
                className="relative h-72 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

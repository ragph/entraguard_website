import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

// Labels are placed on an arc around the circle. `angle` is in degrees
// (0° = right, 90° = straight up); positions are derived via trig below.
const labels = [
  { text: 'Improved school-home communication', side: 'top', angle: 90 },
  { text: 'School-wide attendance monitoring', side: 'left', angle: 142 },
  { text: 'Parent engagement tracking', side: 'left', angle: 180 },
  { text: 'Academic performance visibility', side: 'left', angle: 218 },
  { text: 'Teacher compliance monitoring', side: 'right', angle: 38 },
  { text: 'Centralized reporting', side: 'right', angle: 0 },
  { text: 'Digital student records', side: 'right', angle: -38 },
]

// Labels sit on an ellipse around the centered photo. Positions are expressed
// as percentages of the stage (not pixels) so the whole constellation scales
// with the viewport. `angle` is in degrees (0° = right, 90° = straight up).
// RADIUS_X is % of stage width; RADIUS_Y is % of stage height.
const RADIUS_X = 31
const RADIUS_Y = 41

const dot = (
  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />
)

function FeatureLabel({ text, side, angle }) {
  const rad = (angle * Math.PI) / 180
  const dx = (RADIUS_X * Math.cos(rad)).toFixed(2)
  const dy = (-RADIUS_Y * Math.sin(rad)).toFixed(2)
  const left = `calc(50% + ${dx}%)`
  const top = `calc(50% + ${dy}%)`

  if (side === 'top') {
    return (
      <div
        style={{ left, top, transform: 'translate(-50%, -100%)' }}
        className="absolute flex max-w-[220px] flex-col items-center gap-2 text-center"
      >
        <span className="text-sm font-medium text-blue-950">{text}</span>
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
        <span className="text-right text-sm font-medium text-blue-950">{text}</span>
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
      <span className="text-sm font-medium text-blue-950">{text}</span>
    </div>
  )
}

export default function WhySchools() {
  const ref = useReveal()

  return (
    <section
      id="schools"
      className="overflow-hidden pt-16 md:pt-28 pb-8 md:pb-28 bg-white"
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="For Schools"
          eyebrowColor="text-emerald-600"
          title="Why Schools Choose EntraGuard"
          subtitle="School leaders need visibility into student attendance, academic progress, teacher compliance, and parent engagement. EntraGuard provides school-wide monitoring and reporting tools to support better decision-making."
          dotColors={['bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500']}
        />

        <div ref={ref}>
          {/* Desktop — photo (emerald circle baked in) with orbiting labels.
              The stage is a responsive aspect box; image/rings/labels are all
              sized in % so the whole graphic scales with the screen. */}
          <div className="relative mx-auto mt-4 hidden aspect-[1.7/1] w-full max-w-[1700px] xl:block">
            {/* faint halo rings around the baked-in circle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[41%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200"
            />

            <img
              src="/images/school-admin-circle.webp"
              alt="School administrator using EntraGuard"
              width={1280}
              height={1280}
              loading="lazy"
              decoding="async"
              className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2"
            />

            {/* floating feature labels */}
            {labels.map((label) => (
              <FeatureLabel key={label.text} {...label} />
            ))}
          </div>

          {/* Mobile / tablet — list + photo medallion */}
          <div className="xl:hidden">
            <ul className="mx-auto mb-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {labels.map((label) => (
                <li key={label.text} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  {label.text}
                </li>
              ))}
            </ul>
            <img
              src="/images/school-admin-circle.webp"
              alt="School administrator using EntraGuard"
              width={1280}
              height={1280}
              loading="lazy"
              decoding="async"
              className="-mx-4 -mt-2 -mb-8 w-[calc(100%+2rem)] max-w-none sm:mx-auto sm:my-0 sm:w-full sm:max-w-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

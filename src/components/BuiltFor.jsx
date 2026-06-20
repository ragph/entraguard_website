import {
  HiUserGroup,
  HiAcademicCap,
  HiOfficeBuilding,
  HiCheckCircle,
} from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

// To light up a row with a real person, set `image` to the path of a
// person-only PNG/WebP with a TRANSPARENT background (not a full mockup
// frame). Drop the file in /public/images and reference it here.
const rows = [
  {
    icon: <HiUserGroup className="text-4xl" />,
    audience: 'For Parents',
    title: 'Stay informed, every day',
    description:
      "Follow your child's attendance, grades, and school updates as they happen — no more waiting until the end of the day.",
    proof: 'Real-time alerts the moment attendance is recorded',
    tint: 'bg-amber-50 border-amber-100',
    media: 'bg-amber-100/50',
    chip: 'bg-amber-400 text-white',
    eyebrow: 'text-amber-600',
    check: 'text-amber-500',
    image: '/images/parent-cutout.webp',
  },
  {
    icon: <HiAcademicCap className="text-4xl" />,
    audience: 'For Teachers',
    title: 'Less paperwork, more teaching',
    description:
      'Record attendance, share progress, and reach parents from one platform — with far less manual work.',
    proof: 'DepEd-compliant forms and reports, generated for you',
    tint: 'bg-blue-50 border-blue-100',
    media: 'bg-blue-100/50',
    chip: 'bg-blue-600 text-white',
    eyebrow: 'text-blue-600',
    check: 'text-blue-600',
    image: '/images/teacher-cutout.webp',
  },
  {
    icon: <HiOfficeBuilding className="text-4xl" />,
    audience: 'For Schools',
    title: 'Visibility across the school',
    description:
      'See school-wide attendance, communication, and academic performance at a glance to support better decisions.',
    proof: 'School-wide monitoring with centralized reporting',
    tint: 'bg-emerald-50 border-emerald-100',
    media: 'bg-emerald-100/50',
    chip: 'bg-emerald-500 text-white',
    eyebrow: 'text-emerald-600',
    check: 'text-emerald-600',
    image: '/images/school-cutout.webp',
  },
]

function AudienceRow({ row, index, isVisible }) {
  // Even rows put the media on the left, odd on the right — so the Teachers
  // row (index 1) sits on the right, matching the source mockup.
  const mediaLeft = index % 2 === 0
  const hasImage = Boolean(row.image)

  return (
    <div
      className={`relative transition-all duration-700 ${hasImage ? 'md:pt-20' : ''} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
    >
      <div className={`relative rounded-3xl border ${row.tint} overflow-hidden md:overflow-visible`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch md:min-h-[460px]">
          {/* Text */}
          <div className={`p-8 sm:p-10 md:p-14 flex flex-col justify-center ${mediaLeft ? 'md:order-2' : ''}`}>
            <p className={`text-xs font-bold uppercase tracking-[0.14em] mb-3 ${row.eyebrow}`}>
              {row.audience}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
              {row.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              {row.description}
            </p>
            <div className="flex items-center gap-2.5 mt-6 pt-6 border-t border-black/5">
              <HiCheckCircle className={`text-xl shrink-0 ${row.check}`} />
              <p className="text-sm font-semibold text-blue-950/80 leading-snug">{row.proof}</p>
            </div>
          </div>

          {/* Media — real cutout when available, systematic placeholder until then */}
          <div className={`relative min-h-[300px] md:min-h-[360px] ${mediaLeft ? 'md:order-1' : ''}`}>
            {hasImage ? (
              <img
                src={row.image}
                alt={`${row.audience} — EntraGuard`}
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full md:h-[114%] w-auto max-w-none object-contain object-bottom"
              />
            ) : (
              <div className={`absolute inset-5 rounded-2xl ${row.media} flex items-center justify-center`}>
                <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${row.chip}`}>
                  {row.icon}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BuiltFor() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Built for Parents. Empowering Teachers. Supporting Schools."
          subtitle="Three roles, one shared view of every learner's day — so everyone has the information they need to support student success."
        />

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {rows.map((row, index) => (
            <AudienceRow key={row.audience} row={row} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

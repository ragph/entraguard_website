import { Fragment, useLayoutEffect, useRef } from 'react'
import {
  HiLockClosed,
  HiArrowNarrowRight,
} from 'react-icons/hi'
import {
  PiArrowsLeftRightDuotone,
  PiIdentificationBadgeDuotone,
  PiBellDuotone,
  PiUsersThreeDuotone,
  PiShieldCheckDuotone,
  PiGraduationCapDuotone,
} from 'react-icons/pi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

gsap.registerPlugin(ScrollTrigger)

// Gate Keeper — the on-site hardware kiosk at the school gate.
const gateFeatures = [
  {
    icon: <PiArrowsLeftRightDuotone className="text-3xl" />,
    title: 'Entry & exit logging at the gate',
    description:
      'Every student is scanned in and out at the gate, building an accurate, time-stamped record of who is on campus.',
  },
  {
    icon: <PiIdentificationBadgeDuotone className="text-3xl" />,
    title: 'Barcode student IDs',
    description:
      "A durable barcode sticker on each student's ID makes every scan fast and reliable — nothing extra to carry.",
  },
  {
    icon: <PiBellDuotone className="text-3xl" />,
    title: 'Real-time parent alerts',
    description:
      'Parents get an instant notification in the app the moment their child enters or leaves through the gate.',
  },
]

// Real-world roles a parent typically authorizes for pickup.
const fetcherRoles = ['Lola / Lolo', 'Yaya', 'Tito / Tita', 'Family driver', 'Trusted neighbor']

// The parent → fetcher → children relationship, shown as a visual chain.
const relationship = [
  { icon: <PiUsersThreeDuotone className="text-5xl" />, label: 'Parent', sub: 'owns & controls', color: 'text-blue-600' },
  { icon: <PiShieldCheckDuotone className="text-5xl" />, label: 'Fetcher', sub: 'authorized pickup', color: 'text-emerald-600' },
  { icon: <PiGraduationCapDuotone className="text-5xl" />, label: 'Children', sub: 'one or more', color: 'text-amber-500' },
]

export default function Fetcher() {
  const gateTextRef = useReveal({ children: true })
  const fetcherIntroRef = useReveal()
  const flowRef = useReveal()
  const privacyRef = useReveal()

  // Subtle scroll parallax on the device, matching SystemOverview / BuiltFor.
  const deviceWrapRef = useRef(null)
  const deviceRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        deviceRef.current,
        { yPercent: 6 },
        {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: {
            trigger: deviceWrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    })
    return () => mm.revert()
  }, [])

  return (
    <section id="fetcher" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Optional Add-On"
          eyebrowColor="text-blue-600"
          title="Safer Arrivals & Trusted Pickups"
          subtitle="An optional safety package that pairs Gate Keeper — our on-site kiosk that logs every student's entry and exit and alerts parents in real time — with Fetcher, which lets parents authorize the people they trust to pick up their child."
        />

        {/* ── Part 1: Gate Keeper (the hardware) ───────────────────────── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 items-center">
          {/* Device */}
          <div className="flex flex-col items-center lg:order-2">
            <div ref={deviceWrapRef} className="relative flex w-full justify-center">
              {/* Natural contact shadow on the floor beneath the wheels — hidden for now */}
              {/* <div
                aria-hidden="true"
                className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-4 sm:h-5 w-2/5 max-w-[230px] rounded-[50%] bg-blue-950/25 blur-lg"
              /> */}
              <img
                ref={deviceRef}
                src="/images/gate-keeper.webp"
                alt="Gate Keeper — EntraGuard's on-site kiosk scanning a student ID at the gate"
                width={711}
                height={1309}
                loading="lazy"
                decoding="async"
                onLoad={() => ScrollTrigger.refresh()}
                className="relative h-auto w-auto max-h-[440px] sm:max-h-[560px] object-contain"
              />
            </div>

            {/* Product caption */}
            <div className="mt-5 text-center">
              <p className="text-lg font-bold text-blue-950">Gate Keeper</p>
              <p className="text-sm text-gray-500 mt-0.5">
                EntraGuard's on-site entry &amp; exit kiosk
              </p>
            </div>
          </div>

          {/* Copy + feature highlights */}
          <div ref={gateTextRef} className="lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-3">
              The hardware
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
              Every arrival and exit, logged at the gate
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8">
              Gate Keeper sits at the school gate. Students scan the barcode on their ID as they come
              and go — so the school always knows who's on campus, and parents are kept in the loop the
              moment their child arrives or heads home.
            </p>

            <ul className="space-y-5">
              {gateFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center text-blue-600">
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-blue-950">{f.title}</h4>
                    <p className="text-sm sm:text-base text-gray-500 mt-0.5 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Part 2: Fetcher (the authorization) ──────────────────────── */}
        <div className="max-w-6xl mx-auto mt-20 md:mt-28 pt-16 md:pt-20 border-t border-gray-100">
          {/* Intro */}
          <div ref={fetcherIntroRef} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600 mb-3">
              The authorization
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
              Fetcher — safe, trusted pickup
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-gray-600">
              Parents can't always do the pickup. Fetcher lets a parent pre-register the people they
              trust — a lola, a yaya, a family driver — to collect their child, without exposing any
              private school information. The parent stays in control: they create the account, choose
              exactly which children it covers, and can deactivate it anytime.
            </p>
          </div>

          {/* Parent → Fetcher → Children, as a visual relationship chain */}
          <div ref={flowRef} className="mt-12 flex flex-col items-center">
            <div className="flex items-start justify-center gap-3 sm:gap-6">
              {relationship.map((node, i) => (
                <Fragment key={node.label}>
                  <div className="flex w-20 sm:w-24 flex-col items-center text-center">
                    <div className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center ${node.color}`}>
                      {node.icon}
                    </div>
                    <p className="mt-2.5 text-sm font-bold text-blue-950">{node.label}</p>
                    <p className="text-xs text-gray-500 leading-tight">{node.sub}</p>
                  </div>
                  {i < relationship.length - 1 && (
                    <HiArrowNarrowRight
                      aria-hidden="true"
                      className="mt-5 sm:mt-6 shrink-0 text-2xl sm:text-3xl text-blue-300"
                    />
                  )}
                </Fragment>
              ))}
            </div>
            <p className="mt-7 max-w-xl text-center text-sm sm:text-base text-gray-500">
              A parent authorizes one or more children to each fetcher — even kids across different
              schools.
            </p>
          </div>

          {/* Who can be a fetcher — centered chips */}
          <div className="mt-12 flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-950 mb-3">
              A fetcher can be someone like
            </p>
            <div className="flex max-w-xl flex-wrap justify-center gap-2.5">
              {fetcherRoles.map((role) => (
                <span
                  key={role}
                  className="inline-flex items-center rounded-full bg-pastel-blue text-blue-700 text-sm font-medium px-4 py-1.5"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Privacy assurance — the tight access boundary, in one line */}
          <div
            ref={privacyRef}
            className="mt-12 mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-emerald-100 bg-pastel-green p-6"
          >
            <HiLockClosed className="text-2xl text-emerald-600 shrink-0" />
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              A fetcher only ever sees each child&apos;s{' '}
              <span className="font-semibold text-blue-950">&ldquo;In&nbsp;school&nbsp;/&nbsp;Out&rdquo;</span>{' '}
              status — never grades, attendance history, messages, announcements, or payments.
            </p>
          </div>
        </div>

        {/* CTA — optional add-on, route to demo */}
        <div className="max-w-6xl mx-auto mt-16 md:mt-20 text-center">
          <p className="text-sm sm:text-base text-gray-500 mb-5">
            Gate Keeper and Fetcher are optional and available on request — perfect for schools that
            want safer arrivals and a verified pickup process.
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-8 py-3 text-sm sm:text-base transition-all duration-300"
          >
            Ask About This Add-On
          </a>
        </div>
      </div>
    </section>
  )
}

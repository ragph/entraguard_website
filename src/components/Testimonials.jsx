import { useEffect } from 'react'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { useReveal } from '../hooks/useReveal'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    quote:
      'EntraGuard helps me stay informed about my child\'s attendance and school activities even when I\'m busy at work.',
    name: 'Maria Santos',
    role: 'Parent',
    image: '/images/maria.webp',
  },
  {
    quote:
      'I no longer need to wait until report card day to understand how my child is doing in school.',
    name: 'Grace Mendoza',
    role: 'Parent',
    image: '/images/grace.webp',
  },
  {
    quote:
      'The platform makes communication with parents easier and helps me monitor student attendance more efficiently.',
    name: 'James Reyes',
    role: 'Teacher',
    image: '/images/james.webp',
  },
  {
    quote:
      'EntraGuard gives us better visibility into attendance and helps strengthen our connection with parents.',
    name: 'Dennis Aquino',
    role: 'School Administrator',
    image: '/images/dennis.webp',
  },
  {
    quote:
      'For less than a peso a day, I always know if my child made it to every class. It\'s the best peace of mind I\'ve had.',
    name: 'Rowena Lim',
    role: 'Parent',
    image: '/images/rowena.webp',
  },
  {
    quote:
      'Taking attendance and sharing updates with parents now takes minutes, not hours — it gives me more time to teach.',
    name: 'Carlos Bautista',
    role: 'Teacher',
    image: '/images/carlos.webp',
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm h-full flex flex-col min-h-[280px] relative">
      {/* Quote icon */}
      <FaQuoteLeft className="absolute top-4 right-4 text-4xl text-blue-100" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <HiStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 italic flex-1">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-blue-50"
        />
        <div>
          <p className="text-blue-950 font-semibold text-sm sm:text-base">{testimonial.name}</p>
          <p className="text-gray-500 text-xs sm:text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal()

  // This section is lazy-loaded, so its real height replaces the Suspense
  // placeholder after mount — recompute ScrollTrigger positions so the reveal
  // animations for sections below it (Pricing/Contact) stay aligned.
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="py-24 bg-amber-400">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="What Parents, Teachers, and Schools Are Saying"
          subtitle="Real stories from the families, teachers, and school leaders staying connected through EntraGuard."
          className="[&_h2]:text-blue-950 [&_p]:text-blue-950/70"
          dotColors={['bg-white', 'bg-white', 'bg-white']}
        />

        <div ref={ref}>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={{
              enabled: true,
              sticky: true,
            }}
            grabCursor
            loop
            className="select-none pb-2"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="!h-auto">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

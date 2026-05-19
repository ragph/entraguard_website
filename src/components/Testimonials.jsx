import { HiStar, HiUserCircle } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    quote:
      'Now I know the moment my child shows up to class. The instant notifications give me peace of mind every single day.',
    name: 'Maria Santos',
    role: 'Parent',
  },
  {
    quote:
      'I can see my son\'s grades and performance reports right on my phone. I no longer wait for report cards to know how he\'s doing.',
    name: 'Grace Mendoza',
    role: 'Parent',
  },
  {
    quote:
      'I love seeing subject-level attendance updates throughout the day. It keeps me involved in my child\'s education.',
    name: 'James Reyes',
    role: 'Parent',
  },
  {
    quote:
      'Being able to message my daughter\'s teacher directly through the app makes me feel truly connected to her school.',
    name: 'Dennis Aquino',
    role: 'Parent',
  },
  {
    quote:
      'For less than a peso a day, I always know if my child made it to every class. It\'s the best peace of mind I\'ve had.',
    name: 'Rowena Lim',
    role: 'Parent',
  },
  {
    quote:
      'It feels good knowing I\'m always updated about my daughter\'s school day.',
    name: 'Lisa Tan',
    role: 'Parent',
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

      <p className="text-gray-600 text-base leading-relaxed mb-6 italic flex-1">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3">
        <HiUserCircle className="text-4xl text-gray-300 shrink-0" />
        <div>
          <p className="text-blue-950 font-semibold text-base">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-24 bg-amber-400">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="What Parents Are Saying"
          subtitle="Real peace of mind, from parents who always know how their child's school day is going."
          className="[&_h2]:text-blue-950 [&_p]:text-blue-950/70"
          dotColors={['bg-white', 'bg-white', 'bg-white']}
        />

        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
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
            className="pb-4"
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

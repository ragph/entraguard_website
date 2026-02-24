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
      'Now I know exactly when my child arrives at school. The instant notifications give me peace of mind every single day.',
    name: 'Maria Santos',
    role: 'Parent',
  },
  {
    quote:
      'The dashboard gives us full visibility across our campus. Attendance monitoring has never been this clear and efficient.',
    name: 'Principal Garcia',
    role: 'School Administrator',
  },
  {
    quote:
      'I love being able to see not just entry and exit, but also subject attendance updates. It keeps me involved in my child\'s education.',
    name: 'James Reyes',
    role: 'Parent',
  },
  {
    quote:
      'Entraguard modernized how we manage attendance. Everything is automated and organized.',
    name: 'Dr. Ana Cruz',
    role: 'Principal',
  },
  {
    quote:
      'Having centralized data across multiple schools allows us to make smarter, data-driven decisions.',
    name: 'Mark Villanueva',
    role: 'District Administrator',
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
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-white h-full flex flex-col min-h-[280px] relative">
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
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="What Our Community Says"
          subtitle="Entraguard connects families, classrooms, and campuses through real-time visibility."
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

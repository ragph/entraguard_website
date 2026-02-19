import { HiStar, HiUserCircle } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    quote:
      'Entraguard has completely changed how we manage school security. The real-time alerts give me peace of mind knowing my child is safe.',
    name: 'Maria Santos',
    role: 'Parent',
  },
  {
    quote:
      'The admin dashboard is incredibly intuitive. We reduced unauthorized entries by 95% in the first month. Absolutely game-changing.',
    name: 'Principal Garcia',
    role: 'School Administrator',
  },
  {
    quote:
      'As a parent of three, getting instant notifications when my kids arrive at school is priceless. The app is so easy to use.',
    name: 'James Reyes',
    role: 'Parent',
  },
  {
    quote:
      'The emergency lockdown feature alone makes Entraguard worth it. Response time went from minutes to seconds.',
    name: 'Dr. Ana Cruz',
    role: 'School Principal',
  },
  {
    quote:
      'We piloted Entraguard across 12 schools in our district. The centralized dashboard gives us full visibility across every campus.',
    name: 'Mark Villanueva',
    role: 'District Administrator',
  },
  {
    quote:
      'I love that I get a notification the moment my daughter enters school. It gives our whole family peace of mind every morning.',
    name: 'Lisa Tan',
    role: 'Parent',
  },
]

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-white h-full flex flex-col min-h-[280px]">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <HiStar key={i} className="text-yellow-400 text-xl" />
        ))}
      </div>

      <p className="text-gray-600 text-base leading-relaxed mb-6 italic flex-1">
        &ldquo;{testimonial.quote}&rdquo;
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
          subtitle="Trusted by parents, administrators, and educators across the Philippines."
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

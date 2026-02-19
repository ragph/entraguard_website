import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SectionHeading from './SectionHeading'

const contactInfo = [
  {
    icon: <HiMail className="text-xl" />,
    label: 'Email',
    value: 'info@entraguard.online',
  },
  {
    icon: <HiPhone className="text-xl" />,
    label: 'Phone',
    value: '(82) 317 2944',
  },
  {
    icon: <HiLocationMarker className="text-xl" />,
    label: 'Address',
    value: 'Door #5, TMNT Building, Doña Vicenta Drive, J.P. Laurel Ave., Bajada, Davao City, Philippines, 8000',
  },
]

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions about Entraguard? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible."
        />

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Contact Info */}
          <div
            className={`lg:w-2/5 flex flex-col gap-4 sm:gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 flex items-start gap-4 transition-all duration-500"
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">{item.label}</p>
                  <p className="text-base font-medium text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:w-3/5 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-5 sm:p-8 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Juan Dela Cruz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us more about your inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200/80 bg-white/50 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-10 py-3.5 text-base transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-green-600 font-medium text-sm animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

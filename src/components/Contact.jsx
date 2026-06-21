import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useReveal } from '../hooks/useReveal'
import { submitForm } from '../lib/web3forms'
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
  const infoRef = useReveal({ children: true })
  const formRef = useReveal({ delay: 0.15 })
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    setStatus('sending')

    try {
      const ok = await submitForm(new FormData(form))
      if (ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions about Entraguard? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible."
        />

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Contact Info */}
          <div ref={infoRef} className="lg:w-2/5 flex flex-col gap-4 sm:gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">{item.label}</p>
                  <p className="text-sm sm:text-base font-medium text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="lg:w-3/5">
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

              {/* Honeypot — bots fill this, humans can't see it */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-10 py-2.5 text-sm sm:py-3.5 sm:text-base transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-600 font-medium text-sm animate-fade-in">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600 font-medium text-sm animate-fade-in">
                  Something went wrong. Please try again, or email us directly at info@entraguard.online.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

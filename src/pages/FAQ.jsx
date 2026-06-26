import { useState } from 'react'
import { HiChevronDown, HiMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageHeader from '../components/PageHeader'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useHashScroll } from '../hooks/useHashScroll'

const faqs = [
  {
    q: 'What is EntraGuard?',
    a: 'EntraGuard is a school companion platform that connects parents, teachers, and schools. Parents get real-time attendance updates, academic progress, classroom announcements, and direct communication with teachers — all in one secure, easy-to-use app.',
  },
  {
    q: 'Who is EntraGuard for?',
    a: 'It is built for three groups working together: parents who want to stay informed about their child\'s school day, teachers who want less paperwork and easier parent communication, and schools that need school-wide attendance and academic visibility.',
  },
  {
    q: 'How much does EntraGuard cost?',
    a: 'EntraGuard is designed to be affordable — for less than ₱1 per day, parents stay connected to their child\'s attendance, academic progress, and school life. Request a demo and we\'ll walk you through pricing for your school.',
  },
  {
    q: 'How does my child\'s school start using EntraGuard?',
    a: 'EntraGuard is adopted by the school so that attendance and grade records are official and verified. The quickest way to get started is to request a demo — we\'ll help your school set up roles, classes, and student records in minutes.',
  },
  {
    q: 'How do parents receive updates?',
    a: 'Parents get real-time notifications the moment attendance is recorded or grades and remarks are posted — no more waiting until the end of the day or until report-card season.',
  },
  {
    q: 'Are the attendance and grade records official?',
    a: 'Yes. Because the school adopts the platform, teachers record subject-level attendance and grades directly in EntraGuard, so the records parents see are verified and accurate.',
  },
  {
    q: 'What are the Gate Keeper and Fetcher add-ons?',
    a: 'They are an optional safety package. Gate Keeper is an on-site kiosk at the school gate: students scan the barcode on their ID as they enter and exit, so the school knows who is on campus and parents get a real-time notification in the app the moment their child arrives or leaves. Fetcher is the authorization layer — parents pre-register trusted people (a lola, yaya, tito/tita, family driver, or neighbor) to pick up their child. The parent creates the fetcher\'s account, sets a password, and chooses exactly which children that person may collect. A fetcher logs in to a single, focused screen showing only their assigned children and each one\'s "In school / Out" status — they cannot see grades, attendance history, messages, announcements, or payments. Both are available on request.',
  },
  {
    q: 'Is EntraGuard DepEd-compliant?',
    a: 'Yes. EntraGuard generates DepEd-compliant forms and reports for teachers, reducing manual paperwork while keeping records aligned with requirements.',
  },
  {
    q: 'Is my data secure?',
    a: 'Protecting student and family data is a top priority. EntraGuard uses industry-standard security, including encryption in transit and at rest and role-based access controls. You can read the full details in our Privacy Policy.',
  },
  {
    q: 'What devices do I need?',
    a: 'Parents use the EntraGuard mobile app on their phone. Teachers can record attendance and share grades from any device, and schools access centralized reporting from their dashboard.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
      >
        <span className="text-sm sm:text-base font-semibold text-blue-950">{faq.q}</span>
        <HiChevronDown
          className={`text-xl shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-sm sm:text-base leading-relaxed text-gray-600">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  useDocumentMeta(
    'FAQ — EntraGuard',
    'Frequently asked questions about EntraGuard — pricing, setup, security, attendance and grade records, and how parents, teachers, and schools stay connected.'
  )

  useHashScroll()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about EntraGuard — how it works, pricing, security, and getting your school started."
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Still have questions?</h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our team is happy to help you and your school
            get started.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-6 py-2.5 text-sm sm:py-3.5 sm:text-base transition-all duration-300"
          >
            <HiMail className="text-lg" />
            Contact Us
          </Link>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

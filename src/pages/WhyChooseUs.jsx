import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageHeader from '../components/PageHeader'
import WhyChoose from '../components/WhyChoose'
import WhyTeachers from '../components/WhyTeachers'
import WhySchools from '../components/WhySchools'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useHashScroll } from '../hooks/useHashScroll'

export default function WhyChooseUs() {
  useDocumentMeta(
    'Why Choose Us — EntraGuard',
    'Why parents, teachers, and schools choose EntraGuard — real-time attendance, academic visibility, and stronger school-home communication.'
  )
  // Honor /why-choose-us#parents|#teachers|#schools, incl. footer links
  // clicked while already on this page.
  useHashScroll()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <PageHeader
        title="Why Choose Us"
        subtitle="See how EntraGuard brings parents, teachers, and schools together — with real-time attendance, academic visibility, and stronger school-home communication."
      />

      <WhyChoose />
      <WhyTeachers />
      <WhySchools />

      {/* Closing CTA */}
      <section className="bg-white px-4 sm:px-6 pt-8 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to connect your school community?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-7 max-w-2xl mx-auto leading-relaxed">
            Join the parents, teachers, and schools already staying connected through EntraGuard —
            with real-time attendance, academic visibility, and stronger communication.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold rounded-full px-7 py-2.5 text-sm sm:py-3.5 sm:text-base transition-all duration-300"
          >
            Request a Demo
            <HiArrowRight className="text-lg" />
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

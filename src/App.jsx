import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import BuiltFor from './components/BuiltFor'
import SystemOverview from './components/SystemOverview'
import WhyChoose from './components/WhyChoose'
import WhyTeachers from './components/WhyTeachers'
import WhySchools from './components/WhySchools'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useDocumentMeta } from './hooks/useDocumentMeta'

export default function App() {
  useDocumentMeta(
    'EntraGuard — Connecting Parents, Teachers & Schools',
    'EntraGuard is the school companion platform that connects parents, teachers, and schools through attendance, academic progress, classroom updates, and communication — all in one secure, easy-to-use platform.'
  )

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <BuiltFor />
      <SystemOverview />
      <WhyChoose />
      <WhyTeachers />
      <WhySchools />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

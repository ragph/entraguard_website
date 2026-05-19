import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import WhyChoose from './components/WhyChoose'
import SystemOverview from './components/SystemOverview'
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
    'Entraguard - A Parent-Centered School Companion',
    'Entraguard is a parent-first school companion that gives you real-time classroom attendance, grade visibility, performance insights, and direct communication with teachers — all in one secure app.'
  )

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyChoose />
      <SystemOverview />
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

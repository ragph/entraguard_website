import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import BuiltFor from './components/BuiltFor'
import SystemOverview from './components/SystemOverview'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'

// Below the fold + pulls in Swiper — load it as a separate async chunk so the
// initial homepage bundle stays small.
const Testimonials = lazy(() => import('./components/Testimonials'))
// import CTA from './components/CTA' — hidden for now, re-enable when needed
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { useDocumentMeta } from './hooks/useDocumentMeta'
import { useHashScroll } from './hooks/useHashScroll'

export default function App() {
  useDocumentMeta(
    'EntraGuard — Connecting Parents, Teachers & Schools',
    'EntraGuard is the school companion platform that connects parents, teachers, and schools through attendance, academic progress, classroom updates, and communication — all in one secure, easy-to-use platform.'
  )
  // Scroll to a #section when the homepage is opened with a hash.
  useHashScroll()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <BuiltFor />
      <SystemOverview />
      <HowItWorks />
      <Suspense fallback={<div className="min-h-[480px] bg-amber-400" />}>
        <Testimonials />
      </Suspense>
      <Pricing />
      {/* <CTA /> — hidden for now, re-enable when needed */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import WhyChoose from './components/WhyChoose'
import SystemOverview from './components/SystemOverview'
import Features from './components/Features'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <WhyChoose />
      <SystemOverview />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

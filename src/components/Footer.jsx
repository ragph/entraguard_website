import { Link } from 'react-router-dom'
import { FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const solutionLinks = [
  { label: 'Real-Time Attendance', href: '#features' },
  { label: 'Grades & Performance', href: '#features' },
  { label: 'Teacher Communication', href: '#features' },
]

// TODO: replace each `href` with the real EntraGuard profile URL.
const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook', href: 'https://facebook.com/' },
  { icon: <FaTiktok />, label: 'TikTok', href: 'https://tiktok.com/' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: <FaYoutube />, label: 'YouTube', href: 'https://youtube.com/' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <img
                src="/images/logo-light.webp"
                alt="EntraGuard"
                width={2100}
                height={426}
                loading="lazy"
                decoding="async"
                className="h-10 md:h-12 w-auto"
              />
            </a>
            <p className="text-base leading-relaxed text-gray-400">
              Entraguard is a parent-first school companion that keeps you connected
              to your child's attendance, grades, and school day — in real time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">What You Get</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-base text-gray-400 mb-6">
              <li>
                <a href="mailto:info@entraguard.online" className="hover:text-white transition-colors duration-300">
                  info@entraguard.online
                </a>
              </li>
              <li>
                <a href="tel:+63823172944" className="hover:text-white transition-colors duration-300">
                  (82) 317 2944
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Door+5+TMNT+Building+Dona+Vicenta+Drive+JP+Laurel+Ave+Bajada+Davao+City+Philippines+8000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Door #5, TMNT Building, Doña Vicenta Drive, J.P. Laurel Ave., Bajada, Davao City, Philippines, 8000
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-500 flex items-center justify-center text-white hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Entraguard. All rights reserved.
          </p>

          {/* Center - Privacy & Terms */}
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-base text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-base text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>

          {/* Right - Powered By */}
          <a href="https://www.ragph.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-sm text-gray-500">Powered by</span>
            <img
              src="/images/rag.png"
              alt="RAG IT Solutions"
              width={1153}
              height={548}
              loading="lazy"
              decoding="async"
              className="h-7 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const solutionLinks = [
  { label: 'Gate Access System', href: '#features' },
  { label: 'School Administration', href: '#features' },
  { label: 'Parent Mobile App', href: '#features' },
  { label: 'Classroom Management', href: '#features' },
]

const socialLinks = [
  { icon: <FaFacebookF />, label: 'Facebook' },
  { icon: <FaTwitter />, label: 'Twitter' },
  { icon: <FaInstagram />, label: 'Instagram' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-max mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <img src="/images/logo-light.png" alt="EntraGuard" className="h-9 w-auto" />
            </a>
            <p className="text-base leading-relaxed text-gray-400">
              Entraguard is a smart school security system designed to protect students,
              empower parents, and streamline school administration.
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
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
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
              <li>info@entraguard.com</li>
              <li>+63 912 345 6789</li>
              <li>Manila, Philippines</li>
            </ul>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-blue-900 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Entraguard. All rights reserved.
          </p>

          {/* Center - Privacy & Terms */}
          <div className="flex gap-6">
            <a href="#" className="text-base text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-base text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>

          {/* Right - Powered By */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            <img src="/images/rag.png" alt="RAG IT Solutions" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}

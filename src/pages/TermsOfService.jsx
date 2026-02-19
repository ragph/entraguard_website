import { useState, useEffect } from 'react'
import { HiDocumentText, HiUserCircle, HiShieldCheck, HiExclamationCircle, HiBan, HiScale, HiRefresh, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const sections = [
  { id: 'acceptance', label: 'Acceptance of Terms', icon: HiCheckCircle },
  { id: 'services', label: 'Our Services', icon: HiDocumentText },
  { id: 'user-accounts', label: 'User Accounts', icon: HiUserCircle },
  { id: 'acceptable-use', label: 'Acceptable Use', icon: HiShieldCheck },
  { id: 'prohibited', label: 'Prohibited Activities', icon: HiBan },
  { id: 'liability', label: 'Limitation of Liability', icon: HiExclamationCircle },
  { id: 'termination', label: 'Termination', icon: HiRefresh },
  { id: 'governing-law', label: 'Governing Law', icon: HiScale },
  { id: 'contact', label: 'Contact Us', icon: HiMail },
]

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('acceptance')

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Terms of Service</h1>
              <p className="text-blue-200 mt-1">Please read these terms carefully</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100">
              <HiClock className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100">
              <HiDocumentText className="w-4 h-4" />
              7 min read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-max mx-auto px-4 md:px-24 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Table of Contents</h3>
                <nav className="space-y-1">
                  {sections.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                        activeSection === id
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon className={`w-5 h-5 flex-shrink-0 ${activeSection === id ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="mt-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">Need Clarification?</h4>
                <p className="text-blue-100 text-sm mb-4">Contact our team if you have questions about these terms.</p>
                <a
                  href="mailto:info@entraguard.online"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  <HiMail className="w-4 h-4" />
                  Contact Us
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-10">
                {/* Acceptance of Terms */}
                <section id="acceptance" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      By accessing or using Entraguard's school security and access management system ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Important:</strong> These Terms constitute a legally binding agreement between you and Entraguard. Schools, administrators, parents, and staff using our platform are all subject to these Terms.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Our Services */}
                <section id="services" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Entraguard provides a comprehensive school security platform that includes:
                    </p>
                    <div className="grid gap-4">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Gate Access System</h4>
                        <p className="text-gray-600 text-sm">
                          Biometric and card-based access control for secure entry and exit management at school gates.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Parent Mobile Application</h4>
                        <p className="text-gray-600 text-sm">
                          Real-time notifications and monitoring tools for parents to track their children's school attendance.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Administrative Dashboard</h4>
                        <p className="text-gray-600 text-sm">
                          Comprehensive management tools for school administrators to oversee student records, attendance, and security.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* User Accounts */}
                <section id="user-accounts" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      When creating an account with us, you must provide accurate and complete information. You are responsible for:
                    </p>
                    <div className="space-y-3">
                      {[
                        'Maintaining the confidentiality of your account credentials',
                        'All activities that occur under your account',
                        'Notifying us immediately of any unauthorized access',
                        'Ensuring your contact information remains current',
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-purple-600 text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Acceptable Use */}
                <section id="acceptable-use" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      You agree to use the Service only for lawful purposes and in accordance with these Terms. Acceptable use includes:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Authorized Access', desc: 'Only access features and data you are authorized to use' },
                        { title: 'Accurate Information', desc: 'Provide truthful and accurate information at all times' },
                        { title: 'Respect Privacy', desc: 'Respect the privacy and rights of other users' },
                        { title: 'Compliance', desc: 'Comply with all applicable laws and regulations' },
                      ].map((item, index) => (
                        <div key={index} className="bg-green-50 border border-green-100 rounded-xl p-4">
                          <h4 className="font-semibold text-green-800 mb-1">{item.title}</h4>
                          <p className="text-green-700 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Prohibited Activities */}
                <section id="prohibited" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The following activities are strictly prohibited:
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                      <ul className="space-y-2 text-red-800 text-sm">
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Attempting to gain unauthorized access to any part of the Service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Using another person's credentials without authorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Interfering with or disrupting the Service or servers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Transmitting malware, viruses, or harmful code</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Reverse engineering or attempting to extract source code</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Using the Service for any illegal or unauthorized purpose</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Limitation of Liability */}
                <section id="liability" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      To the maximum extent permitted by applicable law, Entraguard and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mt-4">
                      <p className="text-amber-800 text-sm">
                        <strong>Notice:</strong> Our total liability for any claims arising from your use of the Service shall not exceed the amount paid by your institution to Entraguard in the twelve (12) months preceding the claim.
                      </p>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      We do not warrant that the Service will be uninterrupted, error-free, or completely secure, although we strive to maintain high availability and security standards.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Termination */}
                <section id="termination" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may contact your school administrator or reach out to us directly.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-5 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Post-Termination</h4>
                      <p className="text-gray-600 text-sm">
                        All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Governing Law */}
                <section id="governing-law" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Any disputes arising out of or relating to these Terms or the Service shall be resolved exclusively in the courts located in Davao City, Philippines.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                          <a href="mailto:info@entraguard.online" className="text-blue-600 hover:text-blue-700 transition-colors">
                            info@entraguard.online
                          </a>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                          <p className="text-gray-600">(82) 317 2944</p>
                        </div>
                        <div className="sm:col-span-2">
                          <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                          <p className="text-gray-600">
                            Door #5, TMNT Building, Doña Vicenta Drive, J.P. Laurel Ave., Bajada, Davao City, Philippines, 8000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

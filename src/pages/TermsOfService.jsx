import { useState, useEffect } from 'react'
import { HiDocumentText, HiUserCircle, HiShieldCheck, HiExclamationCircle, HiBan, HiScale, HiRefresh, HiMail, HiClock, HiCheckCircle } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import PageHeader from '../components/PageHeader'
import { scrollTo } from '../lib/lenis'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useHashScroll } from '../hooks/useHashScroll'

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

  useDocumentMeta(
    'Terms of Service — EntraGuard',
    'The terms governing your use of the EntraGuard parent-school companion platform.'
  )

  useHashScroll(100)

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
    if (el) scrollTo(el, { offset: -100 })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our platform"
        meta={[
          {
            icon: HiClock,
            label: `Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`,
          },
          { icon: HiDocumentText, label: '7 min read' },
        ]}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-24 py-12">
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
                <p className="text-blue-100 text-sm mb-4">Our team is happy to help you understand these terms and how they apply to your school.</p>
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
                      By accessing or using Entraguard, our parent-centered school companion app ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-4">
                      <p className="text-blue-800 text-sm">
                        <strong>Important:</strong> These Terms constitute a legally binding agreement between you and Entraguard. Parents, as well as the teachers, staff, and schools that support the Service, are all subject to these Terms.
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
                      Entraguard provides a parent-centered school companion app that keeps parents connected to their child's school day, supported by tools for teachers and schools:
                    </p>
                    <div className="grid gap-4">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Parent Mobile Application</h4>
                        <p className="text-gray-600 text-sm">
                          Real-time classroom attendance notifications, grades and performance reports, evaluation insights, school announcements, and direct communication with teachers.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Teacher Tools</h4>
                        <p className="text-gray-600 text-sm">
                          Allow teachers to record subject-level attendance, share grades and evaluations, and communicate updates that sync to parents in real time.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">School Support</h4>
                        <p className="text-gray-600 text-sm">
                          Schools adopt and administer the Service so that attendance, grade records, and announcements delivered to parents are verified and official.
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
                      When creating an account with us — whether as a school administrator, teacher, or parent — you must provide accurate and complete information. You are responsible for:
                    </p>
                    <div className="space-y-3">
                      {[
                        'Maintaining the confidentiality of your account credentials',
                        'All activities that occur under your account, including attendance records and notifications',
                        'Notifying us immediately of any unauthorized access to your account',
                        'Ensuring your contact information and student-linked data remain current',
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
                      We reserve the right to suspend or terminate accounts that violate these Terms, misuse attendance data, or engage in fraudulent activity.
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
                        { title: 'Authorized Access', desc: 'Only access features, attendance data, and student records you are authorized to view' },
                        { title: 'Accurate Information', desc: 'Provide truthful and accurate information about students, guardians, and school details' },
                        { title: 'Respect Privacy', desc: 'Respect the privacy of students, parents, teachers, and other platform users' },
                        { title: 'Compliance', desc: 'Comply with all applicable laws, school policies, and data protection regulations' },
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
                          <span>Attempting to gain unauthorized access to any part of the platform or attendance data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Using another person's credentials without authorization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Tampering with attendance records or system data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Interfering with or disrupting the Service, servers, or connected systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Transmitting malware, viruses, or harmful code</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Reverse engineering or attempting to extract source code from any Entraguard module</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <HiBan className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>Using the Service or student data for any illegal or unauthorized purpose</span>
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
                      Upon termination, your right to use the Service — including the Entraguard parent app — will immediately cease. If you wish to terminate your account, you may contact your child's school or reach out to us directly.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-5 mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Post-Termination</h4>
                      <p className="text-gray-600 text-sm">
                        All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability. Attendance records may be retained by the school as required by institutional or legal policy.
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

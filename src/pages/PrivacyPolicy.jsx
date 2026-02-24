import { useState, useEffect } from 'react'
import { HiShieldCheck, HiDatabase, HiLockClosed, HiUserGroup, HiGlobe, HiMail, HiClock, HiDocumentText } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const sections = [
  { id: 'introduction', label: 'Introduction', icon: HiDocumentText },
  { id: 'information-collected', label: 'Information We Collect', icon: HiDatabase },
  { id: 'how-we-use', label: 'How We Use Your Information', icon: HiShieldCheck },
  { id: 'data-sharing', label: 'Data Sharing & Disclosure', icon: HiUserGroup },
  { id: 'data-security', label: 'Data Security', icon: HiLockClosed },
  { id: 'data-retention', label: 'Data Retention', icon: HiClock },
  { id: 'your-rights', label: 'Your Rights', icon: HiGlobe },
  { id: 'contact', label: 'Contact Us', icon: HiMail },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction')

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Privacy Policy</h1>
              <p className="text-blue-200 mt-1">Your data, your trust — our responsibility</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100">
              <HiClock className="w-4 h-4" />
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-blue-100">
              <HiDocumentText className="w-4 h-4" />
              5 min read
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
                <h4 className="font-semibold mb-2">Have Questions?</h4>
                <p className="text-blue-100 text-sm mb-4">Our team is here to help you understand how we handle your data.</p>
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
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      Welcome to Entraguard. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our smart school attendance and campus monitoring platform.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      By using Entraguard services — including our RFID kiosk system, parent mobile app, teacher management system, and school administration platform — you agree to the collection and use of information in accordance with this policy. We encourage you to read this document carefully to understand our practices regarding your data.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Information We Collect */}
                <section id="information-collected" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We collect various types of information to provide and improve our services:
                    </p>
                    <div className="grid gap-4">
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Names and contact details of students, parents, and staff</li>
                          <li>• Student identification numbers and class/section assignments</li>
                          <li>• Parent/guardian relationships and emergency contacts</li>
                          <li>• Account credentials and authentication data</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">RFID & Attendance Data</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• RFID card identifiers linked to student profiles</li>
                          <li>• Entry and exit timestamps recorded via kiosk scanning</li>
                          <li>• Subject-level attendance records from teacher systems</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Usage & Platform Data</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Device information and IP addresses</li>
                          <li>• App usage patterns and notification preferences</li>
                          <li>• Dashboard activity and report generation logs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* How We Use Your Information */}
                <section id="how-we-use" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Your information is used to provide, maintain, and improve our services:
                    </p>
                    <div className="space-y-3">
                      {[
                        'Record and manage student attendance via RFID kiosk scanning',
                        'Send real-time notifications to parents about student entry, exit, and subject attendance',
                        'Enable teachers to track classroom attendance and student performance per subject',
                        'Provide school administrators with centralized dashboards, analytics, and reporting tools',
                        'Deliver AI-powered attendance insights to help schools make data-driven decisions',
                        'Provide customer support and respond to inquiries',
                        'Comply with legal obligations and protect against fraud',
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs font-bold">{index + 1}</span>
                          </div>
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Data Sharing & Disclosure */}
                <section id="data-sharing" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing & Disclosure</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We do not sell your personal information. We may share data only in these circumstances:
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                      <h4 className="font-semibold text-amber-800 mb-2">With Your School</h4>
                      <p className="text-amber-700 text-sm">
                        Schools using Entraguard have access to student and staff data for administrative purposes, including attendance monitoring, analytics, performance reporting, and campus-wide announcements.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                      <p className="text-gray-600 text-sm">
                        We work with trusted third-party providers for hosting, analytics, and support services. These providers are contractually bound to protect your data.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                      <p className="text-gray-600 text-sm">
                        We may disclose information when required by law, court order, or to protect the rights and safety of Entraguard, our users, or others.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Data Security */}
                <section id="data-security" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      We implement industry-standard security measures to protect your data:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { title: 'Encryption', desc: 'All data is encrypted in transit and at rest using AES-256 encryption' },
                        { title: 'Access Controls', desc: 'Role-based access ensures only authorized personnel can view sensitive data' },
                        { title: 'Regular Audits', desc: 'We conduct regular security audits and penetration testing' },
                        { title: 'Secure Infrastructure', desc: 'Our systems are hosted on secure, certified cloud infrastructure' },
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-4">
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Data Retention */}
                <section id="data-retention" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy. Student records and attendance data are typically retained for the duration of enrollment plus any additional period required by law or school policy.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      RFID scan logs and attendance records may be retained for reporting and compliance purposes. Upon account termination or upon request, we will delete or anonymize personal data within 30 days, unless retention is required by law.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Your Rights */}
                <section id="your-rights" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Depending on your location, you may have the following rights:
                    </p>
                    <div className="space-y-3">
                      {[
                        { right: 'Access', desc: 'Request a copy of the personal data we hold about you' },
                        { right: 'Correction', desc: 'Request correction of inaccurate or incomplete data' },
                        { right: 'Deletion', desc: 'Request deletion of your personal data' },
                        { right: 'Portability', desc: 'Receive your data in a structured, machine-readable format' },
                        { right: 'Objection', desc: 'Object to certain processing of your personal data' },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 font-bold text-sm flex-shrink-0">
                            {item.right.charAt(0)}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900">{item.right}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      To exercise these rights, please contact us using the information below.
                    </p>
                  </div>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Contact Us */}
                <section id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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

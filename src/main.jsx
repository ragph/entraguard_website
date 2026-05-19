import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsOfService = lazy(() => import('./pages/TermsOfService.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
)

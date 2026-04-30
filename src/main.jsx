import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </SmoothScroll>
    </BrowserRouter>
  </StrictMode>,
)

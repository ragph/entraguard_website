# EntraGuard Website

Marketing website for **EntraGuard** — a parent-first school companion that gives
parents real-time classroom attendance, grade visibility, performance insights, and
direct communication with teachers, all in one secure app.

Live site: [entraguard.online](https://entraguard.online/)

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4** (via `@tailwindcss/vite`, theme configured in `src/index.css`)
- **React Router 7** — routes for the landing page and legal pages
- **Lenis** — smooth scrolling (disabled for users who prefer reduced motion)
- **Swiper** — testimonials carousel
- **react-icons** — iconography

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
public/
  images/           Optimized WebP assets (PNG kept only where WebP gave no gain)
  robots.txt, sitemap.xml, site.webmanifest
  _redirects        SPA fallback for Netlify
src/
  components/       Landing-page sections (Hero, Features, Pricing, …) + Navbar/Footer
  pages/            PrivacyPolicy, TermsOfService (lazy-loaded routes)
  hooks/            useScrollAnimation, useScrollProgress, useIsMobile, useDocumentMeta
  lib/              lenis (smooth-scroll helper), web3forms (contact-form submission)
  App.jsx           Landing page composition
  main.jsx          Router + entry point
scripts/
  convert-images.mjs  One-off PNG → WebP conversion (run with `node`)
vercel.json         SPA fallback for Vercel
```

## Responsive layout

The site uses a wide content container (`max-w-[1720px]`) on large screens. Hero,
WhoWeAre, and CTA stack into a single column below `xl` (1280px); the navbar
collapses to a hamburger menu below `lg` (1024px).

## Configuration notes

- **Contact form** — submits via [Web3Forms](https://web3forms.com). The access key
  lives in `src/lib/web3forms.js`.
- **Deployment** — `public/_redirects` (Netlify) and `vercel.json` (Vercel) provide
  the SPA fallback so deep links to `/privacy-policy` and `/terms-of-service` resolve
  on refresh. Adjust for other hosts as needed.
- **Images** — run `node scripts/convert-images.mjs` after adding new PNGs to
  `public/images/` to generate optimized WebP versions.

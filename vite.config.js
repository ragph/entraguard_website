import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Split large/stable dependencies into their own chunks so they cache
        // independently and load in parallel instead of one giant bundle.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('gsap')) return 'gsap'
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('lenis')) return 'lenis'
          if (id.includes('react-icons')) return 'icons'
          // Match on path boundaries so unrelated deps that merely contain
          // "react" in their name don't get folded into the vendor chunk.
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id))
            return 'react-vendor'
        },
      },
    },
  },
})

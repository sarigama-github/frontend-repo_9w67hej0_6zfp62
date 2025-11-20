import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Ambient gradient field using brand colors */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        {/* Soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(76,218,208,0.12),transparent)]" />
        {/* Animated color blobs */}
        <motion.div
          className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-50"
          style={{ background: 'radial-gradient(circle at 30% 30%, #4CDAD0 0%, transparent 60%)' }}
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle at 70% 40%, #C3AEEF 0%, transparent 60%)' }}
          animate={{ x: [0, -30, 10, 0], y: [0, 25, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-40"
          style={{ background: 'radial-gradient(circle at 50% 60%, #EDBEC0 0%, transparent 65%)' }}
          animate={{ x: [0, 10, -15, 0], y: [0, -10, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Reveal. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-300/80">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

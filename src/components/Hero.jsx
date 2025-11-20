import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-24">
      <div className="absolute inset-0">
        {/* Brand glow field */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(76,218,208,0.20),transparent)]"></div>
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[800px] blur-3xl"
             style={{ background:'linear-gradient(135deg, rgba(195,174,239,0.18), rgba(237,190,192,0.12))' }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-teal-200/90">
            <Shield className="h-3.5 w-3.5" /> AI-powered fee finder
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Reveal hidden fees and fine print in seconds
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg leading-relaxed">
            Upload documents or paste a link. Our AI scans, highlights, and explains the clauses that cost you money — before they do.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-slate-900 font-semibold shadow-lg transition shadow-teal-300/20 hover:shadow-teal-300/30"
               style={{ background: 'linear-gradient(90deg, #4CDAD0, #C3AEEF)' }}>
              Try Reveal free
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 border border-white/10 bg-white/5 text-white hover:bg-white/10">
              <Search className="h-4 w-4" /> See how it works
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
            <span>Bank-grade security</span>
            <span className="h-1 w-1 rounded-full bg-slate-400/40" />
            <span>No credit card required</span>
          </div>
        </div>

        <motion.div className="relative h-[420px] sm:h-[520px] lg:h-[560px]" animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-950/30 backdrop-blur-xl overflow-hidden shadow-2xl shadow-slate-900/70">
            {/* Subtle animated border gradient */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'conic-gradient(from 0deg, rgba(76,218,208,0.25), rgba(195,174,239,0.25), rgba(237,190,192,0.2), rgba(76,218,208,0.25))' }}
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            />
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

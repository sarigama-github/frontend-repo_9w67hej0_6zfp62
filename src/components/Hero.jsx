import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Search } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-24">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.25),transparent)]"></div>
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[800px] bg-gradient-to-br from-cyan-400/20 via-indigo-400/10 to-transparent blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200">
            <Shield className="h-3.5 w-3.5" /> AI-powered fee finder
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Reveal hidden fees and fine print in seconds
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg leading-relaxed">
            Upload documents or paste a link. Our AI scans, highlights, and explains the clauses that cost you money — before they do.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30">
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

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-950/30 backdrop-blur-xl overflow-hidden shadow-2xl shadow-slate-900/70">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

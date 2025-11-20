import { ArrowRight, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA(){
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 p-8 sm:p-12 backdrop-blur-xl overflow-hidden relative">
          <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(90deg, rgba(76,218,208,0.10), rgba(195,174,239,0.10), rgba(237,190,192,0.10))' }}></div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl text-white font-semibold">Start scanning in under a minute</h3>
              <p className="mt-3 text-slate-300/90">Upload a document or paste a link. Reveal will highlight fees, clauses, and risks — and suggest what to do next.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-slate-900 font-semibold shadow-lg transition"
                   style={{ background: 'linear-gradient(90deg, #4CDAD0, #C3AEEF)' }}>
                  Get Reveal free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 border border-white/10 bg-white/5 text-white hover:bg-white/10">
                  <UploadCloud className="h-4 w-4" /> Upload a file
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
                  <div className="h-2 w-1/3 rounded-full" style={{ background:'#4CDAD0' }}></div>
                  <div className="mt-4 h-3 w-full rounded bg-white/5"></div>
                  <div className="mt-2 h-3 w-5/6 rounded bg-white/5"></div>
                  <div className="mt-2 h-3 w-2/3 rounded bg-white/5"></div>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {['#4CDAD0','#C3AEEF','#EDBEC0'].map((c, i) => (
                      <motion.div key={i} className="h-24 rounded-lg border border-white/10" style={{ background: `${c}22` }}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type:'spring', stiffness: 240, damping: 16 }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

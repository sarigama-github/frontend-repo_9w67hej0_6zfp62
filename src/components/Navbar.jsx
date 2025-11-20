import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="relative">
              <span className="absolute inset-0 rounded-xl blur opacity-70" style={{ background:'linear-gradient(45deg, #4CDAD0, #C3AEEF, #EDBEC0)' }}></span>
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-900 text-lg font-bold shadow-inner shadow-slate-300">R</span>
            </div>
            <span className="text-slate-900 text-lg font-semibold tracking-tight">Reveal</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#testimonials" className="text-slate-600 hover:text-slate-900 transition-colors">Stories</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="px-4 py-2 rounded-xl text-slate-700 hover:text-slate-900 transition">Log in</a>
            <a href="#cta" className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-slate-900 font-semibold shadow-lg transition" style={{ background:'linear-gradient(90deg, #4CDAD0, #C3AEEF)' }}>
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white text-slate-900 border border-slate-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 grid gap-2">
            <a href="#features" className="text-slate-800">Features</a>
            <a href="#pricing" className="text-slate-800">Pricing</a>
            <a href="#testimonials" className="text-slate-800">Stories</a>
            <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-slate-900 font-semibold" style={{ background:'linear-gradient(90deg, #4CDAD0, #C3AEEF)' }}>
              Get started
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

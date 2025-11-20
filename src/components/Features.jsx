import { BadgeCheck, FileText, Globe, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: ScanLine,
    title: "Smart scanning",
    desc: "AI reads PDFs, images, and web pages to surface clauses and fees you might miss.",
  },
  {
    icon: FileText,
    title: "Clause explainers",
    desc: "Plain-language summaries turn legalese into clear, actionable insights.",
  },
  {
    icon: Globe,
    title: "Link analysis",
    desc: "Paste any URL and Reveal maps redirects, disclosures, and footnotes.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first",
    desc: "Your data stays encrypted in transit and at rest. Export anytime.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance ready",
    desc: "Built with SOC 2 practices and audit trails for enterprise teams.",
  },
  {
    icon: Sparkles,
    title: "Continuous learning",
    desc: "Models keep improving with feedback — you stay ahead of dark patterns.",
  },
];

export default function Features(){
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(900px 400px at 10% 10%, rgba(195,174,239,0.18), transparent 60%)' }}></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for clarity</h2>
          <p className="mt-3 text-slate-300/90">Everything you need to catch hidden costs before you commit.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition" style={{ background: 'linear-gradient(120deg, rgba(76,218,208,0.18), rgba(195,174,239,0.18), rgba(237,190,192,0.16))' }}></div>
              <div className="relative">
                <div className="h-11 w-11 grid place-items-center rounded-xl text-slate-900 border border-white/10"
                     style={{ background: 'linear-gradient(135deg, #4CDAD0 0%, #C3AEEF 70%)' }}>
                  <it.icon className="h-5 w-5 text-slate-900" />
                </div>
                <h3 className="mt-4 text-white font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

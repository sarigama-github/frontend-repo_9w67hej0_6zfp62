import { BadgeCheck, FileText, Globe, ScanLine, ShieldCheck, Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_10%_10%,rgba(129,140,248,0.15),transparent_60%)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for clarity</h2>
          <p className="mt-3 text-slate-300/90">Everything you need to catch hidden costs before you commit.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 text-cyan-200 border border-white/10">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

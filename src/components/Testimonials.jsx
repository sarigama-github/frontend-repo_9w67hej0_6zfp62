import { motion } from 'framer-motion';

const quotes = [
  {
    name: "Maya Patel",
    role: "FP&A Lead, Nimbus Cloud",
    text: "Reveal flagged a hidden 2.9% processing fee in a 30-page vendor contract. It paid for itself in a day.",
  },
  {
    name: "Daniel Kim",
    role: "COO, SwiftPay",
    text: "We paste fintech landing pages and see all the tricks immediately. It's like x-ray vision for fine print.",
  },
  {
    name: "Ava Thompson",
    role: "Founder, Lumen Legal",
    text: "The clause explainers are gold for clients. No more translating dense legalese on calls.",
  },
];

export default function Testimonials(){
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(900px 400px at 90% 10%, rgba(76,218,208,0.12), transparent 60%)' }}></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Trusted by operators and counsel</h2>
          <p className="mt-3 text-slate-600">Real teams, real savings.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure key={i} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              whileHover={{ y: -4 }}>
              <blockquote className="text-slate-700 leading-relaxed">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-600">
                <span className="font-medium" style={{ background: 'linear-gradient(90deg, #4CDAD0, #C3AEEF)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{q.name}</span> — {q.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

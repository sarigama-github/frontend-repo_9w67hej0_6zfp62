import { motion } from 'framer-motion';

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{ background: 'radial-gradient(900px 500px at 80% 0%, rgba(237,190,192,0.14), transparent 60%)' }}></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Upgrade when you need more volume and collaboration.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Free */}
          <motion.div whileHover={{ y:-6 }} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="text-4xl font-bold text-white mt-2">$0 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• 20 scans per month</li>
              <li>• PDF and link analysis</li>
              <li>• Basic clause explanations</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 bg-white/10 text-white border border-white/10 hover:bg-white/15">Get started</a>
          </motion.div>

          {/* Pro */}
          <motion.div whileHover={{ y:-6 }} className="relative rounded-3xl border border-white/10 backdrop-blur-xl p-6 shadow-lg overflow-hidden">
            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(180deg, rgba(76,218,208,0.16), rgba(195,174,239,0.14))' }}></div>
            <div className="absolute -top-3 right-4 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full text-slate-900 font-bold"
                 style={{ background:'#4CDAD0' }}>Most popular</div>
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="text-4xl font-bold text-white mt-2">$19 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• 200 scans per month</li>
              <li>• Priority AI models</li>
              <li>• Export highlights & reports</li>
              <li>• Email support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 text-slate-900 font-semibold"
               style={{ background: 'linear-gradient(90deg, #4CDAD0, #C3AEEF)' }}>Upgrade</a>
          </motion.div>

          {/* Teams */}
          <motion.div whileHover={{ y:-6 }} className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold">Teams</h3>
            <p className="text-4xl font-bold text-white mt-2">$49 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• Unlimited scans</li>
              <li>• Shared workspaces</li>
              <li>• SSO and audit logs</li>
              <li>• Dedicated support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 bg-white/10 text-white border border-white/10 hover:bg-white/15">Talk to sales</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

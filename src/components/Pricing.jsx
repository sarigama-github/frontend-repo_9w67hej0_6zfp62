export default function Pricing(){
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300/90">Start free. Upgrade when you need more volume and collaboration.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Free */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold">Starter</h3>
            <p className="text-4xl font-bold text-white mt-2">$0 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• 20 scans per month</li>
              <li>• PDF and link analysis</li>
              <li>• Basic clause explanations</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 bg-white/10 text-white border border-white/10 hover:bg-white/15">Get started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl border border-cyan-300/30 bg-gradient-to-b from-cyan-400/10 to-indigo-500/10 backdrop-blur-xl p-6 shadow-lg shadow-cyan-500/10">
            <div className="absolute -top-3 right-4 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-400 text-slate-900 font-bold">Most popular</div>
            <h3 className="text-white font-semibold">Pro</h3>
            <p className="text-4xl font-bold text-white mt-2">$19 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• 200 scans per month</li>
              <li>• Priority AI models</li>
              <li>• Export highlights & reports</li>
              <li>• Email support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-900 font-semibold">Upgrade</a>
          </div>

          {/* Teams */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h3 className="text-white font-semibold">Teams</h3>
            <p className="text-4xl font-bold text-white mt-2">$49 <span className="text-sm text-slate-300/80 font-normal">/mo</span></p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
              <li>• Unlimited scans</li>
              <li>• Shared workspaces</li>
              <li>• SSO and audit logs</li>
              <li>• Dedicated support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex justify-center w-full rounded-xl px-4 py-2 bg-white/10 text-white border border-white/10 hover:bg-white/15">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

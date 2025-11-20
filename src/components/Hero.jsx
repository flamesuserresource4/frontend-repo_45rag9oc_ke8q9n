import { ArrowRight, Star } from "lucide-react";

function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 mb-4">
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              Trusted by 2,000+ teams
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Launch your SaaS faster with Nimbus
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              A beautiful, responsive template with everything you need: from features and testimonials to pricing and FAQs. Ship pages in minutes, not weeks.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-blue-50 transition">
                Start for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
                See Features
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.3),transparent_45%)]"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur px-4 py-3 text-slate-200 shadow-lg">
              <div className="text-xs">Lightning-fast setup</div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur px-4 py-3 text-slate-200 shadow-lg">
              <div className="text-xs">Modern UI kit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

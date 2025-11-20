import { Shield, Zap, Sparkles, BarChart3, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant setup",
    desc: "Go from idea to live page in minutes with a polished, responsive layout.",
  },
  { icon: Shield, title: "Secure by default", desc: "Best practices built-in with modern tooling and security." },
  { icon: BarChart3, title: "Actionable analytics", desc: "Know what works with integrated tracking and insights." },
  { icon: Layers, title: "Composable blocks", desc: "Mix-and-match sections to fit your product story." },
  { icon: Globe, title: "Global-ready", desc: "Performance and SEO optimizations right out of the box." },
  { icon: Sparkles, title: "Delightful UI", desc: "Subtle animations and crisp visuals that users love." },
];

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything you need to launch</h2>
          <p className="mt-3 text-slate-300">A curated set of sections that cover the essentials for any SaaS page.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/80 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

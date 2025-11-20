import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: [
      "Up to 3 projects",
      "Community support",
      "Basic analytics",
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    highlight: true,
    features: [
      "Unlimited projects",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    cta: "Start free trial",
  },
  {
    name: "Business",
    price: "$99",
    period: "/mo",
    highlight: false,
    features: [
      "Everything in Pro",
      "SSO & Roles",
      "Custom integrations",
      "Dedicated manager",
    ],
    cta: "Contact sales",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Pick a plan that grows with you. Cancel anytime.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border ${
                t.highlight ? "border-blue-500/50" : "border-white/10"
              } bg-slate-900/60 p-6`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white shadow">Most popular</div>
              )}
              <h3 className="text-white font-semibold">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="text-slate-400">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-300">
                    <Check className="h-4 w-4 text-green-400" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 font-medium transition border ${
                  t.highlight
                    ? "bg-white text-slate-900 border-white hover:bg-blue-50"
                    : "text-white border-white/20 hover:bg-white/10"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

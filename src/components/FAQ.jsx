import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is Nimbus?",
    a: "Nimbus is a modern SaaS landing page template that helps you launch faster with polished sections and responsive design.",
  },
  {
    q: "Can I use it for commercial projects?",
    a: "Yes. You can use Nimbus for personal or commercial projects without attribution.",
  },
  {
    q: "Do you offer refunds?",
    a: "Absolutely. We offer a 7-day money-back guarantee if you're not satisfied.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. Start with the free plan and upgrade anytime as you grow.",
  },
];

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/60">
      <button
        className="w-full px-4 py-4 flex items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-white font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 text-slate-300 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-slate-300">{a}</div>}
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
          <p className="mt-3 text-slate-300">Answers to common questions about Nimbus.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

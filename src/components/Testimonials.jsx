import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nimbus made our launch a breeze. The layout is gorgeous and we shipped in a day.",
    name: "Ava Thompson",
    title: "Founder, PixelFlow",
  },
  {
    quote: "Beautiful, fast, and flexible. This is my new go-to for SaaS pages.",
    name: "Daniel Kim",
    title: "Product Designer",
  },
  {
    quote: "It just works. The polish is incredible for something that took minutes.",
    name: "Priya Gupta",
    title: "Growth Lead, NovaOps",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Loved by creators</h2>
          <p className="mt-3 text-slate-300">Real quotes from teams who launched faster with Nimbus.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure key={idx} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="text-slate-200 font-medium">{t.name}</span> — {t.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

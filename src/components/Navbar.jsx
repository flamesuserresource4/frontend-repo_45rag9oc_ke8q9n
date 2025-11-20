import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/30">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-white font-semibold tracking-tight">Nimbus</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} className="text-slate-300 hover:text-white transition">
                  {n.label}
                </a>
              ))}
              <a href="#pricing" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-blue-50 transition border border-white/20">
                Get Started
              </a>
            </nav>
            <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <a key={n.label} href={n.href} className="text-slate-200" onClick={() => setOpen(false)}>
                    {n.label}
                  </a>
                ))}
                <a href="#pricing" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

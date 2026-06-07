import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-steel-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px] lg:h-20">
          <a href="#" className="flex items-center shrink-0 min-w-0 max-w-[70%] sm:max-w-none">
            <Logo variant="nav" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-brand transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917397798007"
              className="flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 shrink-0"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-[72px] bottom-0 bg-steel-dark/98 border-t border-white/10 px-4 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-brand py-4 border-b border-white/5 font-medium text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+917397798007"
              className="flex items-center justify-center gap-2 bg-brand text-white font-semibold px-5 py-4 rounded-sm mt-6 text-base"
            >
              <Phone size={18} />
              +91 73977 98007
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

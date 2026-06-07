import { Phone, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { EMAIL } from "../data/contact";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Projects", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-steel-dark border-t border-white/5 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div>
            <Logo variant="footer" />
            <p className="text-brand text-sm font-semibold mt-4 tracking-widest uppercase">
              Built Strong. Covered Right.
            </p>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Expert tensile roofing, structural fabrication &amp; general
              construction services in Chennai.
            </p>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                Follow Us
              </p>
              <SocialLinks variant="footer" />
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin size={16} className="text-brand mt-0.5 shrink-0" />
                62/19, 10th Ave, Ashok Nagar, Chennai – 600083
              </li>
              <li>
                <a
                  href="tel:+917397798007"
                  className="flex items-center gap-2 text-slate-400 hover:text-brand transition-colors"
                >
                  <Phone size={16} className="text-brand shrink-0" />
                  +91 73977 98007
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-brand transition-colors break-all"
                >
                  <Mail size={16} className="text-brand shrink-0" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Seyon Structures. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

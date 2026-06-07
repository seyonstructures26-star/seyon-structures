import { MapPin, Star, Building2, Home } from "lucide-react";

const badges = [
  { icon: Star, label: "5★ Google Rating", sub: "Verified reviews" },
  { icon: MapPin, label: "Chennai-Based", sub: "Ashok Nagar" },
  { icon: Building2, label: "Commercial", sub: "Industrial & retail" },
  { icon: Home, label: "Residential", sub: "Homes & villas" },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-steel diagonal-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            About <span className="text-brand">Seyon Structures</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="reveal reveal-delay-2">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">Seyon Structures</strong> is a
              Chennai-based contractor specializing in tensile roofing, structural
              fabrication, and general construction works. With a commitment to
              excellence, we deliver durable, aesthetically refined structures for
              both residential and commercial clients across Tamil Nadu.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mt-4">
              Our team combines skilled craftsmanship with modern techniques to
              ensure every project meets the highest standards of quality,
              professionalism, and on-time delivery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
              {["Quality", "Professionalism", "On-Time Delivery"].map(
                (value) => (
                  <div
                    key={value}
                    className="text-center p-3 sm:p-4 bg-steel-light/50 border border-white/5 rounded-sm"
                  >
                    <div className="text-brand font-heading text-2xl font-bold">
                      ✓
                    </div>
                    <div className="text-sm text-slate-300 mt-1 font-medium">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {badges.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="bg-steel-dark border border-white/5 rounded-sm p-5 sm:p-6 hover:border-brand/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-brand/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                  <Icon className="text-brand" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase">
                  {label}
                </h3>
                <p className="text-slate-400 text-sm mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

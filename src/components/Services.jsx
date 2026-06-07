import {
  Tent,
  Home,
  Wrench,
  Building,
  Building2,
  Paintbrush,
} from "lucide-react";

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
  "reveal-delay-6",
];

const services = [
  {
    icon: Tent,
    title: "Tensile Roofing",
    description:
      "Premium tensile membrane roofing for durability, weather resistance, and modern aesthetics.",
  },
  {
    icon: Home,
    title: "General Roofing Works",
    description:
      "Complete roofing solutions including sheet roofing, waterproofing, and repairs.",
  },
  {
    icon: Wrench,
    title: "Structural Fabrication",
    description:
      "Custom steel and metal fabrication for sheds, frames, and industrial structures.",
  },
  {
    icon: Building,
    title: "Residential Construction",
    description:
      "End-to-end home construction with quality materials and expert finishing.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Warehouses, shops, and commercial buildings built to spec and on schedule.",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Finishing",
    description:
      "Interior and exterior renovation with flawless finishing touches.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative section-padding bg-steel-dark diagonal-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            Our <span className="text-brand">Services</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 mt-4 max-w-2xl mx-auto">
            Comprehensive construction and roofing solutions tailored to your
            project needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal ${delayClasses[i % 6]} group bg-steel border border-white/5 rounded-sm p-6 sm:p-8 hover:-translate-y-2 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-brand/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <Icon className="text-brand group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-slate-400 mt-3 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

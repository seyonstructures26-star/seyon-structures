import { Award, Users, Clock, Sparkles } from "lucide-react";

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
];

const highlights = [
  {
    icon: Award,
    title: "Top-Notch Work Quality",
    description:
      "Every project is executed with precision using premium materials and proven techniques.",
  },
  {
    icon: Users,
    title: "Professional & Skilled Team",
    description:
      "Our experienced craftsmen bring expertise and dedication to every job site.",
  },
  {
    icon: Clock,
    title: "On-Time Project Delivery",
    description:
      "We respect your timeline and deliver projects on schedule without compromising quality.",
  },
  {
    icon: Sparkles,
    title: "Perfect Finishing Every Time",
    description:
      "From structural work to final touches, we ensure a flawless, polished result.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative section-padding bg-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            Our Promise
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            Why <span className="text-brand">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className={`reveal ${delayClasses[i]} text-center p-6 sm:p-8 bg-steel-dark/60 border border-white/5 rounded-sm hover:border-brand/30 transition-colors duration-300`}
            >
              <div className="w-16 h-16 mx-auto bg-brand/10 rounded-full flex items-center justify-center mb-5">
                <Icon className="text-brand" size={30} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                {title}
              </h3>
              <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

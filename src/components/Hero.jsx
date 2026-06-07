import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative flex items-center"
    >
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 w-full">
        <div className="max-w-3xl">
          <div className="reveal inline-flex items-center gap-2 bg-brand/10 border border-brand/30 text-brand-light text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Chennai&apos;s Trusted Roofing Experts
          </div>

          <h1 className="reveal reveal-delay-1 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] sm:leading-[1.05] tracking-wide uppercase">
            Expert Tensile Roofing &{" "}
            <span className="text-brand">Structural Solutions</span> in Chennai
          </h1>

          <p className="reveal reveal-delay-2 mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            Quality craftsmanship, on-time delivery, and professional finishing —
            from tensile roofing to full-scale construction, we build structures
            that last.
          </p>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-10">
            <a
              href="#contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-colors duration-200 w-full sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-brand hover:text-brand text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-200 w-full sm:w-auto"
            >
              View Our Work
            </a>
          </div>

          <div className="reveal reveal-delay-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mt-8 sm:mt-12 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-brand text-lg">★</span>
              <span>
                <strong className="text-white">5.0</strong> Google Rating
              </span>
            </div>
            <div className="w-px h-5 bg-white/20 hidden sm:block" />
            <span>Residential &amp; Commercial</span>
            <div className="w-px h-5 bg-white/20 hidden sm:block" />
            <span>Ashok Nagar, Chennai</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-brand transition-colors animate-bounce hidden sm:block"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}

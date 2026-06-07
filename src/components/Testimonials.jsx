import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative section-padding bg-steel-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            Client Feedback
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            What Our <span className="text-brand">Clients Say</span>
          </h2>
        </div>

        <div className="reveal reveal-delay-2 max-w-3xl mx-auto">
          <div className="relative bg-steel border border-brand/20 rounded-sm p-6 sm:p-8 lg:p-12">
            <Quote
              className="absolute top-6 left-6 text-brand/20"
              size={48}
            />

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="text-brand fill-brand"
                />
              ))}
            </div>

            <blockquote className="text-center text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed italic relative z-10 px-1">
              &ldquo;Excellent service by Seyon Structures. Their work quality is
              top-notch and the team is very professional. They completed the
              project on time with perfect finishing. For tensile roofing.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-10 h-10 bg-brand/20 rounded-full flex items-center justify-center">
                <span className="text-brand font-bold text-sm">G</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">
                  Verified Google Review
                </p>
                <p className="text-slate-400 text-xs">5.0 ★ Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

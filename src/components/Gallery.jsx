import { ImageIcon } from "lucide-react";

const delayClasses = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
  "reveal-delay-6",
];

const projects = [
  {
    title: "Tensile Membrane Canopy",
    image: "/gallery/tensile-membrane-canopy.jpg",
  },
  {
    title: "Tensile Walkway Canopy",
    image: "/gallery/tensile-walkway-canopy.jpg",
  },
  {
    title: "PUF Roofing Structure",
    image: "/gallery/puf-roof-rooftop-structure.jpg",
  },
  {
    title: "UPVC Roof",
    image: "/gallery/upvc-roof.png",
  },
  {
    title: "Stone-Coated Gable Roof",
    image: "/gallery/stonecoated-roof-gable.jpg",
  },
  {
    title: "Pergola with Retractable Canopy",
    image: "/gallery/pergola-retractable-canopy.jpg",
  },
  {
    title: "Stonecoated Roof — Residential",
    image: "/gallery/stonecoated-roof-residential.jpg",
  },
  {
    title: "Stonecoated Roof — Detail",
    image: "/gallery/stonecoated-roof-detail.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-padding bg-steel diagonal-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-space">
          <span className="reveal text-brand font-semibold text-sm uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="reveal reveal-delay-1 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mt-2">
            Project <span className="text-brand">Gallery</span>
          </h2>
          <p className="reveal reveal-delay-2 text-slate-400 mt-4 max-w-2xl mx-auto">
            A glimpse of our completed roofing and construction projects across
            Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map(({ title, image }, i) => (
            <div
              key={title}
              className={`reveal ${delayClasses[i % delayClasses.length]} group relative overflow-hidden rounded-sm aspect-[4/3] bg-steel-light`}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/90 via-steel-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-center gap-2">
                <ImageIcon size={18} className="text-brand shrink-0" />
                <h3 className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

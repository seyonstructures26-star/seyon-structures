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
    title: "Tensile Roofing Project",
    image:
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=600&q=80",
  },
  {
    title: "Commercial Shed",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    title: "Industrial Roofing",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  },
  {
    title: "Residential Roofing",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    title: "Structural Fabrication",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Warehouse Construction",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, image }, i) => (
            <div
              key={title}
              className={`reveal ${delayClasses[i % 6]} group relative overflow-hidden rounded-sm aspect-[4/3] bg-steel-light`}
            >
              <img
                src={image}
                srcSet={`${image.replace("w=600", "w=400")} 400w, ${image} 600w, ${image.replace("w=600", "w=900")} 900w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

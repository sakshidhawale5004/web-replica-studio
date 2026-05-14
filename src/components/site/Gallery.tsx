import { SectionHead } from "./SectionHead";
import { X } from "lucide-react";
import { useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, alt: "Modern living room with SPC marble-effect flooring", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Office with patterned carpet tiles", span: "" },
  { src: g3, alt: "Living room with PVC wood wall panels", span: "" },
  { src: g4, alt: "Green vertical garden installation", span: "md:col-span-2" },
  { src: g5, alt: "WPC deck flooring with pergola", span: "" },
  { src: g6, alt: "Invisible grill on a high-rise balcony", span: "" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div data-reveal>
          <SectionHead
            eyebrow="Our Work"
            title={<>A glimpse of our <span className="text-italic-display text-accent">recent projects.</span></>}
            subtitle="Explore our portfolio of completed interior design and installation projects across Mumbai."
          />
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {items.map((it, i) => (
            <div
              key={i}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer card-3d shadow-md hover:shadow-lg transition-shadow duration-300 ${it.span}`}
              onClick={() => setSelectedImage(it.src)}
            >
              <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <p className="text-sm font-semibold">{it.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

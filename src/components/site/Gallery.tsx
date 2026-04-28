import { SectionHead } from "./SectionHead";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/product-decking.jpg";
import g6 from "@/assets/product-wallpaper.jpg";

const items = [
  { src: g1, alt: "Modern living space with light laminated wood flooring", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Office with patterned carpet tiles", span: "" },
  { src: g3, alt: "Bathroom with PVC marble-effect wall panels", span: "" },
  { src: g4, alt: "Vertical garden installation", span: "md:col-span-2" },
  { src: g5, alt: "WPC outdoor decking on balcony", span: "" },
  { src: g6, alt: "Botanical wallpaper feature wall", span: "" },
];

export const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32 bg-secondary/50">
    <div className="container-wide">
      <SectionHead
        eyebrow="Our Work"
        title={<>A glimpse of our <span className="text-italic-display text-accent">recent projects.</span></>}
      />
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {items.map((it, i) => (
          <div key={i} className={`relative overflow-hidden rounded-xl group ${it.span}`}>
            <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

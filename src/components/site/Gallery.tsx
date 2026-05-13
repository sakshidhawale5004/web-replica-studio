import { SectionHead } from "./SectionHead";
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

export const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32 bg-secondary/50">
    <div className="container-wide">
      <div data-reveal>
        <SectionHead
          eyebrow="Our Work"
          title={<>A glimpse of our <span className="text-italic-display text-accent">recent projects.</span></>}
        />
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[240px]">
        {items.map((it, i) => (
          <div key={i} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className={`relative overflow-hidden rounded-xl group card-3d ${it.span}`}>
            <img src={it.src} alt={it.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-4 left-4 right-4 text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">{it.alt}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

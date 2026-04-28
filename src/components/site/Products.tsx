import { SectionHead } from "./SectionHead";
import { ArrowUpRight } from "lucide-react";
import wood from "@/assets/product-wood.jpg";
import blinds from "@/assets/product-blinds.jpg";
import wallpaper from "@/assets/product-wallpaper.jpg";
import decking from "@/assets/product-decking.jpg";
import grass from "@/assets/product-grass.jpg";
import carpet from "@/assets/product-carpet.jpg";

const products = [
  { img: wood, tag: "Bestseller", t: "Engineered Wooden Flooring", d: "Real wood top layer with engineered core. Water & scratch resistant." },
  { img: blinds, tag: "Custom-fit", t: "Exclusive Roller Blinds", d: "Premium fabric roller blinds tailored to any window size or recess." },
  { img: wallpaper, tag: "Designer", t: "Imported Wallpapers", d: "Curated patterns from across the globe for homes, offices & hotels." },
  { img: decking, tag: "Weatherproof", t: "WPC Outdoor Decking", d: "Eco-friendly composite decking — durable, low-maintenance & beautiful." },
  { img: grass, tag: "UV-protected", t: "Artificial Grass & Turf", d: "Synthetic turf with fade warranty — perfect for terraces and gardens." },
  { img: carpet, tag: "Hospitality grade", t: "Wall-to-Wall Carpets", d: "Plush, anti-viral carpets for hotels, offices and luxury residences." },
];

export const Products = () => (
  <section id="products" className="py-24 md:py-32">
    <div className="container-wide">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
        <SectionHead
          eyebrow="Featured Range"
          title={<>Products that <span className="text-italic-display text-accent">elevate</span> every space.</>}
        />
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent group">
          Browse full catalogue <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article key={p.t} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.t} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-semibold bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-foreground">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold mb-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.d}</p>
              <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all">
                Enquire now <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

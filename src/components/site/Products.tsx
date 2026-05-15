import { SectionHead } from "./SectionHead";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Tilt3D } from "./Tilt3D";
import wood from "@/assets/product-wood.jpg";
import laminated from "@/assets/product-laminated.jpg";
import vinyl from "@/assets/product-vinyl.jpg";
import blinds from "@/assets/product-blinds.jpg";
import wallpaper from "@/assets/product-wallpaper.jpg";
import decking from "@/assets/product-decking.jpg";
import grass from "@/assets/product-grass.jpg";
import carpet from "@/assets/product-carpet.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Product = {
  img: string;
  tag: string;
  t: string;
  d: string;
  long: string;
  features: string[];
};

const products: Product[] = [
  {
    img: wood,
    tag: "Bestseller",
    t: "Engineered Wooden Flooring",
    d: "✨ Real wood meets durability. Water & scratch resistant hardwood that lasts.",
    long: "Our engineered wooden flooring features a genuine hardwood top layer bonded to a multi-ply engineered core for outstanding stability. It resists warping from humidity, handles daily wear gracefully, and brings the timeless warmth of natural wood to any room.",
    features: ["Genuine hardwood veneer", "Water & scratch resistant", "Click-lock easy installation", "10+ year warranty"],
  },
  {
    img: blinds,
    tag: "Custom-fit",
    t: "Exclusive Roller Blinds",
    d: "🎯 Perfect fit, perfect control. Light & privacy exactly how you want it.",
    long: "Tailor-made roller blinds in premium fabrics — from sheer light-filtering to full blackout. Perfect for bedrooms, living rooms and offices, with smooth chain or motorised operation and a clean, minimal finish.",
    features: ["Made-to-measure sizing", "Blackout & sheer options", "Chain or motorised", "Wide fabric library"],
  },
  {
    img: wallpaper,
    tag: "Designer",
    t: "Imported Wallpapers",
    d: "🌍 Global designs, local expertise. Transform walls into art.",
    long: "A curated library of imported wallpapers — from botanical murals and textured weaves to classic damask and modern geometrics. Washable, fade-resistant and installed by our expert team for a flawless finish.",
    features: ["Imported designer rolls", "Washable & fade-resistant", "Custom murals available", "Expert installation"],
  },
  {
    img: decking,
    tag: "Weatherproof",
    t: "WPC Outdoor Decking",
    d: "🌳 Wood look, composite strength. Beautiful outdoor spaces that last.",
    long: "WPC (Wood Plastic Composite) decking gives you the look of natural wood with the toughness of composite. Ideal for balconies, patios and pool decks — UV-stable, splinter-free, and virtually maintenance-free.",
    features: ["UV & water resistant", "Anti-slip surface", "Termite-proof", "Eco-friendly composite"],
  },
  {
    img: grass,
    tag: "UV-protected",
    t: "Artificial Grass & Turf",
    d: "💚 Forever green, zero maintenance. Lush gardens without the work.",
    long: "Lush, evergreen artificial turf engineered for Indian weather. Soft underfoot, UV-stable, and child & pet friendly — perfect for terraces, balconies, gardens and play areas without any watering or mowing.",
    features: ["UV-stable colour", "Soft & realistic feel", "Child & pet safe", "Zero maintenance"],
  },
  {
    img: carpet,
    tag: "Hospitality grade",
    t: "Wall-to-Wall Carpets & Tiles",
    d: "🏨 Luxury comfort meets durability. Anti-viral, stain-proof elegance.",
    long: "Premium wall-to-wall carpeting and modular carpet tiles for hotels, offices, conference rooms and luxury homes. Anti-viral, stain-resistant and acoustically insulating — available in countless colours and textures.",
    features: ["Hospitality-grade quality", "Anti-viral & stain resistant", "Acoustic insulation", "Tiles or broadloom"],
  },
  {
    img: laminated,
    tag: "Natural look",
    t: "Exclusive Laminated Flooring",
    d: "💎 Real wood beauty at smart prices. Durable, scratch-resistant floors.",
    long: "Laminated flooring is a high-density replica of natural wood — engineered for durability and easy upkeep. Scratch-resistant, dimensionally stable and available in dozens of authentic wood and stone finishes.",
    features: ["Replica of natural wood", "Scratch & stain resistant", "Easy click installation", "Wide finish library"],
  },
  {
    img: vinyl,
    tag: "Waterproof",
    t: "SPC & PVC Vinyl Flooring",
    d: "💧 100% waterproof, termite-proof. The toughest floors for any space.",
    long: "SPC (Stone Plastic Composite) and PVC vinyl planks are 100% waterproof, termite-proof and incredibly long-wearing. Made from plasticised PVC with a faux wood-grain finish — ideal for homes, offices and high-traffic businesses.",
    features: ["100% waterproof", "Termite & moisture proof", "Inter-lock click system", "Long-wearing durability"],
  },
  {
    img: g4,
    tag: "Outdoor",
    t: "Green Vertical Garden",
    d: "🌿 Living walls for small spaces. Nature meets modern design.",
    long: "Vertical gardening is a special kind of urban gardening, perfect for small spaces. We design and install vertical green walls and patterned planters for homes, offices and commercial façades.",
    features: ["Custom designs", "Indoor & outdoor", "Low-maintenance options", "Real or artificial"],
  },
  {
    img: g5,
    tag: "Safety",
    t: "Invisible Grills",
    d: "👁️ Safety you can't see. Unobstructed views, complete protection.",
    long: "Invisible grilles are an advanced safety system — especially for children — that don't spoil your view. Tensioned stainless steel cables provide reliable fall protection on balconies, windows and high-rise openings.",
    features: ["Stainless steel cables", "Child & pet safe", "Unobstructed view", "Weather resistant"],
  },
  {
    img: g6,
    tag: "Wet-area",
    t: "PVC Wall & Foam Panels",
    d: "🛡️ Waterproof walls that stay beautiful. Seepage? Solved.",
    long: "PVC wall and ceiling panels are made of a waterproof material that is highly resistant to water — perfect for kitchens, bathrooms and seepage-affected walls. Foam panels add insulation and a clean, modern finish.",
    features: ["100% waterproof joints", "Conceals damp walls", "Easy to clean", "Quick installation"],
  },
];

const buildWaLink = (productName: string) => {
  const text = encodeURIComponent(`Hi MAHAVEER SALES CORPORATION,\n\nI'm interested in: ${productName}.\nPlease share more details and pricing.`);
  return `https://api.whatsapp.com/send?phone=919987112822&text=${text}`;
};

export const Products = () => {
  const [active, setActive] = useState<Product | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden bg-mesh">
      <div className="container-wide relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-reveal>
          <SectionHead
            eyebrow="Featured Range"
            title={<>Products that <span className="text-italic-display text-accent">elevate</span> every space.</>}
          />
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent group">
            Browse full catalogue <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={p.t} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <Tilt3D max={8} className="rounded-2xl">
                <article className="group rounded-2xl overflow-hidden bg-card border border-border card-3d">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="relative aspect-[4/3] overflow-hidden block w-full text-left"
                    aria-label={`View details for ${p.t}`}
                  >
                    <img src={p.img} alt={p.t} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                    <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-semibold bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-foreground tilt-pop">
                      {p.tag}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                  <div className="p-6 tilt-pop">
                    <h3 className="font-display text-xl font-semibold mb-2">{p.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.d}</p>
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                    >
                      Enquire now <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Tilt3D>
            </div>
          ))}
        </div>
      </div>

      {/* Product detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[var(--shadow-elegant)] grid md:grid-cols-2 animate-scale-in"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition shadow-[var(--shadow-soft)]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
              <img src={active.img} alt={active.t} className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase font-semibold bg-background/95 backdrop-blur px-3 py-1.5 rounded-full text-foreground">
                {active.tag}
              </span>
            </div>

            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Product Detail</p>
              <h3 id="product-modal-title" className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4">
                {active.t}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.long}</p>

              <ul className="space-y-2 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={buildWaLink(active.t)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 transition"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </a>
                <a
                  href="tel:+919987112822"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-secondary transition"
                >
                  <Phone className="w-4 h-4" /> Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

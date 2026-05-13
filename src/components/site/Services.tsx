import { SectionHead } from "./SectionHead";
import { Layers, Blinds, Wallpaper, TreePine, Sprout, Grid3x3, Shield, PanelTop, SunMedium, Wrench } from "lucide-react";

const services = [
  { icon: Layers, t: "Wooden & Laminated Flooring", d: "Exclusive engineered wood, laminate, SPC vinyl and PVC plank flooring — water & scratch resistant." },
  { icon: Blinds, t: "Roller & PVC Blinds", d: "Premium fabric roller blinds and waterproof PVC blinds for homes and offices." },
  { icon: Wallpaper, t: "Wallpapers & Posters", d: "Imported wallpapers and customized wall posters to transform any interior wall." },
  { icon: TreePine, t: "Outdoor & WPC Decking", d: "Hardwood and WPC decking for balconies, patios and gardens — durable and beautiful." },
  { icon: Sprout, t: "Artificial Grass & Vertical Gardens", d: "UV-protected artificial turf and lush green vertical garden installations." },
  { icon: Grid3x3, t: "Wall-to-Wall & Tile Carpets", d: "Plush carpeting and modular carpet tiles for residential and commercial spaces." },
  { icon: Shield, t: "Mosquito & Pigeon Nets", d: "Discreet protective nets and invisible grills for safety without spoiling the view." },
  { icon: PanelTop, t: "PVC Wall & Foam Panels", d: "Waterproof PVC and foam panels for leakage and seepage-affected walls." },
  { icon: SunMedium, t: "Glass Films", d: "Decorative and protective glass films for windows, façades and partitions." },
  { icon: Wrench, t: "Custom Installation", d: "Expert measurement, fitting and finishing by our experienced installation team." },
];

export const Services = () => (
  <section id="services" className="relative py-24 md:py-32 bg-secondary/50 overflow-hidden">
    <div className="blob" style={{ width: 500, height: 500, top: "-10%", right: "-10%", background: "hsl(32 65% 52% / 0.4)" }} />
    <div className="container-wide relative">
      <div data-reveal>
        <SectionHead
          eyebrow="What We Offer"
          title={<>Complete interior solutions, <span className="text-italic-display text-accent">end to end.</span></>}
          subtitle="From the floor beneath your feet to the wall behind your sofa — we specialize in everything that makes a space feel finished."
        />
      </div>
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
        {services.map(({ icon: Icon, t, d }, i) => (
          <div key={t} data-reveal style={{ transitionDelay: `${i * 50}ms` }} className="bg-card p-8 hover:bg-background transition-all duration-500 group hover:-translate-y-1 relative">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-[var(--shadow-soft)]">
              <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import { SectionHead } from "./SectionHead";
import { Tilt3D } from "./Tilt3D";
import wood from "@/assets/product-wood.jpg";

export const About = () => (
  <section id="about" className="relative py-24 md:py-32 overflow-hidden">
    <div className="blob" style={{ width: 380, height: 380, bottom: "-10%", left: "-5%", background: "hsl(36 70% 65% / 0.5)" }} />
    <div className="container-wide relative grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative" data-reveal>
        <Tilt3D max={6} className="rounded-2xl">
          <img src={wood} alt="Close-up of premium engineered wooden flooring" className="rounded-2xl w-full aspect-[4/5] object-cover shadow-[var(--shadow-elegant)]" width={800} height={1000} loading="lazy" />
        </Tilt3D>
        <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 card-3d max-w-[220px]">
          <p className="font-display text-4xl font-semibold text-foreground">2006</p>
          <p className="text-sm text-muted-foreground mt-1">The year our journey began in Mumbai</p>
        </div>
        <div className="absolute -top-6 -left-6 bg-card border border-border rounded-2xl p-4 card-3d hidden md:block">
          <p className="font-display text-2xl font-semibold shimmer">18+ yrs</p>
          <p className="text-xs text-muted-foreground">of craftsmanship</p>
        </div>
      </div>
      <div data-reveal>
        <SectionHead
          eyebrow="About Us"
          title={<>A legacy of <span className="text-italic-display text-accent">quality interiors</span>, built one floor at a time.</>}
        />
        <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Founded in 2006 by Mr. Devesh Gupta, Mahaveer Sales Corporation has grown into one of India's most trusted names for high-quality wooden flooring and complete interior solutions. From engineered wood and SPC vinyl to roller blinds, wallpapers and outdoor decking — we bring craftsmanship to every corner of your space.
          </p>
          <p className="font-medium text-foreground italic">"Client's satisfaction is our motto."</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            { t: "Mission", d: "Deliver premium interior products with uncompromising quality." },
            { t: "Vision", d: "To be India's most trusted name in flooring & interiors." },
            { t: "Promise", d: "Fair pricing, expert installation, on-time delivery." },
          ].map((c) => (
            <div key={c.t} className="border-t border-border pt-4 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">{c.t}</p>
              <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import hero from "@/assets/hero-interior.jpg";

export const Hero = () => (
  <section className="relative min-h-[100vh] flex items-end overflow-hidden">
    <img src={hero} alt="Premium engineered wooden flooring in a modern living interior" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

    <div className="relative container-wide pt-40 pb-24 text-primary-foreground">
      <div className="max-w-3xl">
        <p className="eyebrow text-primary-foreground/80 mb-6">
          <span className="text-primary-foreground/80">Interiors · Mumbai · Since 2006</span>
        </p>
        <h1 className="font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.05] font-semibold mb-6">
          Crafted floors. <br />
          <span className="text-italic-display text-[hsl(36_70%_75%)]">Curated interiors.</span>
        </h1>
        <p className="text-lg text-primary-foreground/85 max-w-xl leading-relaxed mb-10">
          Mahaveer Sales Corporation is India's trusted name for exclusive wooden flooring, blinds, wallpapers, decking and complete interior solutions — delivered with quality you can feel underfoot.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-primary-foreground font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all" style={{ background: "var(--gradient-warm)" }}>
            Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=919967980747&text=Hi%2C%20MAHAVEER%20SALES%20CORPORATION" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 transition">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <a href="tel:+919967980747" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition">
            <Phone className="w-4 h-4" /> +91 99679 80747
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-primary-foreground/20 pt-8">
          {[
            { n: "18+", l: "Years experience" },
            { n: "20+", l: "Product categories" },
            { n: "1000s", l: "Happy clients" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl sm:text-4xl font-semibold">{s.n}</p>
              <p className="text-xs sm:text-sm text-primary-foreground/70 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

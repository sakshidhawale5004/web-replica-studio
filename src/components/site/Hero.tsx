import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import hero from "@/assets/hero-interior.jpg";

export const Hero = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (imgRef.current) imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0004})`;
      if (contentRef.current) contentRef.current.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden">
      <img
        ref={imgRef}
        src={hero}
        alt="Premium engineered wooden flooring in a modern living interior"
        className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating decorative blobs */}
      <div className="blob" style={{ width: 420, height: 420, top: "10%", left: "-8%", background: "hsl(32 65% 52%)" }} />
      <div className="blob" style={{ width: 360, height: 360, top: "30%", right: "-6%", background: "hsl(36 70% 65%)", animationDelay: "-4s" }} />

      <div ref={contentRef} className="relative container-wide pt-40 pb-24 text-white will-change-transform">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow text-white/80 mb-6">
            <span className="text-white/80">Interiors · Mumbai · Since 2006</span>
          </p>
          <h1 className="font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.05] font-semibold mb-6" style={{ textShadow: "0 4px 30px hsl(220 40% 14% / 0.4)" }}>
            Crafted floors. <br />
            <span className="text-italic-display shimmer">Curated interiors.</span>
          </h1>
          <p className="text-lg text-white/85 max-w-xl leading-relaxed mb-10">
            Mahaveer Sales Corporation is India's trusted name for exclusive wooden flooring, blinds, wallpapers, decking and complete interior solutions — delivered with quality you can feel underfoot.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition-all duration-300" style={{ background: "var(--gradient-warm)" }}>
              Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919967980747&text=Hi%2C%20MAHAVEER%20SALES%20CORPORATION" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <div className="flex flex-col gap-1">
              <a href="tel:+919967980747" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="w-4 h-4" /> +91 99679 80747
              </a>
              <a href="tel:+917039257036" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300 text-sm">
                <Phone className="w-4 h-4" /> 70392 57036
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-white/20 pt-8">
            {[
              { n: "18+", l: "Years experience" },
              { n: "20+", l: "Product categories" },
              { n: "1000s", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl sm:text-4xl font-semibold">{s.n}</p>
                <p className="text-xs sm:text-sm text-white/70 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2 animate-pulse">
        Scroll
        <span className="w-px h-10 bg-white/40" />
      </div>
    </section>
  );
};

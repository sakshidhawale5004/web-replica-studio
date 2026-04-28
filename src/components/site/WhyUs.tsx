import { SectionHead } from "./SectionHead";

const reasons = [
  { t: "Premium quality", d: "Strict quality standards across every product line we offer." },
  { t: "Experienced team", d: "Skilled professionals with 18+ years in the interiors industry." },
  { t: "Timely delivery", d: "Reliable scheduling and a strong vendor network across India." },
  { t: "Trust & transparency", d: "Honest advice, no hidden costs — built on long-term relationships." },
  { t: "Competitive pricing", d: "Fair, market-leading prices without compromising on grade." },
  { t: "End-to-end service", d: "Consultation, customization, installation and after-sales support." },
];

export const WhyUs = () => (
  <section id="why" className="py-24 md:py-32 text-primary-foreground" style={{ background: "var(--gradient-dark)" }}>
    <div className="container-wide">
      <SectionHead
        eyebrow="Why Choose Us"
        title={<span className="text-primary-foreground">Six reasons clients <span className="text-italic-display text-[hsl(36_70%_70%)]">stay with us.</span></span>}
      />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((r, i) => (
          <div key={r.t} className="border-t border-primary-foreground/20 pt-6">
            <p className="font-display text-5xl font-light text-[hsl(36_70%_70%)] mb-4">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-xl font-semibold mb-2">{r.t}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

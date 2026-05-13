import { SectionHead } from "./SectionHead";

const reasons = [
  { t: "Reliable product range", d: "An extremely reliable, hand-picked range of interior products across every category." },
  { t: "Well managed services", d: "Smooth coordination from site visit and quotation to final installation." },
  { t: "Experienced professionals", d: "A highly experienced team with 18+ years in the interiors industry." },
  { t: "Strict quality standards", d: "Every product is checked against strict in-house quality standards before dispatch." },
  { t: "Timely delivery", d: "Reliable scheduling backed by a strong vendor base and wide distribution network." },
  { t: "Customized packaging", d: "Safe, customized packaging so your order arrives exactly as it left us." },
];

export const WhyUs = () => (
  <section id="why" className="py-24 md:py-32 text-white" style={{ background: "var(--gradient-dark)" }}>
    <div className="container-wide">
      <SectionHead
        eyebrow="Why Choose Us"
        title={<span className="text-white">Reasons clients <span className="text-italic-display text-[hsl(36_70%_70%)]">stay with us.</span></span>}
        subtitle="Since our origin in this market, we have been actively committed to providing our patrons with a remarkable range of products and services."
      />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((r, i) => (
          <div key={r.t} className="border-t border-white/20 pt-6">
            <p className="font-display text-5xl font-light text-[hsl(36_70%_70%)] mb-4">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="font-display text-xl font-semibold mb-2 text-white">{r.t}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

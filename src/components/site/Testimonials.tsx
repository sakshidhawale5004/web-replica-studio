import { SectionHead } from "./SectionHead";
import { Quote } from "lucide-react";

const items = [
  { q: "The engineered wooden flooring transformed our living room completely. Installation was clean, on time, and the finish is stunning even after 3 years.", n: "Priya Sharma", r: "Homeowner, Bandra" },
  { q: "My go-to vendor for blinds and wallpapers in Mumbai. Devesh ji's product knowledge is unmatched, and pricing is always fair for the quality.", n: "Rohit Mehta", r: "Interior Designer" },
  { q: "Got our entire office floor redone with carpet tiles. Modular, easy to maintain, and looks incredibly professional. Highly recommend.", n: "Anjali Desai", r: "Office Manager, Andheri" },
];

export const Testimonials = () => (
  <section className="py-24 md:py-32">
    <div className="container-wide">
      <SectionHead
        eyebrow="Client Stories"
        title={<>Trusted by homes & businesses <span className="text-italic-display text-accent">across India.</span></>}
      />
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <figure key={it.n} className="bg-card border border-border rounded-2xl p-8 flex flex-col">
            <Quote className="w-8 h-8 text-accent mb-5" strokeWidth={1.5} />
            <blockquote className="font-display text-lg leading-relaxed text-foreground flex-1">
              {it.q}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-border">
              <p className="font-semibold text-foreground">{it.n}</p>
              <p className="text-sm text-muted-foreground">{it.r}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

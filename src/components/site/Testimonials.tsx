import { SectionHead } from "./SectionHead";
import { Quote } from "lucide-react";
import { Tilt3D } from "./Tilt3D";

const items = [
  { q: "The engineered wooden flooring transformed our living room completely. Installation was clean, on time, and the finish is stunning even after 3 years.", n: "Priya Sharma", r: "Homeowner, Bandra" },
  { q: "My go-to vendor for blinds and wallpapers in Mumbai. Devesh ji's product knowledge is unmatched, and pricing is always fair for the quality.", n: "Rohit Mehta", r: "Interior Designer" },
  { q: "Got our entire office floor redone with carpet tiles. Modular, easy to maintain, and looks incredibly professional. Highly recommend.", n: "Anjali Desai", r: "Office Manager, Andheri" },
];

export const Testimonials = () => (
  <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="container-wide relative">
      <div data-reveal>
        <SectionHead
          eyebrow="Client Stories"
          title={<>Trusted by homes & businesses <span className="text-italic-display text-accent">across India.</span></>}
        />
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={it.n} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
            <Tilt3D max={6} className="rounded-2xl h-full">
              <figure className="bg-card border border-border rounded-2xl p-8 flex flex-col card-3d h-full">
                <Quote className="w-8 h-8 text-accent mb-5 tilt-pop" strokeWidth={1.5} />
                <blockquote className="font-display text-lg leading-relaxed text-foreground flex-1 tilt-pop">
                  {it.q}
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border tilt-pop">
                  <p className="font-semibold text-foreground">{it.n}</p>
                  <p className="text-sm text-muted-foreground">{it.r}</p>
                </figcaption>
              </figure>
            </Tilt3D>
          </div>
        ))}
      </div>
    </div>
  </section>
);

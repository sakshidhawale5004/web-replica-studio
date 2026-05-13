import { SectionHead } from "./SectionHead";

export const BusinessInfo = () => (
  <section id="business-info" className="py-24 md:py-32 bg-secondary/50">
    <div className="container-wide">
      <div data-reveal>
        <SectionHead
          eyebrow="Our Core Values"
          title={<>What drives <span className="text-italic-display text-accent">Mahaveer</span> forward.</>}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        {/* Core Values */}
        <div data-reveal className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <h3 className="font-display text-lg font-semibold mb-3">Quality First</h3>
            <p className="text-sm text-muted-foreground">We never compromise on product quality or installation standards.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <h3 className="font-display text-lg font-semibold mb-3">Customer Centric</h3>
            <p className="text-sm text-muted-foreground">Your satisfaction is our motto — we listen, understand, and deliver.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <h3 className="font-display text-lg font-semibold mb-3">Timely Delivery</h3>
            <p className="text-sm text-muted-foreground">We respect your time and ensure on-schedule project completion.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <h3 className="font-display text-lg font-semibold mb-3">Fair Pricing</h3>
            <p className="text-sm text-muted-foreground">Transparent pricing with no hidden charges — value for money guaranteed.</p>
          </div>
        </div>

        {/* Our Commitment */}
        <div data-reveal className="flex flex-col justify-center">
          <div className="bg-card border border-border rounded-xl p-8 h-full flex flex-col justify-center">
            <h3 className="font-display text-2xl font-semibold mb-6">Our Commitment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since 2006, Mahaveer Sales Corporation has been committed to delivering premium interior products and services with uncompromising quality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in building lasting relationships with our clients through excellence, integrity, and exceptional service. Every project we undertake reflects our dedication to transforming spaces into beautiful, functional environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

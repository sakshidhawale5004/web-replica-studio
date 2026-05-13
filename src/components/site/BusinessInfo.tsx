import { SectionHead } from "./SectionHead";
import { Award, Users, Zap, TrendingUp } from "lucide-react";

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

        {/* Key Stats */}
        <div data-reveal className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "Years of Excellence", value: "18+" },
              { icon: Users, label: "Satisfied Clients", value: "1000+" },
              { icon: TrendingUp, label: "Projects Completed", value: "500+" },
              { icon: Zap, label: "Product Range", value: "20+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-card border border-border rounded-xl p-4 hover:border-accent/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-semibold font-display">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

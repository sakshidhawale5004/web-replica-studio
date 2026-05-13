import { SectionHead } from "./SectionHead";
import { Award, Users, Zap, TrendingUp, MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const BusinessInfo = () => (
  <section id="business-info" className="py-24 md:py-32 bg-secondary/50">
    <div className="container-wide">
      <div data-reveal>
        <SectionHead
          eyebrow="About Mahaveer"
          title={<>Your trusted partner in <span className="text-italic-display text-accent">premium interiors</span> since 2006.</>}
        />
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12">
        {/* Company Overview */}
        <div data-reveal className="space-y-6">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-3">Company Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mahaveer Sales Corporation is a leading supplier of premium interior products and services in Mumbai. Established in 2006, we have built a reputation for delivering high-quality wooden flooring, blinds, wallpapers, carpets, and complete interior solutions to residential and commercial clients across India.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-3">Our Expertise</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Premium wooden flooring (engineered, laminated, SPC, PVC)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Custom roller blinds and PVC water-proof blinds</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Imported wallpapers and customized wall posters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Wall-to-wall carpets and modular carpet tiles</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>WPC and hardwood outdoor decking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>Safety solutions (invisible grills, mosquito nets, pigeon nets)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Stats & Values */}
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

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Core Values</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground">Quality First</p>
                <p className="text-sm text-muted-foreground">We never compromise on product quality or installation standards.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Customer Centric</p>
                <p className="text-sm text-muted-foreground">Your satisfaction is our motto — we listen, understand, and deliver.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Timely Delivery</p>
                <p className="text-sm text-muted-foreground">We respect your time and ensure on-schedule project completion.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Fair Pricing</p>
                <p className="text-sm text-muted-foreground">Transparent pricing with no hidden charges — value for money guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Location Info */}
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          {
            icon: MapPin,
            title: "Location",
            details: ["5/A Silver Apartment", "1st Akurli Cross Road", "Kandivali East, Mumbai 400101"],
          },
          {
            icon: Phone,
            title: "Contact",
            details: ["+91 99679 80747", "+91 99871 12822", "Devesh Gupta (Proprietor)"],
          },
          {
            icon: Mail,
            title: "Email & Hours",
            details: ["mahaveersales2006@gmail.com", "Mon – Sat: 10 AM – 8 PM", "Sunday: Closed"],
          },
        ].map(({ icon: Icon, title, details }) => (
          <div key={title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold">{title}</h3>
            </div>
            <div className="space-y-1">
              {details.map((detail, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12" data-reveal>
        <h3 className="font-display text-2xl font-semibold mb-6">Why Choose Mahaveer Sales Corporation?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Extremely Reliable Product Range</p>
                <p className="text-sm text-muted-foreground mt-1">Curated selection of premium products from trusted manufacturers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Well-Managed Services</p>
                <p className="text-sm text-muted-foreground mt-1">Professional installation and after-sales support.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Highly Experienced Team</p>
                <p className="text-sm text-muted-foreground mt-1">18+ years of expertise with skilled professionals.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Strict Quality Standards</p>
                <p className="text-sm text-muted-foreground mt-1">Every product and installation meets our high quality benchmarks.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Timely Delivery</p>
                <p className="text-sm text-muted-foreground mt-1">On-schedule project completion without compromises.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm font-semibold">✓</div>
              <div>
                <p className="font-medium text-foreground">Wide Distribution Network</p>
                <p className="text-sm text-muted-foreground mt-1">Serving clients across Mumbai and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

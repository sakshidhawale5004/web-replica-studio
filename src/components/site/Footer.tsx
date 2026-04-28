import logo from "@/assets/msc-logo.png";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide py-16 grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Mahaveer Sales Corporation" className="w-12 h-12 rounded-md" width={48} height={48} />
          <div>
            <p className="font-display text-lg font-semibold">Mahaveer Sales Corporation</p>
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60">Est. 2006 · Mumbai</p>
          </div>
        </div>
        <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
          India's trusted name for exclusive wooden flooring, blinds, wallpapers and complete interior solutions.
        </p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">Explore</p>
        <ul className="space-y-2 text-sm">
          {["About", "Services", "Products", "Why Us", "Gallery", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-primary-foreground/85 hover:text-accent transition">{l}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">Get in touch</p>
        <ul className="space-y-2 text-sm text-primary-foreground/85">
          <li>5/A Silver Apartment, 1st Akurli Cross Road, Kandivali East, Mumbai 400101</li>
          <li><a href="tel:+919967980747" className="hover:text-accent">+91 99679 80747</a></li>
          <li><a href="mailto:mahaveersales2006@gmail.com" className="hover:text-accent">mahaveersales2006@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-wide py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Mahaveer Sales Corporation. All rights reserved.</p>
        <p>Crafted with care in Mumbai.</p>
      </div>
    </div>
  </footer>
);

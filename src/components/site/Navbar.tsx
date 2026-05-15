import { Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Our Values", href: "#business-info" },
  { label: "Why Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
    <div className="container-wide flex items-center justify-between h-20">
      <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img src="/mahaver/msc-logo-removebg-preview.png" alt="MSC Creative logo" className="w-20 h-14 object-contain" width={80} height={56} loading="eager" />
        <div className="leading-tight hidden sm:block">
          <p className="font-display text-sm font-semibold">Mahaveer Sales</p>
          <p className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground font-medium">Corporation · Est. 2006</p>
        </div>
      </a>
      <nav className="hidden lg:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a href="tel:+919967980747" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent" title="Call us: +91 99679 80747 or 70392 57036">
          <Phone className="w-4 h-4" /> +91 99679 80747
        </a>
        <ThemeToggle />
        <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
          Get a Quote
        </a>
      </div>
    </div>
  </header>
);

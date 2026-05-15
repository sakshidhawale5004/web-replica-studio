import { useState } from "react";
import { SectionHead } from "./SectionHead";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Wooden Flooring", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi MAHAVEER SALES CORPORATION,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterested in: ${form.interest}%0A%0A${form.message}`;
    window.open(`https://api.whatsapp.com/send?phone=919967980747&text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-wide">
        <SectionHead
          eyebrow="Get In Touch"
          title={<>Let's talk about your <span className="text-italic-display text-accent">space.</span></>}
          subtitle="Visit our Mumbai showroom, give us a call, message on WhatsApp, or drop a quick enquiry — we'll respond within 24 hours."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 mb-4">
              <a href="https://api.whatsapp.com/send?phone=919967980747" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 transition">
                <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
              </a>
              <a href="https://www.google.com/maps/place/India+Post/@19.2035025,72.8478996,17z" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-secondary transition">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>

            {[
              { icon: MapPin, t: "Visit us", d: "5/A Silver Apartment, 1st Akurli Cross Road, Kandivali East, Mumbai 400101", href: "https://www.google.com/maps/place/India+Post/@19.2035025,72.8478996,17z" },
              { icon: Phone, t: "Devesh Gupta · Proprietor", d: "+91 99679 80747", href: "tel:+919967980747" },
              { icon: Mail, t: "Email us", d: "mahaveersales2006@gmail.com", href: "mailto:mahaveersales2006@gmail.com" },
              { icon: Clock, t: "Hours", d: "Mon – Sat · 10:00 AM – 8:00 PM" },
            ].map(({ icon: Icon, t, d, href }) => {
              const content = (
                <div className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">{t}</p>
                    <p className="mt-1 text-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              );
              return href ? <a key={t} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a> : <div key={t}>{content}</div>;
            })}
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl font-semibold mb-6">Request a quote</h3>
            <p className="text-sm text-muted-foreground mb-6">Fill in your details — we'll open WhatsApp pre-filled with your enquiry so it reaches us instantly.</p>
            <div className="space-y-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" />
              <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" />
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email (optional)" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" />
              <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition">
                {["Wooden Flooring", "Roller Blinds", "Wallpapers", "WPC Decking", "Artificial Grass", "Carpets", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Message" className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition resize-none" />
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-primary-foreground font-medium shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition" style={{ background: "var(--gradient-warm)" }}>
                <MessageCircle className="w-4 h-4" /> Send via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground text-center">Your enquiry will open in WhatsApp Web/App — just hit send.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

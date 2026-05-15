import { SectionHead } from "./SectionHead";
import { ArrowUpRight, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Tilt3D } from "./Tilt3D";

type Project = {
  img: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
};

const projects: Project[] = [
  {
    img: "/mahaver/exclusive engineering wooden flooring (2).jpg",
    title: "Exclusive Engineered Wooden Flooring",
    shortDesc: "Premium hardwood installation.",
    longDesc: "A stunning showcase of our engineered wooden flooring expertise. This project features genuine hardwood veneer with multi-ply engineered core, delivering both beauty and stability. Perfect for high-traffic residential and commercial spaces.",
    features: ["Genuine hardwood veneer", "Water & scratch resistant", "Professional installation", "10+ year warranty"],
  },
  {
    img: "/mahaver/laminatedflooring.jpg",
    title: "Exclusive Laminated Flooring",
    shortDesc: "Natural wood replica. Smart & stylish.",
    longDesc: "This project demonstrates the versatility of laminated flooring. High-density replica of natural wood with authentic finishes, scratch-resistant surface, and easy maintenance. Ideal for homes and offices seeking wood aesthetics without the cost.",
    features: ["Replica of natural wood", "Scratch & stain resistant", "Easy click installation", "Wide finish library"],
  },
  {
    img: "/mahaver/spcflooring.jpg",
    title: "Exclusive SPC Flooring",
    shortDesc: "100% waterproof. Tough & beautiful.",
    longDesc: "A premium SPC flooring installation showcasing waterproof and termite-proof vinyl planks. Stone Plastic Composite technology ensures durability in any environment. Perfect for kitchens, bathrooms, and high-moisture areas.",
    features: ["100% waterproof", "Termite & moisture proof", "Inter-lock click system", "Long-wearing durability"],
  },
  {
    img: "/mahaver/pvcplanks.jpg",
    title: "PVC Vinyl Flooring Planks",
    shortDesc: "Water-resistant planks. Faux wood grain.",
    longDesc: "This installation features premium PVC vinyl planks with realistic wood-grain appearance. Formulated for use in homes and businesses, these planks are impervious to water and known for long-wearing durability.",
    features: ["100% waterproof", "Faux wood grain appearance", "Easy installation", "Long-lasting durability"],
  },
  {
    img: "/mahaver/Roller Blind.jpg",
    title: "Exclusive Roller Blinds",
    shortDesc: "Custom-fit window solutions. Perfect control.",
    longDesc: "Premium roller blinds installation with made-to-measure sizing. Available in blackout and sheer options with smooth chain or motorised operation. This project showcases our expertise in creating clean, minimal window treatments.",
    features: ["Made-to-measure sizing", "Blackout & sheer options", "Chain or motorised", "Wide fabric library"],
  },
  {
    img: "/mahaver/FittedPVCwaterproofblinds.jpg",
    title: "PVC Water Proof Blinds",
    shortDesc: "Waterproof window coverings. Humid-room ready.",
    longDesc: "Fashionable PVC water-proof blinds installation perfect for kitchens, bathrooms, and humid areas. These blinds properly cover windows and work well in humid rooms, providing both functionality and style.",
    features: ["Waterproof material", "Humid-room suitable", "Easy to clean", "Durable construction"],
  },
  {
    img: "/mahaver/walltowallcarpet.jpg",
    title: "Wall-to-Wall Carpets",
    shortDesc: "Luxury comfort. Anti-viral & elegant.",
    longDesc: "Premium wall-to-wall carpet installation for hospitality spaces. This project showcases our expertise in creating comfortable, anti-viral carpeting that gives a sense of grandeur to hospitality spaces with anti-viral properties.",
    features: ["Hospitality-grade quality", "Anti-viral & stain resistant", "Acoustic insulation", "Plush comfort"],
  },
  {
    img: "/mahaver/carpettiles.jpg",
    title: "Carpet Tiles",
    shortDesc: "Modular flooring. Commercial-grade.",
    longDesc: "Modular carpet tiles installation showcasing clubbed-together functionality. These tiles give modular functionality and look great in any commercial space. Easy to replace individual tiles as needed.",
    features: ["Modular functionality", "Commercial-grade", "Easy replacement", "Professional appearance"],
  },
  {
    img: "/mahaver/importedwallpaper.jpg",
    title: "Imported Wallpapers",
    shortDesc: "Designer patterns. Global aesthetics.",
    longDesc: "Curated imported wallpaper installation featuring designer patterns from across the globe. Washable, fade-resistant and installed by our expert team for a flawless finish. Perfect for homes, offices, and hotels.",
    features: ["Imported designer rolls", "Washable & fade-resistant", "Custom murals available", "Expert installation"],
  },
  {
    img: "/mahaver/customizewallpaper.jpg",
    title: "Customized Wall Posters",
    shortDesc: "Personal touch. Your photos, your style.",
    longDesc: "Customize your walls with your favorite photos printed as posters. This project showcases the versatility of personalized wall art. Transform any space with memories and moments that matter to you.",
    features: ["Custom photo printing", "High-quality materials", "Easy installation", "Personalized design"],
  },
  {
    img: "/mahaver/glassfilms.jpg",
    title: "Glass Films",
    shortDesc: "Protective coating. Privacy & style.",
    longDesc: "Glass films installation providing a thin laminate film for interior and exterior glass surfaces. Perfect for automobiles, boats, and buildings. Offers privacy, protection, and aesthetic enhancement.",
    features: ["Thin laminate film", "Interior & exterior use", "Privacy protection", "Professional finish"],
  },
  {
    img: "/mahaver/grassverticalgarden.jpg",
    title: "Green Vertical Garden",
    shortDesc: "Living walls. Urban gardening.",
    longDesc: "Vertical gardening installation perfect for small spaces. This project showcases our expertise in designing and installing vertical green walls and patterned planters for homes, offices, and commercial façades.",
    features: ["Custom designs", "Indoor & outdoor", "Low-maintenance options", "Real or artificial"],
  },
  {
    img: "/mahaver/artificalglass.jpg",
    title: "Artificial Grass",
    shortDesc: "Forever green. Zero maintenance.",
    longDesc: "Artificial grass installation showcasing lush, evergreen turf engineered for Indian weather. Soft underfoot, UV-stable, and child & pet friendly. Perfect for terraces, balconies, and gardens.",
    features: ["UV-stable colour", "Soft & realistic feel", "Child & pet safe", "Zero maintenance"],
  },
  {
    img: "/mahaver/outdoordesking.jpg",
    title: "Exclusive Outdoor Deckings",
    shortDesc: "Hardwood decking. Weatherproof.",
    longDesc: "Exclusive hardwood deckings installation featuring seasoned imported hardwood with waterproof properties. Easy to install with deck tile options also available. Perfect for outdoor entertaining spaces.",
    features: ["Imported hardwood", "Waterproof properties", "Easy installation", "Deck tile option"],
  },
  {
    img: "/mahaver/𝐖𝐏𝐂 𝐃𝐞𝐜𝐤 𝐅𝐥𝐨𝐨𝐫𝐢𝐧𝐠.jpg",
    title: "Exclusive WPC Deck Flooring",
    shortDesc: "Eco-friendly composite. Beautiful & durable.",
    longDesc: "WPC deck flooring installation for balconies, porches, gardens, and patios. This innovative eco-friendly system is affordable, guaranteed to last, beautiful, and easy to install.",
    features: ["UV & water resistant", "Anti-slip surface", "Termite-proof", "Eco-friendly composite"],
  },
  {
    img: "/mahaver/pvcwallpanels.jpg",
    title: "PVC Wall Panels For Leakage Walls",
    shortDesc: "Waterproof solution. Seepage fixed.",
    longDesc: "PVC wall and ceiling panels installation for leakage and seepage-affected walls. Made of waterproof material, these panels are highly resistant to water. Perfect for kitchens, bathrooms, and problem areas.",
    features: ["100% waterproof joints", "Conceals damp walls", "Easy to clean", "Quick installation"],
  },
  {
    img: "/mahaver/foampanels.jpg",
    title: "Foam Panels For Seepage Affected Walls",
    shortDesc: "Insulation & protection. Damp-proof.",
    longDesc: "Foam panels installation for seepage-affected walls. These panels are absolutely water-proof and made of PVC with water-resistant joints. Perfect for wet and damp areas like kitchens and bathrooms.",
    features: ["Water-proof material", "PVC construction", "Water-resistant joints", "Damp area suitable"],
  },
  {
    img: "/mahaver/Invisible Grill.jpg",
    title: "Invisible Grill",
    shortDesc: "Safety unseen. Unobstructed views.",
    longDesc: "Invisible grille installation providing advanced safety for families, especially children. Tensioned stainless steel cables offer reliable fall protection on balconies and high-rise openings without spoiling the view.",
    features: ["Stainless steel cables", "Child & pet safe", "Unobstructed view", "Weather resistant"],
  },
  {
    img: "/mahaver/Mosquito_Net.jpg",
    title: "Mosquito Nets",
    shortDesc: "Pest protection. Breathable mesh.",
    longDesc: "Mosquito net installation providing a meshed curtain circumferentially draped over a bed or sleeping area. Offers sleeper barrier protection against bites and stings from mosquitoes, flies, and other pest insects.",
    features: ["Meshed curtain design", "Pest protection", "Breathable material", "Easy installation"],
  },
  {
    img: "/mahaver/pigeon_net.jpg",
    title: "Pigeon Net",
    shortDesc: "Bird protection. Building safe.",
    longDesc: "Bird netting installation used to prevent birds from nesting or entering certain areas. Often used on buildings and gardens to protect against pest birds like pigeons, gulls, and sparrows.",
    features: ["Bird prevention", "Building protection", "Garden safe", "Durable netting"],
  },
];

const buildWaLink = (projectName: string) => {
  const text = encodeURIComponent(`Hi MAHAVEER SALES CORPORATION,\n\nI'm interested in your ${projectName} project.\nPlease share more details and pricing.`);
  return `https://api.whatsapp.com/send?phone=919987112822&text=${text}`;
};

export const Projects = () => {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-mesh">
      <div className="container-wide relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16" data-reveal>
          <SectionHead
            eyebrow="Our Portfolio"
            title={<>Mahaveer Sales Corporation Projects that <span className="text-italic-display text-accent">inspire.</span></>}
          />
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            Contact Us
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <Tilt3D max={8} className="rounded-2xl">
                <article className="group rounded-2xl overflow-hidden bg-card border border-border card-3d">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="relative aspect-[4/3] overflow-hidden block w-full text-left"
                    aria-label={`View details for ${p.title}`}
                  >
                    <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button>
                  <div className="p-6 tilt-pop">
                    <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.shortDesc}</p>
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                    >
                      View project <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              </Tilt3D>
            </div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-card rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[var(--shadow-elegant)] grid md:grid-cols-2 animate-scale-in"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition shadow-[var(--shadow-soft)]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
              <img src={active.img} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="p-8 md:p-10 flex flex-col">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Project Showcase</p>
              <h3 id="project-modal-title" className="font-display text-3xl md:text-4xl font-semibold leading-tight mb-4">
                {active.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.longDesc}</p>

              <ul className="space-y-2 mb-8">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={buildWaLink(active.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium hover:brightness-110 transition"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
                </a>
                <a
                  href="tel:+919987112822"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-secondary transition"
                >
                  <Phone className="w-4 h-4" /> Call us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

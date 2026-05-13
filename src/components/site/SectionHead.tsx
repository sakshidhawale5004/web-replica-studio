import logo from "@/assets/msc-logo.jpg";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHead = ({ eyebrow, title, subtitle, align = "left" }: Props) => (
  <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
    <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
      <img src={logo} alt="" className="w-8 h-8 rounded object-cover opacity-90" width={32} height={32} />
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">{eyebrow}</span>
    </div>
    <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] font-semibold text-foreground">{title}</h2>
    {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);

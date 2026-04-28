import { useRef, ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt degrees
  glare?: boolean;
}

export const Tilt3D = ({ children, className = "", max = 10, glare = true }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * max * 2;
    const ry = (x - 0.5) * max * 2;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative [transform-style:preserve-3d] [transform:perspective(1100px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), hsl(0 0% 100% / 0.25), transparent 45%)",
            mixBlendMode: "overlay",
          }}
        />
      )}
    </div>
  );
};

// src/components/Marquee.tsx
interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export function Marquee({ items, reverse = false, className = "", size = "md", dark = false }: MarqueeProps) {
  const sizeClass = {
    sm: "text-sm",
    md: "text-xl md:text-2xl font-semibold",
    lg: "text-3xl md:text-5xl font-bold tracking-tight",
  }[size];

  const doubled = [...items, ...items];

  return (
    <div className={`marquee-wrap py-4 ${className}`}>
      <div className={reverse ? "marquee-track-rev" : "marquee-track"}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-4 px-4 ${sizeClass} ${
              dark
                ? i % 2 === 0 ? "text-white" : "text-transparent [-webkit-text-stroke:1px_white]"
                : i % 2 === 0 ? "text-foreground" : "text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))]"
            }`}
          >
            {item}
            <span className="text-orange-500 text-lg">_</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Timeline({ items, light = false }) {
  return (
    <ol className="relative border-l border-gold/30 ml-2">
      {items.map((item) => (
        <li key={item.year} data-reveal className="relative pl-8 pb-14 last:pb-0">
          <span
            className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-terracotta border-2 ${
              light ? "border-charcoal" : "border-ivory"
            }`}
          />
          <span className="eyebrow text-terracotta text-xs">{item.year}</span>
          <h3 className={`font-display text-2xl md:text-3xl mt-2 ${light ? "text-ivory" : "text-ink"}`}>
            {item.title}
          </h3>
          <p className={`mt-3 leading-relaxed max-w-lg ${light ? "text-ivory/65" : "text-ink/65"}`}>
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

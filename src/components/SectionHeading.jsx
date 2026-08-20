export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  size = "lg",
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const titleSize =
    size === "xl"
      ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      : "text-3xl sm:text-4xl md:text-5xl";

  return (
    <div className={`flex flex-col ${alignment} max-w-2xl`} data-reveal>
      {eyebrow && (
        <span
          className={`eyebrow text-xs md:text-sm mb-4 ${light ? "text-gold-light" : "text-terracotta"}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display ${titleSize} leading-[1.08] text-balance ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-ivory/75" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

const SPICE_LABEL = ["No spice", "Mild", "Medium", "Fiery"];

export default function DishCard({ dish, featured = false }) {
  return (
    <article
      data-reveal
      className={`group relative flex flex-col overflow-hidden bg-ivory border border-ink/10 ${
        featured ? "" : ""
      }`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span
            className={`w-4 h-4 border flex items-center justify-center ${
              dish.veg ? "border-forest" : "border-maroon"
            } bg-ivory/90`}
            aria-hidden="true"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dish.veg ? "bg-forest" : "bg-maroon"}`} />
          </span>
          <span className="sr-only">{dish.veg ? "Vegetarian" : "Non-vegetarian"}</span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl md:text-2xl leading-tight text-ink">{dish.name}</h3>
          <span className="font-display text-lg text-terracotta whitespace-nowrap">{dish.price}</span>
        </div>
        <p className="mt-2 text-sm text-ink/65 leading-relaxed flex-1">{dish.description}</p>
        {dish.spice > 0 && (
          <div className="mt-4 flex items-center gap-1.5" aria-label={`Spice level: ${SPICE_LABEL[dish.spice]}`}>
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className={`text-xs ${i < dish.spice ? "text-terracotta" : "text-ink/15"}`}
                aria-hidden="true"
              >
                &#9670;
              </span>
            ))}
            <span className="ml-1 text-[11px] uppercase tracking-wide text-ink/45">
              {SPICE_LABEL[dish.spice]}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

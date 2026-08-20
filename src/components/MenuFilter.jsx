export default function MenuFilter({ categories, active, onChange, dietFilter, onDietChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex gap-2 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1"
        role="tablist"
        aria-label="Menu categories"
      >
        <button
          role="tab"
          aria-selected={active === "all"}
          onClick={() => onChange("all")}
          className={`shrink-0 px-5 py-2.5 text-sm uppercase tracking-wide border transition-colors duration-300 ${
            active === "all"
              ? "bg-terracotta border-terracotta text-ivory"
              : "border-ink/15 text-ink/70 hover:border-terracotta hover:text-terracotta"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => onChange(cat.id)}
            className={`shrink-0 px-5 py-2.5 text-sm uppercase tracking-wide border transition-colors duration-300 ${
              active === cat.id
                ? "bg-terracotta border-terracotta text-ivory"
                : "border-ink/15 text-ink/70 hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-wide text-ink/45">Show:</span>
        {["all", "veg", "non-veg"].map((opt) => (
          <button
            key={opt}
            onClick={() => onDietChange(opt)}
            className={`px-4 py-1.5 text-xs uppercase tracking-wide border rounded-full transition-colors duration-300 ${
              dietFilter === opt
                ? "border-forest text-forest bg-forest/5"
                : "border-ink/15 text-ink/55 hover:border-forest hover:text-forest"
            }`}
          >
            {opt === "all" ? "All Dishes" : opt === "veg" ? "Vegetarian" : "Non-Vegetarian"}
          </button>
        ))}
      </div>
    </div>
  );
}

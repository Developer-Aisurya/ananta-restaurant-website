export default function CuisineCard({ region, onSelect, active = false }) {
  return (
    <button
      onClick={() => onSelect(region.id)}
      data-reveal
      className={`group relative text-left overflow-hidden aspect-[3/4] w-full transition-all duration-500 ${
        active ? "ring-2 ring-gold" : ""
      }`}
    >
      <img
        src={region.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-end p-5">
        <span className="eyebrow text-[10px] text-gold-light mb-1">{region.title}</span>
        <h3 className="font-display text-2xl md:text-3xl text-ivory">{region.name}</h3>
      </div>
    </button>
  );
}

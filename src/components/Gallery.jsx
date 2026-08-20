import { useState } from "react";

export default function Gallery({ items }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="columns-1 xs:columns-2 lg:columns-3 gap-4 md:gap-5 [column-fill:_balance]">
        {items.map((item) => (
          <button
            key={item.id}
            data-reveal
            onClick={() => setActive(item)}
            className={`group relative block w-full mb-4 md:mb-5 overflow-hidden break-inside-avoid ${
              item.tall ? "aspect-[3/4]" : "aspect-[4/3]"
            }`}
          >
            <img
              src={item.image}
              alt={item.caption}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div className="text-left">
                <span className="eyebrow text-[10px] text-gold-light">{item.category}</span>
                <p className="text-ivory text-sm mt-1">{item.caption}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-ivory text-4xl leading-none"
            aria-label="Close image"
          >
            &times;
          </button>
          <figure className="max-w-4xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.image}
              alt={active.caption}
              className="max-h-[75vh] w-auto mx-auto object-contain"
            />
            <figcaption className="mt-4 text-center text-ivory/80 text-sm">
              <span className="eyebrow text-gold-light text-xs mr-2">{active.category}</span>
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

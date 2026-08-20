import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-display text-lg md:text-xl text-ink">{item.q}</span>
              <span
                className={`shrink-0 text-terracotta text-2xl leading-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              className="grid transition-all duration-400 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-ink/65 leading-relaxed max-w-xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

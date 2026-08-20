import { useEffect, useState } from "react";

export function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex flex-col items-center text-center max-w-2xl mx-auto px-4">
      <span className="font-accent italic text-gold text-6xl leading-none mb-2" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="font-display text-xl md:text-3xl text-ivory leading-snug text-balance">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6">
        <span className="block text-gold-light text-sm uppercase tracking-wide">{testimonial.name}</span>
        <span className="block text-ivory/50 text-xs mt-1">{testimonial.role}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className="relative">
      <div className="min-h-[220px] flex items-center justify-center">
        <TestimonialCard testimonial={testimonials[index]} />
      </div>
      <div className="flex items-center justify-center gap-2 mt-8" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-8 bg-gold" : "w-1.5 bg-ivory/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

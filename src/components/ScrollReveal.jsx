import { useRef } from "react";
import { gsap, ScrollTrigger, ensureGsap } from "../hooks/useGsap";
import { useEffect } from "react";

export default function ScrollReveal({
  children,
  className = "",
  as: Tag = "div",
  y = 32,
  duration = 1,
  stagger = 0.12,
  start = "top 85%",
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    ensureGsap();
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-reveal]");
    const list = targets.length ? Array.from(targets) : [el];

    gsap.set(list, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once,
      onEnter: () =>
        gsap.to(list, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
        }),
    });

    return () => trigger.kill();
  }, [y, duration, stagger, start, once]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

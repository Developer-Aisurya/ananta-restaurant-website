import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function ensureGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

export function useGsapContext(effect, deps = [], scope) {
  useEffect(() => {
    ensureGsap();
    const ctx = gsap.context(effect, scope?.current || undefined);
    return () => ctx.revert();
  }, deps);
}

export { gsap, ScrollTrigger };

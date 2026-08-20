import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap, ScrollTrigger, ensureGsap } from "../hooks/useGsap";

export default function PageTransition({ children }) {
  const location = useLocation();
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    ensureGsap();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });

    const tl = gsap.timeline();
    tl.set(overlayRef.current, { scaleY: 1, transformOrigin: "top" })
      .set(contentRef.current, { opacity: 0, y: 16 })
      .to(overlayRef.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.7,
        ease: "power4.inOut",
      })
      .to(
        contentRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35"
      )
      .add(() => ScrollTrigger.refresh());

    return () => tl.kill();
  }, [location.pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-ink pointer-events-none"
        aria-hidden="true"
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
}

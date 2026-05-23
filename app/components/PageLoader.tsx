"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function PageLoader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const monogram = monogramRef.current;
    const tagline = taglineRef.current;
    if (!overlay || !monogram || !tagline) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Monogram rises and lands
    tl.to(monogram, {
      opacity: 1,
      y: 0,
      duration: 0.9,
    });

    // Tagline fades in slightly after monogram
    tl.to(tagline, {
      opacity: 1,
      duration: 0.5,
    }, "-=0.4");

    // Curtain lifts
    tl.to(overlay, {
      yPercent: -101,
      duration: 0.85,
      ease: "power3.inOut",
      delay: 0.45,
      onComplete: () => {
        if (overlay) overlay.style.display = "none";
      },
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#C0614A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        pointerEvents: "none",
      }}
    >
      <div
        ref={monogramRef}
        style={{
          opacity: 0,
          transform: "translateY(48px)",
          color: "#F5EFE6",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        RL
      </div>
      <div
        ref={taglineRef}
        style={{
          opacity: 0,
          color: "rgba(245, 239, 230, 0.65)",
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Senior Web Platform Lead
      </div>
    </div>
  );
}

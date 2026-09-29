"use client";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
};

export default function Reveal({ children, className, delay = 0, y = 40, duration = 0.5 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      typeof window.matchMedia !== "function" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined" ||
      element.getBoundingClientRect().top <= window.innerHeight
    ) {
      return;
    }

    const transitionDuration = Math.min(0.6, Math.max(0.4, duration));
    element.style.setProperty("--reveal-delay", `${Math.max(0, delay)}s`);
    element.style.setProperty("--reveal-duration", `${transitionDuration}s`);
    element.style.setProperty("--reveal-y", `${y}px`);
    element.classList.add("reveal", "reveal-preparing", "reveal-hidden");
    element.getBoundingClientRect();
    element.classList.remove("reveal-preparing");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.classList.remove("reveal-hidden");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -60px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("reveal", "reveal-preparing", "reveal-hidden");
      element.style.removeProperty("--reveal-delay");
      element.style.removeProperty("--reveal-duration");
      element.style.removeProperty("--reveal-y");
    };
  }, [delay, duration, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

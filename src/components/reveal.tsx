"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal-on-view wrapper (DESIGN.md §A.12 — "bir kez oynar").
 *
 * Adds `data-reveal="shown"` once the element scrolls into view, then stops
 * observing (no re-trigger on scroll up/down). Children marked `.r-up` in CSS
 * rise + fade in. Progressive enhancement: the hidden state only applies while
 * `<html class="js">` is set (pre-paint inline script), so with no JS the
 * content is simply visible. Reduced-motion resolves to visible immediately.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // reduced-motion: skip the observer entirely — CSS forces .r-up visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} data-reveal={shown ? "shown" : "pending"}>
      {children}
    </div>
  );
}

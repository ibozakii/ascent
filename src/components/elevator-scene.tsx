"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { activeFloors } from "@/content/homepage";
import { useActiveFloor, useNearEnd } from "@/hooks/use-active-floor";
import { datumTopVh } from "@/lib/motion";

/**
 * Elevator scene — MOTION.md v2. The homepage signature visual.
 *
 * A large architectural elevator composition fixed to the right ~38% of the
 * viewport (desktop only, CSS-gated ≥1024px). As the page scrolls the cabin
 * ascends through three floors (Çözümler → Yaklaşım → İletişim), then the whole
 * scene fades out before the footer.
 *
 * Geometry is plain CSS (divs + hairlines); every moving part derives from one
 * custom property `--cabin-p` (0 = hero rest, 1 = final floor):
 *   cabin translateY, counterweight translateY (opposite), cable scaleY.
 *
 * Motion: GSAP ScrollTrigger scrubs `--cabin-p` per floor "leg" with an in/out
 * ease (heavy, mechanical) — no pinning, no snap, no scroll-jacking. Discrete
 * ScrollTriggers toggle the active datum + label + arrival accent.
 *
 * Reduced motion: no GSAP. The cabin is static (`--cabin-p: 0.5`); the active
 * floor + label + arrival still track the section via IntersectionObserver.
 */
export function ElevatorScene() {
  const floors = activeFloors();
  const count = floors.length;
  const sceneRef = useRef<HTMLDivElement>(null);

  const [reduced, setReduced] = useState(false);
  const [gsapIndex, setGsapIndex] = useState(-1); // -1 = hero / no floor yet

  // reduced-motion path only
  const rmFloor = useActiveFloor();
  const nearEnd = useNearEnd();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || reduced || count === 0) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    const secs = Array.from(
      document.querySelectorAll<HTMLElement>("[data-floor]"),
    );
    if (secs.length === 0) return;
    const footer = document.querySelector<HTMLElement>("[data-shaft-end]");
    const n = secs.length;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      secs.forEach((sec, i) => {
        // one leg per floor: scroll segment → cabin progress, eased at the ends
        gsap.fromTo(
          scene,
          { "--cabin-p": i / n },
          {
            "--cabin-p": (i + 1) / n,
            ease: "power2.inOut",
            overwrite: false,
            immediateRender: i === 0,
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              end: "top 42%",
              scrub: 1,
            },
          },
        );

        // discrete: this floor is "active" while it sits in the middle band
        ScrollTrigger.create({
          trigger: sec,
          start: "top 62%",
          end: "bottom 45%",
          onToggle: (self) => {
            if (self.isActive) setGsapIndex(i);
          },
        });
      });

      // back in the hero: cabin returns to rest, nothing active
      ScrollTrigger.create({
        trigger: secs[0],
        start: "top 88%",
        onToggle: (self) => {
          if (!self.isActive && self.direction === -1) setGsapIndex(-1);
        },
      });

      // leave before the footer is prominent
      if (footer) {
        gsap.to(scene, {
          autoAlpha: 0,
          y: "-4vh",
          ease: "power1.in",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "top 78%",
            scrub: true,
          },
        });
      }

      // fonts / hydration can shift section offsets
      ScrollTrigger.refresh();
      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad, { once: true });
    }, scene);

    return () => ctx.revert();
  }, [reduced, count]);

  const rmIndex =
    reduced && rmFloor ? floors.findIndex((f) => f.num === rmFloor.num) : -1;
  const idx = reduced ? rmIndex : gsapIndex;
  const active = idx >= 0;
  const arrived = active && idx === count - 1;
  const label = floors[idx] ?? floors[0];

  return (
    <div
      ref={sceneRef}
      className="elevator-scene"
      data-active={active ? "true" : "false"}
      data-arrived={arrived ? "true" : "false"}
      data-exiting={reduced && nearEnd ? "true" : "false"}
      data-reduced={reduced ? "true" : "false"}
      aria-hidden="true"
    >
      <div className="es-frame" />
      <div className="es-frame-in" />
      <div className="es-rail es-rail--l" />
      <div className="es-rail es-rail--r" />
      <div className="es-rail es-rail--cw" />
      <div className="es-rail es-rail--far" />

      <div className="es-sheave" />
      <div className="es-cable" />
      <div className="es-cw-cable" />
      <div className="es-counterweight" />

      {floors.map((f, i) => (
        <div
          key={f.id}
          className="es-datum"
          data-active={i === idx ? "true" : "false"}
          data-num={f.num}
          style={{ top: `${datumTopVh(i, count)}vh` }}
        />
      ))}

      <div className="es-cabin">
        <div className="es-cabin__roof" />
        <div className="es-cabin__body" />
        <div className="es-cabin__panel es-cabin__panel--l" />
        <div className="es-cabin__panel es-cabin__panel--r" />
        <div className="es-cabin__seam" />
        <div className="es-cabin__sill" />
        <div className="es-cabin__shoe es-cabin__shoe--l" />
        <div className="es-cabin__shoe es-cabin__shoe--r" />
        <div className="es-cabin__indicator" />
      </div>

      <p className="es-label">
        <span className="es-label__num">{label?.num}</span>
        <span className="es-label__name">{label?.label}</span>
      </p>
    </div>
  );
}

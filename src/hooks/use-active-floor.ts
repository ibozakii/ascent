"use client";

import { useEffect, useState } from "react";

export type ActiveFloor = {
  num: string;
  label: string;
  polarity: "light" | "dark";
};

/**
 * Scroll-elevator floor tracking (MOTION.md §3, §6).
 *
 * Watches elements marked `data-floor` / `data-floor-label` / `data-floor-polarity`
 * and reports whichever one currently crosses the viewport's middle band.
 * Drives the shaft cabin and the header polarity.
 *
 * Returns null only while ABOVE the first floor (the hero). On a fast scroll
 * that momentarily leaves every section outside the band, the last known floor
 * is HELD so the shaft doesn't flicker (MOTION.md §3, risk 6). The band is wide
 * (±35%) so adjacent tall sections overlap rather than leave a gap.
 */
export function useActiveFloor(): ActiveFloor | null {
  const [floor, setFloor] = useState<ActiveFloor | null>(null);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-floor]"),
    );
    if (els.length === 0) return;

    const intersecting = new Map<Element, boolean>();

    const resolve = () => {
      const active = els.find((el) => intersecting.get(el));
      if (active) {
        setFloor({
          num: active.dataset.floor ?? "",
          label: active.dataset.floorLabel ?? "",
          polarity: active.dataset.floorPolarity === "light" ? "light" : "dark",
        });
        return;
      }
      // Nothing in the band. Only clear to null if we're above the first floor
      // (in the hero); otherwise keep the last floor (fast-scroll flicker guard).
      const first = els[0].getBoundingClientRect();
      if (first.top > window.innerHeight * 0.5) setFloor(null);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target, entry.isIntersecting);
        }
        resolve();
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return floor;
}

/**
 * Polarity ("light" | "dark") of the section currently in the viewport's middle
 * band, read from `data-polarity`. Fallback for header polarity on pages with no
 * scroll-elevator floors (e.g. /cozumler). Defaults to "dark".
 */
export function useSectionPolarity(): "light" | "dark" {
  const [polarity, setPolarity] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-polarity]"),
    );
    if (els.length === 0) return;

    const intersecting = new Map<Element, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target, entry.isIntersecting);
        }
        const active = els.find((el) => intersecting.get(el));
        setPolarity(active?.dataset.polarity === "light" ? "light" : "dark");
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return polarity;
}

/**
 * True once the `[data-shaft-end]` element (the footer) starts entering the
 * viewport — the shaft leaves before the footer (DESIGN.md §A.9). Kept separate
 * from useActiveFloor so header polarity still tracks the section under the bar.
 */
export function useNearEnd(): boolean {
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = document.querySelector("[data-shaft-end]");
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setNear(entry.isIntersecting),
      { rootMargin: "0px 0px -28% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return near;
}

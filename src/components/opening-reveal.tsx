"use client";

import { useEffect } from "react";

/**
 * Opening light reveal — DESIGN.md §A.8.
 *
 * The markup is server-rendered so the dark surface covers the hero on the
 * very first paint. The animation self-completes in pure CSS, so if this
 * controller never runs (JS disabled / failed) the hero still becomes visible
 * and usable. The controller only refines:
 *   - skip on first user interaction
 *   - once per session (sessionStorage; a pre-paint inline script hides it on
 *     repeat loads before this even mounts)
 *   - remove from the layer when finished
 */
export function OpeningReveal() {
  useEffect(() => {
    const el = document.getElementById("opening");
    if (!el) return;

    const KEY = "ascent:opened";
    try {
      if (sessionStorage.getItem(KEY) === "1") {
        el.setAttribute("data-done", "");
        return;
      }
    } catch {
      /* storage unavailable — fall through to the timed path */
    }

    let done = false;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const total = reduce ? 240 : mobile ? 640 : 900;

    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;

    const cleanup = () => {
      window.clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, skip));
    };

    const finish = () => {
      if (done) return;
      done = true;
      el.setAttribute("data-done", "");
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
      cleanup();
    };

    const skip = () => {
      if (done) return;
      el.setAttribute("data-skip", "");
      window.setTimeout(finish, 180);
    };

    events.forEach((e) =>
      window.addEventListener(e, skip, { passive: true, once: true }),
    );
    const timer = window.setTimeout(finish, total);

    return cleanup;
  }, []);

  return (
    <div id="opening" aria-hidden="true">
      <div className="oh oh-l" />
      <div className="oh oh-r" />
      <div className="oseam" />
    </div>
  );
}

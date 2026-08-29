/**
 * Motion config (MOTION.md). Timings/easings live in CSS + the GSAP setup in
 * `elevator-scene.tsx`; this module holds only the shared geometry maths.
 */

/**
 * Cabin travel progress `--cabin-p` for floor `i` of `count` floors
 * (0 = hero rest, 1 = final floor). Evenly spaced.
 */
export function floorProgress(i: number, count: number): number {
  return count <= 0 ? 0 : (i + 1) / count;
}

/**
 * Vertical centre of a floor's datum line, in vh, matching the cabin transform
 * in globals.css:  --cabin-y: calc((80 - --cabin-p * 56) * 1vh)
 */
export function datumTopVh(i: number, count: number): number {
  return 80 - floorProgress(i, count) * 56;
}

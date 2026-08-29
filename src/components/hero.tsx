import Link from "next/link";
import { hero, primaryCta, secondaryCta } from "@/content/site";
import { Chevron } from "@/components/chevron";

/**
 * Hero — DESIGN.md §A.4 (typography), §A.5 (grid), §A.6 (image-absent),
 * §A.2 (tonal depth). Dark room.
 *
 * Copy comes from the content layer with STATUS "DRAFT" — neutral demo text,
 * no company claim; real slogan / lede / imagery are TBD (CONTENT.md §4.1).
 * The placeholder status lives in source, not in the visible composition.
 *
 * Right side: an empty grid column that reserves space for the fixed
 * <ElevatorScene> (MOTION.md v2) — the scene draws the architectural elevator
 * over this area. Desktop-only.
 *
 * Motion reference only (Cinematic Landing Hero + Text Reveal): a low-distance
 * rise on the title lines after the opening. CSS-only (globals.css), disabled
 * under prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section className="hero room-dark" data-nav-polarity="dark">
      <div className="hero__grid shell">
        <div className="hero__body">
          <h1 className="hero__title">
            {hero.titleLines.map((line, i) => (
              <span
                key={i}
                className={`l ${line.tone === "soft" ? "l--soft" : "l--strong"}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="hero__lede">{hero.lede}</p>

          <div className="hero__actions">
            <Link className="btn btn--primary" href={primaryCta.href}>
              {primaryCta.label}
            </Link>
            <a className="link-more" href={secondaryCta.href}>
              <span className="link-more__label">{secondaryCta.label}</span>
              <Chevron dir="down" className="link-more__chevron" />
            </a>
          </div>
        </div>

        <div className="hero__aside" aria-hidden="true" />
      </div>
    </section>
  );
}

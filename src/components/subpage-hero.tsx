import Link from "next/link";
import { routes } from "@/content/site";

/**
 * Subpage hero — compact header for section overview pages (DESIGN.md §A.4/§A.5).
 *
 * Same design system as the homepage hero, different character: shorter, a
 * small breadcrumb, one strong heading, a short intro, generous negative space,
 * and a restrained decorative abstraction (desktop only). No stock image, no
 * generic corporate page header.
 *
 * `polarity` + `figure` let each subpage carry its own character without a new
 * component: "section" = a building-section composition (/cozumler),
 * "scale" = a fine measurement / inspection-rhythm rule (/servisler).
 */
export function SubpageHero({
  crumb,
  heading,
  intro,
  polarity = "light",
  figure = "section",
}: {
  crumb: string;
  heading: string;
  intro: string;
  polarity?: "light" | "dark";
  figure?: "section" | "scale";
}) {
  return (
    <section
      className={`subhero room-${polarity}`}
      data-polarity={polarity}
    >
      <div className="subhero__grid shell">
        <div className="subhero__body">
          <nav className="subhero__crumb" aria-label="Site konumu">
            <Link href={routes.home}>Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{crumb}</span>
          </nav>

          <h1 className="subhero__heading">{heading}</h1>
          <p className="subhero__intro">{intro}</p>
        </div>

        <div className="subhero__aside" aria-hidden="true">
          {figure === "scale" ? (
            <div className="subhero__figure subhero__figure--scale">
              <div className="scl-datum" />
              <div className="scl-axis" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <span className="scl-tick" />
              <div className="scl-mark" />
            </div>
          ) : (
            <div className="subhero__figure">
              <div className="shf-void" />
              <span className="shf-level shf-level--1" />
              <span className="shf-level shf-level--2" />
              <span className="shf-level shf-level--3" />
              <div className="shf-rail" />
              <div className="shf-slab" />
              <span className="shf-node" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

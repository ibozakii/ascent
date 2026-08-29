import Link from "next/link";
import { approach } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";
import type { Floor } from "@/content/homepage";

/**
 * SECTION 03 — Ascent Yaklaşımı.
 *
 * One strong editorial statement + 2–3 short principles + a link onward. Dark
 * room, typography-led, generous negative space. Builds new-firm trust without
 * statistics. No long process timeline (that is kept for a future /surec page).
 * Content is DRAFT — approach framing only, from the content layer.
 */
export function ApproachSection({ floor }: { floor?: Floor }) {
  return (
    <section
      id="yaklasim"
      className="appr room-dark"
      data-floor={floor?.num}
      data-floor-label={floor?.label}
      data-floor-polarity="dark"
    >
      <Reveal className="appr__inner shell">
        <p className="sec-index r-up">
          {floor ? <span className="sec-index__num">{floor.num}</span> : null}
          <span className="sec-index__label">{approach.index}</span>
        </p>

        <h2 className="appr__statement r-up">{approach.statement}</h2>

        <ul className="appr__principles r-up">
          {approach.principles.map((p) => (
            <li key={p} className="appr__principle">
              {p}
            </li>
          ))}
        </ul>

        <Link className="link-more r-up appr__link" href={approach.link.href}>
          <span className="link-more__label">{approach.link.label}</span>
          <Chevron dir="right" className="link-more__chevron" />
        </Link>
      </Reveal>
    </section>
  );
}

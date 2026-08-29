import Link from "next/link";
import { verifiedProjects } from "@/content/projects";
import { routes } from "@/content/site";
import { byOrder } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";
import type { Floor } from "@/content/homepage";

/**
 * SECTION 04 — Projeler (conditional).
 *
 * Renders only when there is at least one VERIFIED, enabled project
 * (see content/projects.ts). Otherwise returns null and the section, its scroll
 * floor and its nav item all disappear. Never shows a fake project or an empty
 * placeholder (PRODUCT.md §4.4, CONTENT.md §4.4).
 *
 * Minimal presentational shell for now — real Projects UI comes with real data.
 */
export function ProjectsSection({ floor }: { floor?: Floor }) {
  const items = [...verifiedProjects].sort(byOrder).slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section
      id="projeler"
      className="proj room-dark"
      data-floor={floor?.num}
      data-floor-label={floor?.label}
      data-floor-polarity="dark"
    >
      <Reveal className="proj__inner shell">
        <div className="proj__head r-up">
          <p className="sec-index">
            {floor ? <span className="sec-index__num">{floor.num}</span> : null}
            <span className="sec-index__label">Projeler</span>
          </p>
          <h2 className="proj__heading">Seçili projeler</h2>
        </div>

        <ul className="proj__list">
          {items.map((p) => (
            <li key={p.id} className="proj__item r-up">
              <p className="proj__item-title">{p.title}</p>
              <p className="proj__item-meta">
                {[p.location, p.buildingType, p.year]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <p className="proj__item-scope">{p.scope}</p>
            </li>
          ))}
        </ul>

        <Link className="link-more r-up" href={routes.projects}>
          <span className="link-more__label">Tüm projeler</span>
          <Chevron dir="right" className="link-more__chevron" />
        </Link>
      </Reveal>
    </section>
  );
}

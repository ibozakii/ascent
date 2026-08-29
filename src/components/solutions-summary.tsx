import Link from "next/link";
import { offerings } from "@/content/site";
import { byOrder, visible } from "@/content/types";
import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";
import type { Floor } from "@/content/homepage";

/**
 * SECTION 02 — Çözümler / Ne Yapıyoruz özeti.
 *
 * Short premium summary: a large plain title + 3–4 top-level areas, each a big
 * editorial row linking to its overview page. No cards, no icons. Light room.
 * Content is 100% from `offerings` in the content layer — add / remove /
 * reorder there without touching this file.
 */
export function SolutionsSummary({ floor }: { floor?: Floor }) {
  const items = [...offerings.items].filter(visible).sort(byOrder);

  return (
    <section
      id="cozumler"
      className="offer room-light"
      data-floor={floor?.num}
      data-floor-label={floor?.label}
      data-floor-polarity="light"
    >
      <Reveal className="offer__inner shell">
        <div className="offer__head r-up">
          <p className="sec-index">
            {floor ? <span className="sec-index__num">{floor.num}</span> : null}
            <span className="sec-index__label">{offerings.index}</span>
          </p>
          <h2 className="offer__heading">{offerings.heading}</h2>
        </div>

        <ul className="offer__list">
          {items.map((item) => (
            <li key={item.id} className="offer__item r-up">
              <Link className="offer__link" href={item.href}>
                <span className="offer__item-title">{item.title}</span>
                <span className="offer__item-desc">{item.description}</span>
                <Chevron dir="right" className="offer__item-chevron" />
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";

/**
 * SectionCapabilities — reusable typography-led service list (light room).
 *
 * Used on /servisler. Fully presentational + data-driven: renders whatever
 * `rows` it is given, from 1 to N. `row.href` is optional — omit it and no
 * per-item link renders (used while detail routes do not exist yet).
 * Visual language unchanged (DESIGN.md §A.4 / §A.10).
 */
export type CapabilityRow = {
  id: string;
  title: string;
  description: string;
  /** detail route — omit to render the row without a link */
  href?: string;
};

export function SectionCapabilities({
  id,
  index,
  label,
  heading,
  note,
  rows,
}: {
  id?: string;
  index?: string;
  label: string;
  heading: string;
  note?: string;
  rows: readonly CapabilityRow[];
}) {
  return (
    <section id={id} className="cap room-light" data-polarity="light">
      <Reveal className="cap__inner shell">
        <div className="cap__head r-up">
          <p className="sec-index">
            {index ? <span className="sec-index__num">{index}</span> : null}
            <span className="sec-index__label">{label}</span>
          </p>
          <h2 className="cap__heading">{heading}</h2>
          {note ? <p className="cap__note">{note}</p> : null}
        </div>

        <ul className="cap__list">
          {rows.map((row) => (
            <li key={row.id} className="cap__row r-up">
              <h3 className="cap__row-title">{row.title}</h3>
              <p className="cap__row-body">{row.description}</p>
              {row.href ? (
                <a className="cap__row-link link-more" href={row.href}>
                  <span className="link-more__label">Detay</span>
                  <Chevron dir="down" className="link-more__chevron" />
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

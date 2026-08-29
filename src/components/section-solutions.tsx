import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";

/**
 * SectionSolutions — reusable full-bleed editorial slab list (dark room).
 *
 * Used on /cozumler. Fully presentational + data-driven: renders whatever
 * `rows` it is given, from 1 to N. Each panel = abstract tonal composition
 * (one of three figure variants, cycled) + title + description, sides
 * alternating. `row.href` is optional — omit it and no per-item link renders
 * (used while detail routes do not exist yet). No stock imagery.
 * DESIGN.md §A.6 / §A.10.
 */
export type SolutionRow = {
  id: string;
  title: string;
  description: string;
  /** detail route — omit to render the panel without a link */
  href?: string;
  figure: "shaft" | "strata" | "frame";
};

function PanelFigure({ variant }: { variant: SolutionRow["figure"] }) {
  // strata — horizontal floor rhythm: a stack of plates sliced by the shaft
  if (variant === "strata") {
    return (
      <div className="pf pf--strata" aria-hidden="true">
        <div className="pf-well" />
        <span className="pf-plate pf-plate--1" />
        <span className="pf-plate pf-plate--2" />
        <span className="pf-plate pf-plate--3" />
        <span className="pf-plate pf-plate--4" />
        <span className="pf-plate pf-plate--5" />
        <div className="pf-cut" />
      </div>
    );
  }
  // frame — an open structural frame with cross members and a node
  if (variant === "frame") {
    return (
      <div className="pf pf--frame" aria-hidden="true">
        <div className="pf-well" />
        <div className="pf-frame" />
        <span className="pf-member pf-member--h" />
        <span className="pf-member pf-member--v" />
        <span className="pf-node" />
      </div>
    );
  }
  // shaft — a strong vertical structural pier beside a recessed void
  return (
    <div className="pf pf--shaft" aria-hidden="true">
      <div className="pf-well" />
      <div className="pf-recess" />
      <span className="pf-rung pf-rung--1" />
      <span className="pf-rung pf-rung--2" />
      <span className="pf-rung pf-rung--3" />
      <span className="pf-rung pf-rung--4" />
      <div className="pf-pier" />
      <div className="pf-edge" />
    </div>
  );
}

export function SectionSolutions({
  id,
  index,
  label,
  heading,
  intro,
  rows,
  band,
}: {
  id?: string;
  index?: string;
  label: string;
  heading: string;
  intro: string;
  rows: readonly SolutionRow[];
  band?: { label: string; items: readonly string[] };
}) {
  return (
    <section id={id} className="sol room-dark" data-polarity="dark">
      <Reveal className="sol__head shell">
        <div className="r-up">
          <p className="sec-index">
            {index ? <span className="sec-index__num">{index}</span> : null}
            <span className="sec-index__label">{label}</span>
          </p>
          <h2 className="sol__heading">{heading}</h2>
          <p className="sol__intro">{intro}</p>
        </div>
      </Reveal>

      <div className="sol__list">
        {rows.map((row, i) => (
          <Reveal key={row.id} className="sol__panel-wrap">
            <article className="sol__panel r-up" data-flip={i % 2 === 1}>
              <div className="sol__panel-figure">
                <PanelFigure variant={row.figure} />
              </div>
              <div className="sol__panel-body">
                <h3 className="sol__panel-title">{row.title}</h3>
                <p className="sol__panel-text">{row.description}</p>
                {row.href ? (
                  <a className="link-more" href={row.href}>
                    <span className="link-more__label">Detay</span>
                    <Chevron dir="down" className="link-more__chevron" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {band && band.items.length > 0 ? (
        <Reveal className="sol__band shell">
          <div className="r-up sol__band-inner">
            <p className="sol__band-label">{band.label}</p>
            <ul className="sol__band-list">
              {band.items.map((t) => (
                <li key={t} className="sol__band-item">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}

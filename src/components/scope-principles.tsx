import { Reveal } from "@/components/reveal";

/**
 * Scope principles — "kapsam prensipleri" (light room).
 *
 * A calm definition-style list: a short principle label + one line, hairline
 * separated. Not "what's in the maintenance package" — a neutral framework
 * that survives until the real contract terms arrive (CONTENT.md §4.3).
 * Data-driven; renders nothing when `principles` is empty.
 */
export function ScopePrinciples({
  index,
  label,
  heading,
  principles,
}: {
  index?: string;
  label: string;
  heading: string;
  principles: readonly { id: string; label: string; text: string }[];
}) {
  if (principles.length === 0) return null;

  return (
    <section className="scope room-light" data-polarity="light">
      <Reveal className="scope__inner shell">
        <div className="scope__head r-up">
          <p className="sec-index">
            {index ? <span className="sec-index__num">{index}</span> : null}
            <span className="sec-index__label">{label}</span>
          </p>
          <h2 className="scope__heading">{heading}</h2>
        </div>

        <dl className="scope__list">
          {principles.map((p) => (
            <div key={p.id} className="scope__item r-up">
              <dt className="scope__item-label">{p.label}</dt>
              <dd className="scope__item-text">{p.text}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}

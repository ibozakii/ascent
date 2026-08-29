import { Reveal } from "@/components/reveal";

/**
 * Selection guide — short editorial section (light room).
 *
 * Generic industry guidance on how a vertical-transport system is chosen, not
 * a claim about Ascent's process or capabilities (PRODUCT.md §6.6–6.7). A few
 * one-line factors, hairline-separated (same pattern as the homepage approach
 * principles). Content is DRAFT, from the content layer.
 */
export function SelectionGuide({
  index,
  label,
  heading,
  points,
  closing,
}: {
  index?: string;
  label: string;
  heading: string;
  points: readonly string[];
  closing: string;
}) {
  return (
    <section className="guide room-light" data-polarity="light">
      <Reveal className="guide__inner shell">
        <div className="guide__head r-up">
          <p className="sec-index">
            {index ? <span className="sec-index__num">{index}</span> : null}
            <span className="sec-index__label">{label}</span>
          </p>
          <h2 className="guide__heading">{heading}</h2>
        </div>

        <ol className="guide__list r-up">
          {points.map((point, i) => (
            <li key={i} className="guide__item">
              <span className="guide__item-idx">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="guide__item-body">{point}</span>
            </li>
          ))}
        </ol>

        <p className="guide__closing r-up">{closing}</p>
      </Reveal>
    </section>
  );
}

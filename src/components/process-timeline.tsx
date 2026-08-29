import { Reveal } from "@/components/reveal";

/**
 * Process timeline — "nasıl çalışır" (dark room).
 *
 * A vertical, line-driven step list: a connector rail with a mono index per
 * step. Not a card grid, not a "3-step SaaS block" — an editorial technical
 * rhythm. Data-driven; renders nothing when `steps` is empty. Content is
 * DRAFT (CONTENT.md §4.3) — the framework of a request, not a claimed SLA.
 */
export function ProcessTimeline({
  index,
  label,
  heading,
  intro,
  steps,
}: {
  index?: string;
  label: string;
  heading: string;
  intro: string;
  steps: readonly { id: string; title: string; text: string }[];
}) {
  if (steps.length === 0) return null;

  return (
    <section className="process room-dark" data-polarity="dark">
      <Reveal className="process__inner shell">
        <div className="process__head r-up">
          <p className="sec-index">
            {index ? <span className="sec-index__num">{index}</span> : null}
            <span className="sec-index__label">{label}</span>
          </p>
          <h2 className="process__heading">{heading}</h2>
          <p className="process__intro">{intro}</p>
        </div>

        <ol className="process__steps">
          {steps.map((step, i) => (
            <li key={step.id} className="process__step r-up">
              <span className="process__step-idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="process__step-body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

import Link from "next/link";
import { closing, primaryCta, routes } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Chevron } from "@/components/chevron";
import type { Floor } from "@/content/homepage";

/**
 * Closing CTA — reusable minimal conversion band.
 *
 * One heading + one sentence + the primary conversion. NOT the full contact
 * form (that needs verified info + KVKK text — CONTENT.md §4.7, §8).
 *
 * On the homepage: `floor` is passed, `polarity` defaults to "light" (a bright
 * band between the dark approach section and the dark footer). On a sub-page:
 * no `floor`, `polarity="dark"` for a strong deep close before the footer.
 */
export function ClosingCta({
  floor,
  polarity = "light",
  heading,
  text,
}: {
  floor?: Floor;
  polarity?: "light" | "dark";
  heading?: string;
  text?: string;
}) {
  return (
    <section
      id="iletisim"
      className={`close room-${polarity}`}
      data-polarity={polarity}
      data-floor={floor?.num}
      data-floor-label={floor?.label}
      data-floor-polarity={polarity}
    >
      <Reveal className="close__inner shell">
        <p className="sec-index r-up">
          {floor ? <span className="sec-index__num">{floor.num}</span> : null}
          <span className="sec-index__label">{closing.index}</span>
        </p>
        <h2 className="close__heading r-up">{heading ?? closing.heading}</h2>
        <p className="close__text r-up">{text ?? closing.text}</p>
        <div className="close__actions r-up">
          <Link className="btn btn--primary" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
          <Link className="link-more" href={routes.contact}>
            <span className="link-more__label">{closing.secondaryLabel}</span>
            <Chevron dir="right" className="link-more__chevron" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

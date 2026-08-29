import Link from "next/link";
import { enabledNavItems, footer } from "@/content/site";
import { Wordmark } from "@/components/brand/wordmark";

/**
 * SECTION 06 — Footer. Minimal: wordmark, data-driven quick links, copyright.
 * Deepest tone (DESIGN.md §A.3). Legal links appear only once their pages
 * exist (CONTENT.md §8) — nothing placeholder is published.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const legal = footer.legalItems.flatMap((l) =>
    l.href ? [{ label: l.label, href: l.href }] : [],
  );

  return (
    <footer className="site-footer room-dark" data-shaft-end>
      <div className="site-footer__inner shell">
        <p className="site-footer__brand">
          <Wordmark className="site-footer__wordmark" />
          <span className="site-footer__tagline">{footer.tagline}</span>
        </p>

        <nav className="site-footer__nav" aria-label="Alt menü">
          {enabledNavItems.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="site-footer__legal">
          <span>
            © {year} {footer.copyrightName}
          </span>
          {legal.length > 0 ? (
            <span className="site-footer__legal-links">
              {legal.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </span>
          ) : null}
        </p>
      </div>
    </footer>
  );
}

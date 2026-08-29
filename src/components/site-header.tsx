"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { enabledNavItems, primaryCta, routes, wordmark } from "@/content/site";
import { Wordmark } from "@/components/brand/wordmark";
import { useActiveFloor, useSectionPolarity } from "@/hooks/use-active-floor";

/**
 * Persistent navigation — DESIGN.md §A.7. Data-driven: the link list is
 * `enabledNavItems` from the content layer, so adding / removing a top-level
 * category (or disabling "Projeler") is a one-line config change.
 *
 * Behaviour reference only (21st.dev LumaBar / Mini Navbar). Polarity adapts
 * to the section under the bar (DESIGN.md §A.7): dark over the hero and dark
 * sections, light over light sections. Token-driven, so the CTA stays the
 * highest-contrast element in either polarity.
 */
export function SiteHeader() {
  const [pinned, setPinned] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // active scroll-elevator floor: drives the mobile indicator + header polarity.
  // On pages with no floors (sub-pages), fall back to the section polarity.
  const floor = useActiveFloor();
  const sectionPolarity = useSectionPolarity();
  const polarity = floor?.polarity ?? sectionPolarity;

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header
      className={`site-header room-${polarity}`}
      data-state={pinned ? "pinned" : "top"}
    >
      <div className="site-header__bar shell">
        <Link
          className="wordmark"
          href={routes.home}
          aria-label={`${wordmark} — ana sayfa`}
        >
          <Wordmark />
        </Link>

        <nav className="site-nav" aria-label="Ana menü">
          <ul className="site-nav__list">
            {enabledNavItems.map((item) => (
              <li key={item.id}>
                <Link className="site-nav__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <span className="site-header__rule" aria-hidden="true" />
          <span
            className="floor-slot"
            data-active={floor ? "true" : "false"}
            aria-hidden="true"
          >
            {floor ? (
              <span className="floor-slot__content" key={floor.num}>
                <span className="floor-slot__num">{floor.num}</span>
                <span className="floor-slot__label">{floor.label}</span>
              </span>
            ) : null}
          </span>
          <Link
            className="btn btn--primary btn--compact"
            href={primaryCta.href}
          >
            {primaryCta.label}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__glyph" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`menu-panel room-${polarity}`}
        data-open={menuOpen}
        inert={!menuOpen}
      >
        {enabledNavItems.map((item) => (
          <Link
            key={item.id}
            className="menu-panel__link"
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="btn btn--primary menu-panel__cta"
          href={primaryCta.href}
          onClick={closeMenu}
        >
          {primaryCta.label}
        </Link>
      </div>
    </header>
  );
}

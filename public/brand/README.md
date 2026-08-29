# Ascent Elevator — brand assets

Single source for logo + brand marks. Components read from
`src/content/brand.ts` and `src/components/brand/`; never hard-code an asset path
elsewhere (DESIGN.md §A.14).

## What's here

| File | Type | Status | Notes |
|---|---|---|---|
| `ascent-logo.pdf` | vector (CorelDRAW export) | **source of truth** | Full lockup: circular badge (ascending mark) + `ASCENT ELEVATOR` wordmark. Mark = CMYK 0/0/0/80 (füme grey). Wordmark = CMYK 0/100/100/0 ≈ `#ED1C24`. Not web-optimised. |

## TODO — asset production (needs client vector source)

A clean symbol / wordmark split can NOT be reliably auto-extracted from the PDF
in this environment (Corel export, no vector tooling). Do **not** hand-trace or
redesign the mark. Request the original vector (`.ai` / `.cdr` / clean `.svg`)
from the client, then produce:

```
public/brand/
  ascent-symbol.svg          # badge / ascending mark only, currentColor-able
  ascent-symbol-mono.svg     # single-colour (for tight/adverse contexts)
  ascent-wordmark.svg        # "ASCENT ELEVATOR" type only
  ascent-lockup.svg          # full lockup, default
  ascent-lockup-inverse.svg  # for dark surfaces (light mark)
  og.png                     # 1200×630 share image
src/app/
  icon.svg                   # favicon (Next metadata file convention)
  apple-icon.png             # 180×180
```

Naming: `ascent-<part>[-<variant>].<ext>`. Variants: `mono`, `inverse`.

## Rules

- Keep vector; no gratuitous rasterisation; never distort the aspect ratio.
- Red is a signature accent, never a region fill (MOTION.md §4, DESIGN.md §A.2).
- Confirm the exact wordmark red hex from the vector source and reconcile with
  `--brand-red` / `--accent-*` in `src/app/globals.css`.
- Until real assets land, the UI uses the text wordmark placeholder
  (`src/components/brand/wordmark.tsx`).

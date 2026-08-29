import { wordmark } from "@/content/brand";

/**
 * Wordmark — the single render point for the brand name (DESIGN.md §A.14).
 *
 * Placeholder: plain text. When real logo assets land (public/brand/README.md)
 * this component swaps to the SVG wordmark / lockup — callers and their CSS
 * classes stay unchanged.
 */
export function Wordmark({ className }: { className?: string }) {
  return <span className={className}>{wordmark}</span>;
}

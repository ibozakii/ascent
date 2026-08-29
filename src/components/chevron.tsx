/** Shared inline chevron — one stroke weight, drawn (not an emoji/glyph). */
export function Chevron({
  dir = "down",
  className,
}: {
  dir?: "down" | "right";
  className?: string;
}) {
  const d = dir === "right" ? "M5 3l3.5 3.5L5 10" : "M3 5l3.5 3.5L10 5";
  return (
    <svg
      className={className}
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="square"
      />
    </svg>
  );
}

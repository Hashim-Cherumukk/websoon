"use client";

// Monoline magnifying glass — editorial blueprint style.
// Uses currentColor so parent CSS controls the ink colour.
export default function ProcessDiscoverSvg() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-14 w-14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer lens circle */}
      <circle cx="31" cy="31" r="19" strokeWidth="1.5" />

      {/* Handle */}
      <line x1="44.5" y1="44.5" x2="58" y2="58" strokeWidth="1.5" />

      {/* Inner content lines — suggest a document being inspected */}
      <line x1="23" y1="27" x2="39" y2="27" strokeWidth="1" opacity="0.7" />
      <line x1="23" y1="31" x2="36" y2="31" strokeWidth="1" opacity="0.7" />
      <line x1="23" y1="35" x2="34" y2="35" strokeWidth="1" opacity="0.7" />

      {/* Small crosshair centre dot */}
      <circle cx="31" cy="31" r="2" strokeWidth="1.2" />
    </svg>
  );
}

"use client";

// Monoline code brackets — editorial blueprint style.
// Uses currentColor so parent CSS controls the ink colour.
export default function ProcessDevelopSvg() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-14 w-14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left angle bracket  < */}
      <polyline points="22,21 11,36 22,51" strokeWidth="1.5" />

      {/* Right angle bracket  > */}
      <polyline points="50,21 61,36 50,51" strokeWidth="1.5" />

      {/* Code lines inside brackets */}
      <line x1="27" y1="28" x2="45" y2="28" strokeWidth="1" opacity="0.6" />
      <line x1="27" y1="33" x2="41" y2="33" strokeWidth="1" opacity="0.6" />
      <line x1="27" y1="38" x2="44" y2="38" strokeWidth="1" opacity="0.6" />
      <line x1="27" y1="43" x2="38" y2="43" strokeWidth="1" opacity="0.6" />

      {/* Cursor blink line */}
      <line x1="40" y1="43" x2="43" y2="43" strokeWidth="1.5" />
    </svg>
  );
}

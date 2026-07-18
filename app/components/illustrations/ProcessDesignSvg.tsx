"use client";

// Monoline wireframe layout canvas — editorial blueprint style.
// Uses currentColor so parent CSS controls the ink colour.
export default function ProcessDesignSvg() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-14 w-14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Outer canvas */}
      <rect x="10" y="12" width="52" height="48" rx="4" strokeWidth="1.5" />

      {/* Top header bar */}
      <rect x="10" y="12" width="52" height="10" rx="4" strokeWidth="1" opacity="0.5" />

      {/* Sidebar column */}
      <line x1="28" y1="22" x2="28" y2="60" strokeWidth="1" opacity="0.5" />

      {/* Content rows — right pane */}
      <line x1="33" y1="31" x2="57" y2="31" strokeWidth="1" opacity="0.7" />
      <line x1="33" y1="37" x2="52" y2="37" strokeWidth="1" opacity="0.7" />
      <line x1="33" y1="43" x2="55" y2="43" strokeWidth="1" opacity="0.7" />
      <line x1="33" y1="49" x2="49" y2="49" strokeWidth="1" opacity="0.7" />

      {/* Pen nib — bottom-left corner accent */}
      <polyline points="13,56 13,60 17,60" strokeWidth="1.5" />
    </svg>
  );
}

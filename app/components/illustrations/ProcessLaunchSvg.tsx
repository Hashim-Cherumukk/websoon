"use client";

// Monoline arc trajectory / launch — editorial blueprint style.
// Uses currentColor so parent CSS controls the ink colour.
export default function ProcessLaunchSvg() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-14 w-14"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main trajectory arc — bottom-left to top-right */}
      <path
        d="M14 58 C 22 38, 44 28, 58 14"
        strokeWidth="1.5"
      />

      {/* Origin point */}
      <circle cx="14" cy="58" r="3" strokeWidth="1.5" />

      {/* Destination point — slightly larger */}
      <circle cx="58" cy="14" r="4.5" strokeWidth="1.5" />

      {/* Small directional tick marks along the arc */}
      <line x1="29" y1="42" x2="33" y2="38" strokeWidth="1" opacity="0.6" />
      <line x1="42" y1="29" x2="46" y2="25" strokeWidth="1" opacity="0.6" />

      {/* Subtle perpendicular check marks at destination */}
      <line x1="53" y1="10" x2="56" y2="13" strokeWidth="1" opacity="0.5" />
      <line x1="59" y1="15" x2="63" y2="12" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

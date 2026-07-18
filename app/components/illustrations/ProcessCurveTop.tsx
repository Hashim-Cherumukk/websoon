"use client";

export default function ProcessCurveTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[96px]"
      >
        {/* Fills the very top with dark brand colour, curving down in the centre */}
        <path d="M0,0 L1440,0 L1440,82 Q720,0 0,82 Z" fill="#EEF3FA" />
      </svg>
    </div>
  );
}

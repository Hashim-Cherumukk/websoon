"use client";

export default function WorkspaceBackground() {
  return (
    <>
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-200/30 blur-[130px]" />

      {/* Left */}

      <div className="absolute left-[-160px] top-[35%] h-[320px] w-[320px] rounded-full bg-cyan-100/50 blur-[120px]" />

      {/* Right */}

      <div className="absolute right-[-180px] bottom-[20%] h-[340px] w-[340px] rounded-full bg-blue-100/40 blur-[120px]" />
    </>
  );
}
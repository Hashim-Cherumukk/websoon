"use client";

const tickerItems = [
  "Web Development",
  "UI / UX Design",
  "Custom Web Apps",
  "Digital Solutions",
  "Performance Optimization",
  "Scalable Systems",
];

export default function Marquee() {
  const contentSet = (
    <div className="flex items-center">
      {tickerItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <h2 className="text-3xl font-light tracking-wide text-brand-dark sm:text-4xl md:text-[40px] whitespace-nowrap">
            {item}
          </h2>
          <span className="mx-8 text-3xl font-light text-slate-300">|</span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="relative z-20 w-full overflow-hidden bg-white"
      style={{
        marginTop: "-4vh",
        borderTopLeftRadius: "50vw 80px",
        borderTopRightRadius: "50vw 80px",
        boxShadow: "0px -20px 40px rgba(0, 0, 0, 0.08), 0px -8px 16px rgba(0, 0, 0, 0.05)",
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div
        className="flex h-[22vh] min-h-[140px] w-full items-center overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="marquee-track">
          {contentSet}
          {contentSet}
        </div>
      </div>
    </section>
  );
}
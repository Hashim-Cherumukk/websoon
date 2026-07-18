

export default function WaveDivider({ className = "text-brand-dark" }: { className?: string }) {
  return (
    <div className="relative -mb-px w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="block h-[20px] w-full md:h-[32px]"
      >
        <path
          d={path1}
          fill="currentColor"
          className={className}
        />
      </svg>
    </div>
  );
}

const path1 = "M0,60 Q720,0 1440,60 L1440,100 L0,100 Z";
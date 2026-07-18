import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  // The base structure with overflow-hidden is required to clip the water wave
  const baseClasses = `
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-full font-semibold transition-all duration-300
    ${sizeClasses[size]}
    ${variant === "secondary" ? "border border-slate-200 bg-white text-brand-dark" : "bg-brand-dark text-white"}
    ${className}
  `;

  // The geometric "water wave" element that rises on hover
  const waterWave = variant === "primary" && (
    <div className="absolute left-1/2 top-[110%] h-[200%] w-[150%] -translate-x-1/2 rounded-[50%] bg-brand-blue transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:top-[-50%]" />
  );

  const innerContent = (
    <>
      {waterWave}
      {/* z-10 keeps the text above the water wave */}
      <span className="relative z-10 flex items-center">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {innerContent}
    </button>
  );
}
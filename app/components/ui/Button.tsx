import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  const classes = `
inline-flex items-center justify-center
rounded-xl
${sizeClasses[size]}
font-medium
transition-all
duration-300
${
  variant === "primary"
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900"
}
${className}
`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
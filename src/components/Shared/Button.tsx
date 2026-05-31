import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  to?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-lift hover:-translate-y-0.5 hover:bg-[#0f2fd0]",
  secondary: "bg-brandSoft text-ink hover:-translate-y-0.5 hover:bg-[#cdd7ff]",
  ghost:
    "border border-border bg-white text-ink hover:-translate-y-0.5 hover:border-brand hover:text-brand",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  href,
  ...rest
}: ButtonProps) {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

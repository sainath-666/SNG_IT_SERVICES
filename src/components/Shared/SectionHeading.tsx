import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  children?: ReactNode;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  children,
  as = "h2",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = light ? "text-white" : "text-ink";
  const descriptionColor = light ? "text-white/72" : "text-muted";
  const HeadingTag = as;

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-brand">
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag
        className={`font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p className={`text-base leading-7 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}

import React from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }: Props) {
  const alignClass = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";
  return (
    <div className={`mb-8 ${alignClass}`}>
      {eyebrow && (
        <div className="uppercase tracking-wider text-xs font-semibold text-gray-500 dark:text-gray-400">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold">{title}</h2>
      {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
    </div>
  );
}

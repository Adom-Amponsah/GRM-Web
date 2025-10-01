import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" };

export default function CTAButton({ className = "", variant = "primary", ...props }: Props) {
  const styles = {
    primary:
      "inline-flex items-center justify-center rounded-lg bg-[#021228] text-white px-4 py-2 text-sm font-medium shadow hover:opacity-90",
    secondary:
      "inline-flex items-center justify-center rounded-lg bg-[#39C5FD] border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "inline-flex items-center justify-center px-3 py-2 text-sm hover:opacity-80",
  } as const;
  return <button className={`${styles[variant]} ${className}`} {...props} />;
}

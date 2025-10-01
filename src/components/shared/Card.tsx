import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string }>; 

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-black/10 dark:border-white/15 bg-white/70 dark:bg-black/30 backdrop-blur-sm shadow-sm ${className}`}>
      {children}
    </div>
  );
}

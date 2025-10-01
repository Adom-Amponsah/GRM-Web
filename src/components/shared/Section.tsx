import React, { PropsWithChildren } from "react";

export default function Section({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  );
}

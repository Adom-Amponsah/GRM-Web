import React from "react";
import Section from "@/components/shared/Section";

export default function PapasImageSection() {
  return (
    <Section className="bg-[#0a1f3f] text-white ">
            <h3 className="text-6xl tracking-tight flex text-center justify-center">PAPAS IMAGE BACKGROUND</h3>
      <div className="h-[200px] sm:h-[260px] w-full bg-[url('/papas-image-placeholder.jpg')] bg-cover bg-center opacity-30" />
      <div className="-mt-28 sm:-mt-36 text-center">
        {/* Overlay text placeholder */}
      </div>
    </Section>
  );
}

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";

export default function AssociatedMinistriesSection() {
  // Replace these with real image URLs provided by you
  const slides = useMemo(
    () => [
      "https://images.unsplash.com/photo-1520975922284-9bcd8f586b1e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526481280698-8fcc13fd1b4c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <Section className="relative overflow-hidden bg-[#0a47a1] text-white pt-16 sm:pt-20 pb-0 min-h-[520px] sm:min-h-[620px]">
      {/* Carousel track */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-center bg-cover ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Blue overlay to match reference */}
        <div className="absolute inset-0 bg-[#0a47a1]/80" />
      </div>

      {/* Huge watermark text */}
      <div className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center">
        <div className="text-[10vw] sm:text-[8vw] font-extrabold tracking-tighter text-white/10 leading-none text-center select-none">
          ASSOCIATED
          <br />
          MINISTRIES
          <br />
          BACKGROUND
        </div>
      </div>

      {/* Foreground content fixed to bottom */}
      <div className="absolute inset-x-0 bottom-0 pb-20">
        <Container>
          <div className="max-w-3xl text-left pb-3">
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">AMPIAH-KWOFI WORLD OUTREACH</h3>
            <p className="mt-3 text-white/85">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </p>
          </div>
          {/* Dots */}
          <div className="flex items-center justify-start gap-2 pb-3">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`size-2.5 rounded-full transition-all ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
}

"use client";

"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
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

  // Animation variants
  const watermarkVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 0.1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const dotsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className="relative overflow-hidden bg-[#0a47a1] text-white pt-16 sm:pt-20 pb-0 min-h-[520px] sm:min-h-[620px] px-2">
      {/* Carousel track */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <motion.div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-center bg-cover ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: i === index ? 1 : 1.1 }}
            transition={{ duration: 0.7 }}
          />
        ))}
        {/* Blue overlay to match reference */}
        <div className="absolute inset-0 bg-[#0a47a1]/80" />
      </div>

      {/* Huge watermark text */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-0 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={watermarkVariants}
      >
        <div className="text-[10vw] sm:text-[8vw] font-extrabold tracking-tighter text-white/10 leading-none text-center select-none">
          ASSOCIATED
          <br />
          MINISTRIES
          <br />
          BACKGROUND
        </div>
      </motion.div>

      {/* Foreground content fixed to bottom */}
      <div className="absolute inset-x-0 bottom-0 pb-20 px-6">
        <Container>
          <motion.div
            className="max-w-3xl text-left pb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={contentVariants}
          >
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
              variants={itemVariants}
            >
              AMPIAH-KWOFI WORLD OUTREACH
            </motion.h3>
            <motion.p
              className="mt-3 text-white/85"
              variants={itemVariants}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </motion.p>
          </motion.div>
          
          {/* Dots */}
          <motion.div
            className="flex items-center justify-start gap-2 pb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={dotsVariants}
          >
            {slides.map((_, i) => (
              <motion.button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`size-2.5 rounded-full transition-all ${
                  i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
                variants={dotVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </Container>
      </div>
    </Section>
  );
}
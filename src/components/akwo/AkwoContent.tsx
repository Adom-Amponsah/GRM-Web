'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";

export default function AkwoContent() {
  // Define animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger children elements
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const sectionHeadingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="flex flex-col">
      {/* Hero with shared background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/45" />
        </div>
        <Container className="pt-28 sm:pt-36 pb-14 text-white">
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold tracking-tight px-3"
            initial="hidden"
            animate="visible" // Animate on mount for hero title
            variants={sectionHeadingVariants}
          >
            AMPIAH-KWOFI WORLD OUTREACH (AKWO)
          </motion.h1>
        </Container>
      </div>

      {/* Carousel + Intro */}
      <motion.div
        className="bg-white py-10 px-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Container className="text-black">
          {/* Carousel placeholder */}
          <motion.div
            className="rounded-xl bg-gray-200/80 h-[260px] md:h-[320px] lg:h-[360px] flex items-center justify-center text-3xl font-bold text-gray-400"
            variants={itemVariants}
          >
            AKWO IMAGES CAROUSEL
          </motion.div>
          {/* dots */}
          <motion.div
            className="mt-3 flex justify-center items-center gap-2"
            variants={itemVariants}
          >
            <span className="size-1.5 rounded-full bg-black/40" />
            <span className="size-1.5 rounded-full bg-black/20" />
            <span className="size-1.5 rounded-full bg-black/20" />
          </motion.div>

          {/* Text blocks */}
          <div className="mt-6 space-y-4 text-black/80 leading-relaxed">
            <motion.p variants={itemVariants}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer.
            </motion.p>
            <motion.p variants={itemVariants}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry.
            </motion.p>
            <motion.p variants={itemVariants}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </motion.p>
          </div>

          {/* Button centered */}
          <motion.div
            className="mt-6 flex justify-center"
            variants={itemVariants}
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-[#0B1221] text-white px-5 py-2.5 text-sm">
              Give to the ministry
            </button>
          </motion.div>
        </Container>
      </motion.div>

      {/* Local Missions */}
      <motion.div
        className="bg-white py-10 px-3"
        variants={containerVariants} // Using containerVariants to stagger its children
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Container className="text-black">
          <motion.h3
            className="text-xl font-extrabold tracking-tight"
            variants={sectionHeadingVariants} // Reusing section heading variant for consistency
          >
            LOCAL MISSIONS
          </motion.h3>
          <motion.p
            className="mt-3 text-black/80 leading-relaxed"
            variants={itemVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </motion.p>
          <motion.div
            className="mt-5 rounded-xl bg-gray-200/80 h-[240px] md:h-[300px] flex items-center justify-center text-2xl font-bold text-gray-400"
            variants={itemVariants}
          >
            AKWO IMAGE
          </motion.div>
        </Container>
      </motion.div>

      {/* International Missions */}
      <motion.div
        className="bg-white py-10 px-3"
        variants={containerVariants} // Using containerVariants to stagger its children
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Container className="text-black">
          <motion.h3
            className="text-xl font-extrabold tracking-tight"
            variants={sectionHeadingVariants} // Reusing section heading variant
          >
            INTERNATIONAL MISSIONS
          </motion.h3>
          <motion.p
            className="mt-3 text-black/80 leading-relaxed"
            variants={itemVariants}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </motion.p>
          <motion.div
            className="mt-5 rounded-xl bg-gray-200/80 h-[240px] md:h-[300px] flex items-center justify-center text-2xl font-bold text-gray-400"
            variants={itemVariants}
          >
            AKWO IMAGE
          </motion.div>
        </Container>
      </motion.div>
    </main>
  );
}
'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export default function HeroVideoSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  const welcomeVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1
      }
    }
  };

  return (
    <div className="relative overflow-hidden px-2">
      {/* Background image/video placeholder */}
      <div className="absolute inset-0 -z-10">
        <div className="h-[100%] sm:h-[100%] w-full bg-[url('https://i.ibb.co/wZtT455W/hero01.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>
      
      <Container className="pt-28 sm:pt-40 md:pt-52 mt-28 sm:mt-36 md:mt-40 pb-32 sm:pb-40 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          {/* Left copy */}
          <motion.div
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="uppercase text-xs sm:text-sm tracking-wider text-white/80"
              variants={itemVariants}
            >
              We are the
            </motion.div>
            
            <motion.h1
              className="mt-1 text-4xl sm:text-6xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="whitespace-nowrap">SOUND OF</span>
              <span className="text-[#39C5FD]"> REVIVAL</span>
            </motion.h1>
            
            <motion.p
              className="mt-4 text-white/85 max-w-prose"
              variants={itemVariants}
            >
              Lorem ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </motion.p>
            
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              variants={itemVariants}
            >
              <CTAButton className="rounded-full" variant="secondary">Worship with Us</CTAButton>
              <CTAButton variant="secondary" className="rounded-full">Give to the Ministry</CTAButton>
            </motion.div>
          </motion.div>

          {/* Right quick action pill */}
          <motion.div
            className="justify-self-end hidden sm:block"
            variants={pillVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="rounded-full bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 text-sm text-white/90 shadow-lg flex items-center gap-3">
              <span className="size-2 rounded-full bg-emerald-400" />
              Morning Message of Motivation
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="opacity-80"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Embedded Welcome Home strip within hero */}
      <Container>
        <motion.div
          className="relative z-10 -mt-20 sm:-mt-28"
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-[28px] sm:rounded-[36px] border border-black/10 dark:border-white/15 bg-white/80 dark:bg-black/30 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight">WELCOME HOME</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s. Lorem ipsum is simply dummy text of the printing
                  and typesetting industry.
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">— Rev. Dr. Robert Ampiah-Kwofi</p>
              </div>
              <div className="min-h-[180px] md:min-h-[220px] bg-gray-200/70 dark:bg-white/10 rounded-[20px] flex items-center justify-center text-gray-500">
                WELCOME IMAGE
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
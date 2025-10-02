'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import CTAButton from "@/components/shared/CTAButton";

export default function AboutUsSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const visionMissionVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className="bg-white w-full px-2">
      <Container className="text-black">
        <motion.h3
          className="text-6xl tracking-tight mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          ABOUT US
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <p className="mt-3 text-black leading-relaxed">
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book." Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div className="mt-4">
                <CTAButton className="rounded-full">Learn more</CTAButton>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <h4 className="text-xl font-bold tracking-tight">OUR VISION</h4>
              <motion.div
                className="flex gap-4"
                variants={visionMissionVariants}
              >
                <div className="w-4 rounded bg-[#39C5FD]" />
                <p className="text-black leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer."
                </p>
              </motion.div>
            </motion.div>

            {/* Our Mission */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <h4 className="text-xl font-bold tracking-tight">OUR MISSION</h4>
              <motion.div
                className="flex gap-4"
                variants={visionMissionVariants}
              >
                <div className="w-4 rounded bg-red-500" />
                <p className="text-black leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer."
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="min-h-[480px] rounded-lg bg-gray-200/70 dark:bg-gray/10"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          />
        </div>
      </Container>
    </Section>
  );
}
'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import CTAButton from "@/components/shared/CTAButton";

export default function PapasBooksSection() {
  // Animation variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const contentVariants: Variants = {
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

  const statsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const statCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section className="bg-white px-2">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: flyer placeholder */}
          <motion.div
            className="min-h-[360px] rounded-lg bg-gray-200 flex items-center justify-center text-gray-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            BOOKS FLYER
          </motion.div>

          {/* Right: copy and stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentVariants}
          >
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black"
              variants={itemVariants}
            >
              PAPA'S BOOKS
            </motion.h3>
            
            <motion.p
              className="mt-3 text-black leading-relaxed"
              variants={itemVariants}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s.
            </motion.p>

            {/* Stat cards */}
            <motion.div
              className="mt-6 grid grid-cols-2 gap-4 max-w-md"
              variants={statsVariants}
            >
              <motion.div
                className="rounded-2xl border border-black/10 dark:border-white/15 shadow-sm px-5 py-4 text-center bg-gray-200"
                variants={statCardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-extrabold text-black">100+</div>
                <div className="mt-1 text-xs text-gray-600">books available for purchase</div>
              </motion.div>
              
              <motion.div
                className="rounded-2xl border border-black/10 dark:border-white/15 bg-gray-200 shadow-sm px-5 py-4 text-center"
                variants={statCardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-extrabold text-black">3</div>
                <div className="mt-1 text-xs text-gray-600">language translations for the books</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-4 text-xs text-gray-600"
              variants={itemVariants}
            >
              To order a book, contact: <span className="font-medium">+233 20 123 4568</span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <CTAButton className="mt-6 rounded-full">Purchase from Amazon</CTAButton>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
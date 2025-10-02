"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function AboutContent() {
  // Animation variants
  const fadeInUp: Variants = {
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

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const scaleIn: Variants = {
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

  const cardVariants: Variants = {
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

  return (
    <main className="flex flex-col">
      {/* Hero with image background and fixed navbar over it */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="h-[45vh] sm:h-[55vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="pt-32 sm:pt-36 pb-16 text-white px-3">
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold tracking-tight px-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            GET TO KNOW ABOUT US
          </motion.h1>
        </Container>
      </div>

      {/* Vision & Mission */}
      <Section className="bg-white px-3">
        <Container className="text-black">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Our Vision */}
            <motion.div variants={slideInLeft}>
              <h3 className="text-xl font-extrabold tracking-tight">OUR VISION</h3>
              <div className="mt-3 flex items-start gap-4">
                <motion.div
                  className="w-2 rounded bg-[#39C5FD]"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ minHeight: '4rem' }} // 👈 ensures it's visible during animation
                />
                <p className="text-black/80 leading-relaxed">
                  To be a vibrant Christian Church for the end time Kingdom harvest.
                </p>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div variants={slideInRight}>
              <h3 className="text-xl font-extrabold tracking-tight">OUR MISSION</h3>
              <div className="mt-3 flex items-start gap-4">
                <motion.div
                  className="w-3 rounded bg-red-500"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ minHeight: '4rem' }} // ensures line is visible as it animates
                />
                <p className="text-black/80 leading-relaxed">
                  To raise dedicated children of God, discipled for prayers, evangelism and revival in fulfillment of the
                  great commission.
                </p>
              </div>
            </motion.div>

          </motion.div>
        </Container>
      </Section>

      {/* History */}
      <Section className="bg-white px-3">
        <Container className="text-black">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-xl font-extrabold tracking-tight"
              variants={fadeInUp}
            >
              HISTORY
            </motion.h3>
            <motion.div
              className="mt-3 space-y-4 text-black/80 leading-relaxed"
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp}>
                Global Revival Ministries (GRM) in Ghana was founded by Rev. Dr. Robert Ampiah-Kwofi in 1984, with a ministry
                focus on evangelism, discipleship, leadership development, intercessory prayer and global revival. GRM currently
                has over fifty (50) branches across Ghana and thriving congregations in Burkina Faso, Sierra Leone, Togo and Côte d'Ivoire.
                GRM's headquarters is located at GRM Revival City in Haatso, Accra.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <div className="font-semibold">Leadership Hierarchy</div>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>Founder & General Overseer: Rev. Dr. Robert Ampiah-Kwofi.</li>
                  <li>Board of Directors: Advisory role in governance, financial management, and ministry coordination.</li>
                  <li>Presbytery: Oversees GRM branches across Ghana, Togo, Burkina Faso, Côte d'Ivoire and Sierra Leone.</li>
                  <li>Zonal Overseers: Supervise clusters of GRM branches within a region.</li>
                  <li>Local Pastors & Ministry Heads: Each branch has a resident pastor and ministry leaders overseeing departments and groups.</li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <div className="font-semibold">Philosophy</div>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>G — godliness with contentment [1 Timothy 6:6–10]</li>
                  <li>L — loving one another [1 John 4:7–11; John 13:34–35]</li>
                  <li>O — obedience to authority [Hebrews 13:17]</li>
                  <li>B — boldness in facing life's challenges [Proverbs 28:1; 2 Timothy 1:6–7]</li>
                  <li>A — accepting others as God's wonderful creation [Galatians 3:27]</li>
                  <li>L — leading with integrity [1 Corinthians 4:2; Luke 16:10–12]</li>
                  <li>R — reaching out to the nations with the gospel of Christ [Matthew 28:19; Mark 16:15]</li>
                  <li>M — ministering to the Lord and to one another [Acts 13:2; 1 Corinthians 14:26; Ephesians 4:11–16]</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* History image placeholder */}
            <motion.div
              className="mt-8 min-h-[260px] rounded-lg bg-gray-200/70"
              variants={scaleIn}
            />
          </motion.div>
        </Container>
      </Section>

      {/* What do we believe in? */}
      <Section className="bg-white px-3">
        <Container className="text-black">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-xl font-extrabold tracking-tight"
              variants={fadeInUp}
            >
              WHAT DO WE BELIEVE IN?
            </motion.h3>
            <motion.ol
              className="mt-4 space-y-6 text-black/80 leading-relaxed list-decimal pl-5"
              variants={staggerContainer}
            >
              <motion.li variants={cardVariants}>
                <div className="font-semibold">Jesus Christ as the Son of God</div>
                <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
              </motion.li>
              <motion.li variants={cardVariants}>
                <div className="font-semibold">The Bible as the Word of God</div>
                <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </motion.li>
              <motion.li variants={cardVariants}>
                <div className="font-semibold">The Holy Spirit</div>
                <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </motion.li>
              <motion.li variants={cardVariants}>
                <div className="font-semibold">Salvation in Jesus Christ alone</div>
                <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </motion.li>
              <motion.li variants={cardVariants}>
                <div className="font-semibold">Biblical Sexuality, Chastity and Marriage</div>
                <p className="mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </motion.li>
            </motion.ol>
          </motion.div>
        </Container>
      </Section>

      {/* Ministries in the Church */}
      <Section className="bg-white px-3">
        <Container className="text-black">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h3
              className="text-xl font-extrabold tracking-tight"
              variants={fadeInUp}
            >
              MINISTRIES IN THE CHURCH
            </motion.h3>
            <motion.div
              className="mt-6 space-y-10"
              variants={staggerContainer}
            >
              {/* 1. Men's Ministry */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start gap-8"
                variants={cardVariants}
              >
                <motion.div
                  className="h-[180px] rounded-md bg-gray-200/70 flex items-center justify-center text-gray-500 font-bold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  MINISTRY IMAGE
                </motion.div>
                <div>
                  <div className="font-semibold">1. Men's Ministry</div>
                  <p className="mt-2 text-black/80 leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer.
                  </p>
                </div>
              </motion.div>

              {/* 2. Women's Ministry */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start gap-8"
                variants={cardVariants}
              >
                <motion.div
                  className="h-[180px] rounded-md bg-gray-200/70 flex items-center justify-center text-gray-500 font-bold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  MINISTRY IMAGE
                </motion.div>
                <div>
                  <div className="font-semibold">2. Women's Ministry</div>
                  <p className="mt-2 text-black/80 leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer.
                  </p>
                </div>
              </motion.div>

              {/* 3. Bible School */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start gap-8"
                variants={cardVariants}
              >
                <motion.div
                  className="h-[180px] rounded-md bg-gray-200/70 flex items-center justify-center text-gray-500 font-bold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  MINISTRY IMAGE
                </motion.div>
                <div>
                  <div className="font-semibold">3. Bible School</div>
                  <p className="mt-2 text-black/80 leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer.
                  </p>
                </div>
              </motion.div>

              {/* 4. Youth Church */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] items-start gap-8"
                variants={cardVariants}
              >
                <motion.div
                  className="h-[180px] rounded-md bg-gray-200/70 flex items-center justify-center text-gray-500 font-bold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  MINISTRY IMAGE
                </motion.div>
                <div>
                  <div className="font-semibold">4. Youth Church</div>
                  <p className="mt-2 text-black/80 leading-relaxed">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
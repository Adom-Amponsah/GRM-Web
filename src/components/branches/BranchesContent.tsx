'use client'
import React from "react";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

type Branch = {
    name: string;
    address: string;
    phone: string;
    schedule?: string;
};

const branches: Branch[] = [
    { name: "Revival City", address: "Mango Lane, Haatso, GE-182-6445", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
    { name: "East Legon", address: "Lagos Ave, East Legon", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
    { name: "Legon Campus Chapter", address: "University of Ghana", phone: "+233 20 123 4568", schedule: "Fri 6:00pm" },
    { name: "Achimota Branch", address: "Achimota", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
    { name: "Labone Branch", address: "Labone", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
    { name: "Santase Branch", address: "Kumasi - Santase", phone: "+233 20 123 4568", schedule: "Sun 9:00am" },
    { name: "Taasco Branch", address: "Tema Community 7", phone: "+233 20 123 4568", schedule: "Sun 8:00am" },
    { name: "Revival City (2)", address: "Mango Lane, Haatso, GE-182-6445", phone: "+233 20 123 4568", schedule: "Sun 8:30am" },
];

export default function BranchesContent() {
    // Animation variants
    const pageVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const gridContainerVariants: Variants = {
        hidden: { opacity: 1 }, // Parent is already handling its own fade-in
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3, // Start animating grid items after the title and filter are visible
            },
        },
    };

    const gridItemVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <motion.main
            className="flex flex-col"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero with same background as About */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="h-[40vh] sm:h-[50vh] w-full bg-[url('https://i.ibb.co/TSZ40GB/aboutUs.png')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-black/45" />
                </div>
                <Container className="pt-28 sm:pt-36 pb-14 text-white">
                    {/* Apply item animation */}
                    <motion.h1
                        className="text-3xl sm:text-5xl font-extrabold tracking-tight px-3"
                        variants={itemVariants}
                    >
                        FIND A BRANCH NEAR YOU
                    </motion.h1>
                </Container>
            </div>

            {/* Branches filter/search placeholder */}
            <motion.div variants={itemVariants}>
                <Section className="bg-white px-3">
                    <Container>
                        <div className="max-w-xl">
                            <label className="block text-sm text-gray-600 mb-2">Select your region to find a branch near you</label>
                            <div className="rounded-full border border-black/10 px-4 py-2 bg-white shadow-sm text-sm text-gray-700">Search or select a region…</div>
                        </div>
                    </Container>
                </Section>
            </motion.div>


            {/* Branches grid */}
            <div className="bg-white pt-0 py-10 px-3">
                <Container>
                    <motion.div variants={gridContainerVariants}>
                        <motion.h3
                            className="text-xl font-extrabold tracking-tight mb-4 text-black"
                            variants={itemVariants}
                        >
                            BRANCHES
                        </motion.h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {branches.map((b) => (
                                // Apply grid item animation
                                <motion.div
                                    key={b.name}
                                    className="rounded-2xl bg-white border border-black/10 shadow-sm p-4"
                                    variants={gridItemVariants}
                                >
                                    <div className="font-semibold text-black">{b.name}</div>
                                    <div className="mt-1 text-sm text-gray-600">{b.address}</div>
                                    <div className="mt-1 text-sm text-gray-600">{b.phone}</div>
                                    {b.schedule && (
                                        <div className="mt-2 inline-flex items-center gap-2 text-xs text-gray-500">
                                            <span className="inline-block size-2 rounded-full bg-[#39C5FD]" />
                                            {b.schedule}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </div>
        </motion.main>
    );
}
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
    id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
    return (
        <section id={id} className="px-6 md:px-10 py-20 md:py-28 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6 rounded-full"
                />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                        {title}
                    </span>
                </h2>
            </motion.div>
            {children}
        </section>
    );
}

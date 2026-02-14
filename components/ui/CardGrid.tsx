"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface CardItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface CardGridProps {
    items: CardItem[];
}

export default function CardGrid({ items }: CardGridProps) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{
                        y: -12,
                        scale: 1.03,
                        transition: { duration: 0.3 }
                    }}
                    className="group relative p-6 md:p-8 rounded-2xl glass glass-hover overflow-hidden"
                >
                    {/* Gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />

                    {/* Content */}
                    <div className="relative z-10">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-5"
                        >
                            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 group-hover:border-cyan-400/40 transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                            </div>
                        </motion.div>

                        <h3 className="font-bold text-lg mb-3 text-white group-hover:text-cyan-100 transition-colors duration-300">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                            {item.desc}
                        </p>
                    </div>

                    {/* Shine effect on hover */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        initial={false}
                        whileHover={{
                            background: [
                                "linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)",
                                "linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)",
                            ],
                            backgroundPosition: ["-200% 0", "200% 0"],
                            transition: { duration: 1.5, repeat: Infinity },
                        }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

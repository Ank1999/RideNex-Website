"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface Feature {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface ImageTextSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    features?: Feature[];
    imagePosition?: "left" | "right";
    id?: string;
}

export default function ImageTextSection({
    title,
    description,
    imageSrc,
    imageAlt,
    features = [],
    imagePosition = "right",
    id
}: ImageTextSectionProps) {
    const imageOnRight = imagePosition === "right";

    return (
        <section id={id} className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!imageOnRight ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: imageOnRight ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`${!imageOnRight ? "lg:order-2" : ""}`}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                            {description}
                        </p>

                        {features.length > 0 && (
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-4 items-start group"
                                    >
                                        <div className="p-3 rounded-xl glass group-hover:bg-cyan-500/20 transition-all duration-300">
                                            <feature.icon className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`relative ${!imageOnRight ? "lg:order-1" : ""}`}
                    >
                        <div className="relative rounded-2xl overflow-hidden group">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

                            {/* Image container */}
                            <div className="relative rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

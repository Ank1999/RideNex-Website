"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative px-6 md:px-10 py-32 md:py-40 lg:py-48 text-center max-w-6xl mx-auto">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 800,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * -200],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-cyan-500/30"
            >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Welcome to the Future of Biking</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8"
            >
                The Digital Home of
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
                    Every Biker's Life
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-12"
            >
                Ridenex is a complete biker operating system — unifying{" "}
                <span className="text-cyan-400 font-semibold">rides</span>,{" "}
                <span className="text-blue-400 font-semibold">tours</span>,{" "}
                <span className="text-purple-400 font-semibold">community</span>,{" "}
                <span className="text-pink-400 font-semibold">tracking</span>, services, marketplace, and safety
                into one seamless digital ecosystem built for modern riders.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                >
                    <span className="relative z-10">Create Rider Profile</span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500"
                        initial={{ x: "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full font-semibold text-lg glass glass-hover border-2 border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                    Explore Platform
                </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            >
                {[
                    { value: "100K+", label: "Active Riders" },
                    { value: "500+", label: "Cities Worldwide" },
                    { value: "50K+", label: "Rides Completed" },
                    { value: "1000+", label: "Tours Available" },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

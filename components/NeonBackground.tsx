"use client";

import { motion } from "framer-motion";

export default function NeonBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Animated gradient orbs with parallax effect */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[180px] opacity-20"
            />

            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[180px] opacity-20"
            />

            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[220px] opacity-10 -translate-x-1/2 -translate-y-1/2"
            />

            {/* Additional accent orbs */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500 rounded-full blur-[150px] opacity-10"
            />
        </div>
    );
}

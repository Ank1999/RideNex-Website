"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Logo() {
    return (
        <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield/Home background */}
            <path
                d="M60 10 L95 30 L95 75 Q95 90 80 95 L60 100 L40 95 Q25 90 25 75 L25 30 Z"
                fill="url(#shieldGrad)"
                opacity="0.15"
            />

            {/* Motorcycle body */}
            <path
                d="M35 60 L50 55 L65 50 L75 55 L85 60"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Motorcycle seat/tank */}
            <path
                d="M50 55 Q55 45 65 45 Q70 45 75 50"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
            />

            {/* Handlebars */}
            <path
                d="M65 50 L70 40 M70 40 L75 38 M70 40 L65 38"
                stroke="url(#grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            {/* Front wheel */}
            <circle cx="75" cy="70" r="12" stroke="url(#grad)" strokeWidth="3" fill="none" />
            <circle cx="75" cy="70" r="4" fill="url(#grad)" />

            {/* Rear wheel */}
            <circle cx="40" cy="70" r="12" stroke="url(#grad)" strokeWidth="3" fill="none" />
            <circle cx="40" cy="70" r="4" fill="url(#grad)" />

            {/* Digital circuit elements */}
            <path
                d="M30 35 L35 35 L35 40 M85 35 L90 35 L90 40"
                stroke="url(#grad)"
                strokeWidth="1.5"
                opacity="0.6"
            />
            <circle cx="30" cy="35" r="2" fill="url(#grad)" opacity="0.8" />
            <circle cx="90" cy="40" r="2" fill="url(#grad)" opacity="0.8" />

            {/* Home roof element at top */}
            <path
                d="M45 25 L60 15 L75 25"
                stroke="url(#grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#platform", label: "Platform" },
        { href: "#rides", label: "Rides" },
        { href: "#tracking", label: "Tracking" },
        { href: "#services", label: "Services" },
        { href: "#marketplace", label: "Marketplace" },
        { href: "#safety", label: "Safety" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass shadow-lg shadow-cyan-500/10" : "bg-black/30 backdrop-blur-sm"
                }`}
        >
            <div className="flex items-center justify-between px-6 md:px-10 py-5 max-w-7xl mx-auto">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Logo />
                    <span className="text-xl font-bold tracking-widest bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                        RIDENEX
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8 text-gray-300 text-sm font-medium">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative hover:text-white transition-colors duration-300 group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden lg:block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                >
                    Join Ridenex
                </motion.button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 rounded-lg glass-hover"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass border-t border-white/10"
                    >
                        <div className="px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-300 hover:text-white transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-2.5 rounded-full font-semibold text-sm">
                                Join Ridenex
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

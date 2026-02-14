"use client";

import { motion } from "framer-motion";
import { Twitter, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

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

export default function Footer() {
    const footerLinks = {
        Product: ["Features", "Pricing", "Rides", "Marketplace", "Safety"],
        Company: ["About", "Blog", "Careers", "Press", "Partners"],
        Resources: ["Help Center", "Community", "Guides", "API Docs", "Status"],
        Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Contact"],
    };

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ];

    return (
        <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <Logo />
                            <span className="text-xl font-bold tracking-widest bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                                RIDENEX
                            </span>
                        </motion.div>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            The complete biker operating system for modern riders. Unifying rides, community, and services.
                        </p>

                        {/* Newsletter */}
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg glass border border-white/10 focus:border-cyan-500/50 focus:outline-none text-sm"
                            />
                            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform">
                                <Mail className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="font-semibold mb-4 text-white">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-300"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Ridenex. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="p-2 rounded-lg glass glass-hover"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Store, Users, Bike, Shield } from "lucide-react";

export default function Marketplace() {
    const items = [
        {
            icon: Store,
            title: "Gear Rental Marketplace",
            desc: "Rent premium helmets, jackets, gloves, boots, and riding gear for tours or one-time rides. Access quality gear without the upfront cost."
        },
        {
            icon: Bike,
            title: "Buy & Sell Used Gear",
            desc: "Community marketplace for buying and selling pre-owned riding gear. Find deals on quality equipment from fellow riders."
        },
        {
            icon: Store,
            title: "Accessories Store",
            desc: "Shop for bike accessories, mods, parts, and riding essentials. Curated selection from trusted sellers and brands."
        },
        {
            icon: Users,
            title: "Verified Seller Profiles",
            desc: "Seller ratings, reviews, transaction history, and verification badges. Buy with confidence from trusted community members."
        },
        {
            icon: Shield,
            title: "Chat with Sellers",
            desc: "In-app messaging to ask questions, negotiate prices, and arrange meetups. Direct communication for smooth transactions."
        },
        {
            icon: Store,
            title: "Secure Payment Processing",
            desc: "Protected payments through the platform. Escrow options for high-value items and buyer/seller protection."
        },
        {
            icon: Bike,
            title: "Pickup & Delivery Options",
            desc: "Choose between local pickup or delivery. Integrated logistics for seamless gear transfers across cities."
        },
        {
            icon: Users,
            title: "Condition Grading System",
            desc: "Standardized condition ratings (New, Excellent, Good, Fair) with photo verification. Know exactly what you're getting."
        },
        {
            icon: Shield,
            title: "Dispute Resolution",
            desc: "Fair mediation system for transaction issues. Platform support to resolve conflicts and ensure smooth commerce."
        }
    ];

    return (
        <Section title="Marketplace & Commerce" id="marketplace">
            <CardGrid items={items} />
        </Section>
    );
}

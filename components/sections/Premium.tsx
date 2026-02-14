"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Crown, Zap, TrendingUp, Star, Award, BarChart3 } from "lucide-react";

export default function Premium() {
    const items = [
        {
            icon: Crown,
            title: "Premium Rider Subscription",
            desc: "Unlock exclusive features: advanced analytics, priority booking, featured profile, and ad-free experience. Elevate your riding journey."
        },
        {
            icon: Zap,
            title: "Organizer Pro Subscription",
            desc: "Host unlimited rides, access organizer tools, get featured listings, and earn with reduced commission rates. Build your riding community."
        },
        {
            icon: TrendingUp,
            title: "Featured Listings",
            desc: "Boost your rides, tours, or marketplace items with featured placement. Reach more riders and fill slots faster."
        },
        {
            icon: Star,
            title: "Commission-Free Periods",
            desc: "Premium members enjoy reduced or zero commission on tour bookings and marketplace transactions during special periods."
        },
        {
            icon: Award,
            title: "Early Access to Tours",
            desc: "Get first dibs on new tour launches and limited-availability expeditions. Book the best seats before general release."
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics & Insights",
            desc: "Deep dive into your riding patterns, community engagement, and growth metrics. Data-driven insights for serious riders."
        }
    ];

    return (
        <Section title="Premium & Monetization" id="premium">
            <CardGrid items={items} />
        </Section>
    );
}

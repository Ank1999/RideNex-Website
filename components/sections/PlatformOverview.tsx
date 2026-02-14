"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Users, Globe, Cpu, BarChart3 } from "lucide-react";

export default function PlatformOverview() {
    const items = [
        {
            icon: Users,
            title: "Multi-Channel Onboarding",
            desc: "Sign up via phone, email, or social login with OTP verification. Quick, secure, and seamless account creation in under 2 minutes."
        },
        {
            icon: Users,
            title: "Comprehensive Biker Profiles",
            desc: "Showcase your experience level (Beginner/Intermediate/Pro), bike details (brand, model, year, CC, mods), riding interests, and bio. Build your digital riding identity."
        },
        {
            icon: Globe,
            title: "City-Based Personalization",
            desc: "Select primary and secondary cities to discover localized rides, tours, mechanics, and communities. Your riding world, tailored to your location."
        },
        {
            icon: Cpu,
            title: "Unified Biker Operating System",
            desc: "Everything from local rides to international tours, maintenance to marketplace, tracking to safety — all managed in one seamless platform."
        },
        {
            icon: BarChart3,
            title: "Trust & Verification System",
            desc: "KYC verification for hosts, bike ownership verification, verified badges for guides and mechanics. Ride with confidence in a trusted community."
        },
        {
            icon: Users,
            title: "Privacy & Visibility Controls",
            desc: "Choose who sees your profile and activity — public, friends only, or private. Full control over your digital presence and riding data."
        },
        {
            icon: Globe,
            title: "Emergency Contact Integration",
            desc: "Add emergency contacts who get auto-alerts during rides. Safety preferences built into your profile for peace of mind on every journey."
        },
        {
            icon: Cpu,
            title: "Bike Details & Modifications",
            desc: "Document your bike's specs, modifications, and upgrades. Track your machine's evolution and connect with riders who share your passion."
        }
    ];

    return (
        <Section title="One Platform. Entire Biker Ecosystem." id="platform">
            <CardGrid items={items} />
        </Section>
    );
}

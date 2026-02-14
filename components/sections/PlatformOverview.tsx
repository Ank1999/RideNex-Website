"use client";

import ImageTextSection from "@/components/ui/ImageTextSection";
import { Users, Globe, Cpu, Shield } from "lucide-react";

export default function PlatformOverview() {
    const features = [
        {
            icon: Users,
            title: "Comprehensive Biker Profiles",
            desc: "Showcase your experience level, bike details, riding interests, and build your digital riding identity in minutes."
        },
        {
            icon: Globe,
            title: "City-Based Personalization",
            desc: "Discover localized rides, tours, mechanics, and communities tailored to your primary and secondary cities."
        },
        {
            icon: Cpu,
            title: "Unified Operating System",
            desc: "Everything from rides to tours, maintenance to marketplace, tracking to safety — all in one seamless platform."
        },
        {
            icon: Shield,
            title: "Trust & Verification",
            desc: "KYC verification for hosts, verified badges for guides and mechanics. Ride with confidence in a trusted community."
        }
    ];

    return (
        <ImageTextSection
            id="platform"
            title="One Platform. Entire Biker Ecosystem."
            description="RideNex is your complete biker operating system — unifying rides, community, tracking, services, marketplace, and safety into one seamless digital experience built for modern riders."
            imageSrc="/images/app-dashboard.png"
            imageAlt="RideNex App Dashboard"
            features={features}
            imagePosition="right"
        />
    );
}

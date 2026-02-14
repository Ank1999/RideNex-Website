"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Shield, Bell, HeartPulse, Users } from "lucide-react";

export default function SafetySystem() {
    const items = [
        {
            icon: Shield,
            title: "One-Tap SOS Emergency Button",
            desc: "Instant emergency activation during rides. Alerts emergency contacts, nearby riders, and support team with your exact location."
        },
        {
            icon: Bell,
            title: "Live Ride Tracking",
            desc: "Real-time GPS tracking for all ride participants. Emergency contacts can monitor your journey for added safety."
        },
        {
            icon: HeartPulse,
            title: "Auto Emergency Contact Alerts",
            desc: "Pre-configured emergency contacts receive automatic notifications when you start rides and instant alerts if SOS is triggered."
        },
        {
            icon: Users,
            title: "Ride Rules Enforcement",
            desc: "Hosts set and enforce ride rules. Clear guidelines for speed, breaks, group riding etiquette, and safety protocols."
        },
        {
            icon: Shield,
            title: "User Reporting & Blocking",
            desc: "Report unsafe behavior, harassment, or violations. Block users and flag issues for community moderation."
        },
        {
            icon: Bell,
            title: "Blacklist Management",
            desc: "Platform-wide blacklist for users who violate safety policies. Community protection through proactive moderation."
        },
        {
            icon: HeartPulse,
            title: "Incident Reporting System",
            desc: "Document accidents, near-misses, or safety concerns. Help improve community safety with detailed incident logs."
        },
        {
            icon: Users,
            title: "Insurance Add-ons for Tours",
            desc: "Optional insurance coverage for big tours. Ride protection, medical coverage, and trip cancellation insurance."
        },
        {
            icon: Shield,
            title: "Verified Host & Guide Badges",
            desc: "KYC-verified hosts, guides, and mechanics with visible trust badges. Ride with confidence knowing who you're riding with."
        },
        {
            icon: Bell,
            title: "Safety Score System",
            desc: "Community-driven safety ratings for riders, hosts, and guides. Transparent reputation system for trust building."
        }
    ];

    return (
        <Section title="Safety & Trust Infrastructure" id="safety">
            <CardGrid items={items} />
        </Section>
    );
}

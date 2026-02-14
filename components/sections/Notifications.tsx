"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Bell, Map, Trophy, Wrench, Cloud, Users } from "lucide-react";

export default function Notifications() {
    const items = [
        {
            icon: Bell,
            title: "Pre-Ride Reminders",
            desc: "Get notified 24 hours and 1 hour before scheduled rides. Never miss a group ride or tour departure with timely alerts."
        },
        {
            icon: Cloud,
            title: "Weather Alerts & Ride Suitability",
            desc: "Real-time weather updates and ride suitability scores. Know if conditions are safe before you head out."
        },
        {
            icon: Users,
            title: "Group Activity Updates",
            desc: "Stay in sync with ride chat messages, route changes, new members joining, and host announcements."
        },
        {
            icon: Trophy,
            title: "Badge Unlock Celebrations",
            desc: "Instant notifications when you unlock new badges, hit milestones, or achieve personal records. Celebrate your wins!"
        },
        {
            icon: Bell,
            title: "Tour Price Drop Alerts",
            desc: "Get notified when tours you're watching drop in price or have special offers. Never miss a deal on your dream ride."
        },
        {
            icon: Cloud,
            title: "Service Booking Confirmations",
            desc: "Instant confirmations for mechanic appointments, tow requests, and service bookings. Track service status in real-time."
        },
        {
            icon: Users,
            title: "In-App & Push Notifications",
            desc: "Dual notification system — in-app alerts for when you're active and push notifications for important updates when you're away."
        },
        {
            icon: Trophy,
            title: "Smart Notification Preferences",
            desc: "Customize what you want to hear about. Granular controls for rides, tours, services, marketplace, and social activity."
        }
    ];

    return (
        <Section title="Automation & Notifications">
            <CardGrid items={items} />
        </Section>
    );
}

"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Wrench, Bell, Map, Users } from "lucide-react";

export default function BikerServices() {
    const items = [
        {
            icon: Map,
            title: "Nearby Mechanics & Services",
            desc: "Find verified mechanics near you with distance, ETA, ratings, and specializations. Filter by service type and availability."
        },
        {
            icon: Bell,
            title: "On-Road Emergency Assistance",
            desc: "Breakdown? One tap connects you to the nearest emergency mechanic. Real-time tracking and instant call support."
        },
        {
            icon: Wrench,
            title: "Tow Services",
            desc: "Need a tow? Request towing services directly through the app with transparent pricing and ETA tracking."
        },
        {
            icon: Users,
            title: "Bike Wash & Detailing",
            desc: "Book professional bike washing and detailing services. Keep your ride looking showroom-fresh with verified service providers."
        },
        {
            icon: Map,
            title: "Instant Service Booking",
            desc: "Book appointments with one tap. Call mechanics directly, check availability, and schedule service at your convenience."
        },
        {
            icon: Bell,
            title: "Ratings & Reviews",
            desc: "Community-driven ratings help you choose the best mechanics. Read reviews, see photos, and make informed decisions."
        },
        {
            icon: Wrench,
            title: "Complete Service History",
            desc: "Digital logbook of all maintenance, repairs, and part replacements. Track expenses, warranty info, and service intervals."
        },
        {
            icon: Users,
            title: "Smart Maintenance Reminders",
            desc: "Automated alerts before oil changes, tire replacements, and scheduled maintenance. Never miss a service deadline."
        }
    ];

    return (
        <Section title="Biker Services & Maintenance" id="services">
            <CardGrid items={items} />
        </Section>
    );
}

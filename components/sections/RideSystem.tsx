"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Route, Map, Users, Bike } from "lucide-react";

export default function RideSystem() {
    const items = [
        {
            icon: Route,
            title: "Create Custom Routes",
            desc: "Draw or select routes on the map with auto-calculated distance and duration. Set start/end points, difficulty level, and ride rules for your perfect journey."
        },
        {
            icon: Users,
            title: "Host & Manage Rides",
            desc: "Cap riders (default 10), set approval-based or open join, create recurring weekly/monthly rides. Full control over who rides with you."
        },
        {
            icon: Map,
            title: "Live Ride Tracking",
            desc: "Real-time GPS location sharing during rides with auto-created group chat. Stay connected and ride together, even when spread out."
        },
        {
            icon: Bike,
            title: "SOS & Safety Features",
            desc: "One-tap emergency button during rides with instant alerts to emergency contacts and nearby riders. Safety first, always."
        },
        {
            icon: Route,
            title: "Post-Ride Memories",
            desc: "Upload photos, share ride summaries, and log completion stats. Build your riding timeline and relive epic journeys."
        },
        {
            icon: Map,
            title: "Discover Big Tours",
            desc: "Browse multi-day managed tours by region and duration. Detailed itineraries, inclusions/exclusions, difficulty ratings, and guide profiles."
        },
        {
            icon: Users,
            title: "Professional Tour Guides",
            desc: "Verified guide profiles with experience, ratings, and past tour history. Ride with experts who know the terrain and culture."
        },
        {
            icon: Bike,
            title: "Seamless Booking & Payments",
            desc: "In-app tour booking with secure payments and installment options. Flexible cancellation and refund policies for peace of mind."
        },
        {
            icon: Route,
            title: "Pre-Tour Orientation",
            desc: "Join orientation rooms before big tours. Meet fellow riders, review itinerary, discuss gear, and get ready for adventure."
        },
        {
            icon: Map,
            title: "Reviews & Ratings",
            desc: "Post-tour reviews help the community choose the best experiences. Rate guides, routes, and overall tour quality."
        }
    ];

    return (
        <Section title="Rides, Tours & Community" id="rides">
            <CardGrid items={items} />
        </Section>
    );
}

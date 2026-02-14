"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Trophy, HeartPulse, BarChart3, Bike } from "lucide-react";

export default function TrackingGamification() {
    const items = [
        {
            icon: Trophy,
            title: "GPS Ride Tracking",
            desc: "Track every ride with GPS precision. Distance, time, elevation gain, average speed, and route mapping — all automatically recorded."
        },
        {
            icon: Bike,
            title: "Personal Ride Timeline",
            desc: "Your complete riding history in one beautiful timeline. See every journey, every milestone, and every memory you've created on two wheels."
        },
        {
            icon: BarChart3,
            title: "Monthly & Yearly Summaries",
            desc: "Comprehensive stats breakdowns by month and year. Total distance, elevation climbed, rides completed, and time in the saddle."
        },
        {
            icon: Trophy,
            title: "Badge Collection",
            desc: "Unlock badges like First 100km, Hill Rider, Explorer, Night Rider, and more. Showcase your achievements on your profile."
        },
        {
            icon: HeartPulse,
            title: "Streak Tracking",
            desc: "Build weekly and monthly riding streaks. Stay motivated with consistency tracking and never miss a ride week."
        },
        {
            icon: BarChart3,
            title: "City & Regional Leaderboards",
            desc: "Compete with riders in your city and region. See where you rank in distance, elevation, and ride frequency."
        },
        {
            icon: Trophy,
            title: "Segment Challenges",
            desc: "Create and compete on specific route segments. Set records, challenge friends, and claim KOMs (King of the Mountain)."
        },
        {
            icon: Bike,
            title: "Trophy Cabinet",
            desc: "Display your achievements, badges, and records on your profile. Show off your riding prowess to the community."
        },
        {
            icon: HeartPulse,
            title: "Performance Analytics",
            desc: "Deep insights into your riding patterns, improvement trends, peak performance periods, and areas for growth."
        },
        {
            icon: BarChart3,
            title: "Goal Setting & Tracking",
            desc: "Set monthly distance goals, elevation targets, or ride frequency objectives. Track progress and celebrate achievements."
        }
    ];

    return (
        <Section title="Tracking & Gamification" id="tracking">
            <CardGrid items={items} />
        </Section>
    );
}

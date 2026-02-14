"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Cpu, Bike, Globe, HeartPulse } from "lucide-react";

export default function FutureVision() {
    const items = [
        {
            icon: Bike,
            title: "EV Bike Ecosystem",
            desc: "Full integration for electric motorcycles — charging station maps, range calculators, EV-specific routes, and battery health tracking."
        },
        {
            icon: Globe,
            title: "International Tour Marketplace",
            desc: "Discover and book epic rides across continents. From Himalayan expeditions to European Alps tours, go global with RideNex."
        },
        {
            icon: Cpu,
            title: "Insurance Marketplace",
            desc: "Compare and purchase bike insurance, tour coverage, and rider protection plans. One-stop shop for all riding insurance needs."
        },
        {
            icon: HeartPulse,
            title: "Riding Training Academies",
            desc: "Connect with certified training schools for beginner courses, advanced techniques, off-road skills, and track day preparation."
        },
        {
            icon: Bike,
            title: "AR Navigation Overlay",
            desc: "Augmented reality navigation projected on helmet visors or HUD. Turn-by-turn directions without taking eyes off the road."
        },
        {
            icon: Globe,
            title: "Wearable Device Integration",
            desc: "Sync with smartwatches, smart helmets, and fitness trackers. Heart rate, fatigue monitoring, and performance analytics."
        },
        {
            icon: Cpu,
            title: "AI-Powered Route Recommendations",
            desc: "Machine learning analyzes your riding style, preferences, and history to suggest perfect routes you'll love."
        },
        {
            icon: HeartPulse,
            title: "Bike-to-Bike Communication",
            desc: "Integrated mesh communication for group rides. Talk to fellow riders without phone calls or hand signals."
        },
        {
            icon: Bike,
            title: "Carbon Offset Tracking",
            desc: "Track your environmental impact and offset carbon emissions. Ride green with sustainability insights and eco-friendly tour options."
        },
        {
            icon: Globe,
            title: "Virtual Ride Experiences",
            desc: "VR-powered virtual tours and training simulations. Experience famous routes from home or practice skills in safe virtual environments."
        }
    ];

    return (
        <Section title="Future Vision">
            <CardGrid items={items} />
        </Section>
    );
}

"use client";

import ImageTextSection from "@/components/ui/ImageTextSection";
import { MapPin, Users, Calendar, Star } from "lucide-react";

export default function RideSystem() {
    const features = [
        {
            icon: MapPin,
            title: "Local & Long-Distance Rides",
            desc: "Discover rides in your city or plan epic cross-country adventures. Filter by distance, difficulty, and terrain type."
        },
        {
            icon: Users,
            title: "Group Rides & Solo Adventures",
            desc: "Join organized group rides or create your own. Connect with fellow riders and build lasting friendships on the road."
        },
        {
            icon: Calendar,
            title: "Ride Planning & Scheduling",
            desc: "Plan routes, set waypoints, and schedule rides. Get weather updates and road condition alerts for safer journeys."
        },
        {
            icon: Star,
            title: "Ride History & Memories",
            desc: "Track every ride with GPS, photos, and notes. Build your riding timeline and relive epic journeys."
        }
    ];

    return (
        <ImageTextSection
            id="rides"
            title="Ride Together. Explore Forever."
            description="From weekend coffee runs to multi-day tours, RideNex connects you with riders who share your passion. Discover new routes, join group rides, and create unforgettable memories on two wheels."
            imageSrc="/images/group-riders.png"
            imageAlt="Group of riders on mountain road"
            features={features}
            imagePosition="left"
        />
    );
}

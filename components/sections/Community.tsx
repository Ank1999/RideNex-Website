"use client";

import Section from "@/components/ui/Section";
import CardGrid from "@/components/ui/CardGrid";
import { Users, MessageCircle, Radio, Image, UserPlus, GraduationCap, Heart, Compass } from "lucide-react";

export default function Community() {
    const items = [
        {
            icon: Compass,
            title: "City Hubs",
            desc: "Join your local city hub to discover nearby rides, events, and fellow riders. Connect with your local biking community."
        },
        {
            icon: Users,
            title: "Interest-Based Groups",
            desc: "Find groups for touring, off-roading, track days, city riding, or bike-specific communities. Ride with people who share your passion."
        },
        {
            icon: MessageCircle,
            title: "Ride-Based Chat Rooms",
            desc: "Auto-created group chats for every ride. Plan routes, share updates, and stay connected before, during, and after rides."
        },
        {
            icon: Radio,
            title: "Voice Rooms for Planning",
            desc: "Live voice channels for group ride planning and real-time coordination. Discuss routes, stops, and logistics together."
        },
        {
            icon: Image,
            title: "Photo & Story Sharing",
            desc: "Share ride photos, stories, and epic moments with the community. Relive adventures and inspire fellow riders."
        },
        {
            icon: Heart,
            title: "Kudos & Engagement",
            desc: "Like, comment, and celebrate fellow riders' achievements. Build connections through positive community engagement."
        },
        {
            icon: UserPlus,
            title: "Follow Riders & Organizers",
            desc: "Follow your favorite ride organizers, tour guides, and fellow riders. Stay updated on their latest rides and adventures."
        },
        {
            icon: GraduationCap,
            title: "Mentorship Channels",
            desc: "Beginner riders connect with experienced mentors. Learn riding techniques, safety tips, and get guidance from pros."
        }
    ];

    return (
        <Section title="Community & Social Layer" id="community">
            <CardGrid items={items} />
        </Section>
    );
}

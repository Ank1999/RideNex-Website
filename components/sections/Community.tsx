"use client";

import ImageTextSection from "@/components/ui/ImageTextSection";
import { Users, MessageCircle, Heart, Trophy } from "lucide-react";

export default function Community() {
    const features = [
        {
            icon: Users,
            title: "Connect with Fellow Riders",
            desc: "Follow riders, build your network, and discover local communities. Find riding buddies who match your style and interests."
        },
        {
            icon: MessageCircle,
            title: "Forums & Group Chats",
            desc: "Join topic-based discussions, city-specific groups, and bike model communities. Share tips, stories, and advice with passionate riders."
        },
        {
            icon: Heart,
            title: "Events & Meetups",
            desc: "Discover local bike nights, charity rides, and community events. Organize meetups and build lasting friendships beyond the road."
        },
        {
            icon: Trophy,
            title: "Achievements & Recognition",
            desc: "Earn badges for milestones, participate in challenges, and climb leaderboards. Celebrate your riding journey with the community."
        }
    ];

    return (
        <ImageTextSection
            id="community"
            title="More Than Riders. We're Family."
            description="RideNex isn't just an app — it's a global community of passionate riders. Connect, share, and grow together. From local meetups to international friendships, find your tribe on two wheels."
            imageSrc="/images/community-meetup.png"
            imageAlt="Diverse group of riders at community meetup"
            features={features}
            imagePosition="right"
        />
    );
}

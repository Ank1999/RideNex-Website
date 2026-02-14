import NeonBackground from "@/components/NeonBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformOverview from "@/components/sections/PlatformOverview";
import RideSystem from "@/components/sections/RideSystem";
import Community from "@/components/sections/Community";
import TrackingGamification from "@/components/sections/TrackingGamification";
import BikerServices from "@/components/sections/BikerServices";
import Marketplace from "@/components/sections/Marketplace";
import SafetySystem from "@/components/sections/SafetySystem";
import Notifications from "@/components/sections/Notifications";
import Premium from "@/components/sections/Premium";
import FutureVision from "@/components/sections/FutureVision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
            <NeonBackground />
            <Navbar />
            <Hero />
            <PlatformOverview />
            <RideSystem />
            <Community />
            <TrackingGamification />
            <BikerServices />
            <Marketplace />
            <SafetySystem />
            <Notifications />
            <Premium />
            <FutureVision />
            <CTA />
            <Footer />
        </main>
    );
}

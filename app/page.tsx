import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import SmartGreetings from "@/components/SmartGreetings";
import Features from "@/components/Features";
import VoiceAI from "@/components/VoiceAI";
import ProactiveFollowUp from "@/components/ProactiveFollowUp";
import InventoryProviders from "@/components/InventoryProviders";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Solution />
        <ProactiveFollowUp />
        <SmartGreetings />
        <VoiceAI />
        <Features />
        <InventoryProviders />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

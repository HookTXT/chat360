import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import VoiceAI from "@/components/VoiceAI";
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
        <Features />
        <VoiceAI />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/fr/Header";
import Hero from "@/components/fr/Hero";
import Solution from "@/components/fr/Solution";
import Features from "@/components/fr/Features";
import Testimonials from "@/components/fr/Testimonials";
import FinalCTA from "@/components/fr/FinalCTA";
import Footer from "@/components/fr/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Solution />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

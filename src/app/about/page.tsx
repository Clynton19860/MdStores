import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/aboutUs/Hero";
import Story from "@/components/aboutUs/Story";
import Values from "@/components/aboutUs/Values";
import Team from "@/components/aboutUs/Team";
import CTA from "@/components/aboutUs/CTA";

export const metadata = {
  title: "About Us | DM Stores - Luxury Jewelry",
  description: "Learn about DM Stores, our story, values, and the passionate team behind our luxury jewelry collections.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Values />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
} 
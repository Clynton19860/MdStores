import { Metadata } from "next";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/aboutUs/Hero";
import Story from "@/components/aboutUs/Story";
import Values from "@/components/aboutUs/Values";
import Team from "@/components/aboutUs/Team";
import CTA from "@/components/aboutUs/CTA";

export const metadata: Metadata = {
  title: "About Us | MDStores - Fine Jewelry Collection",
  description: "Learn about MDStores's history, values, and expert team. Discover our commitment to quality, craftsmanship and customer satisfaction.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                The story of MDStores, from humble beginnings to becoming a trusted name in luxury jewelry
              </p>
            </div>
            
            <Story />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Our Principles
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                The principles that guide us in creating exceptional jewelry experiences
              </p>
            </div>
            <Values />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Our Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Our Team
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                Meet the passionate experts behind MDStores&apos;s exceptional creations
              </p>
            </div>
            <Team />
            <div className="text-center mt-12">
              <p className="text-gray-700 text-lg italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 text-transparent bg-clip-text font-semibold">
                &quot;Individually, we are experts. Together, we are passionate about creating extraordinary jewelry experiences.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Experience MDStores
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Visit Our Showroom
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                Experience our collection in person and receive personalized service
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <CTA />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
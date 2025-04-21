import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";
import ContactForm from "@/components/contactUs/ContactForm";
import ContactInfo from "@/components/contactUs/ContactInfo";
import Hero from "@/components/contactUs/Hero";
import Image from "next/image";
import MapLocation from "@/components/contactUs/MapLocation";
import FAQ from "@/components/contactUs/FAQ";

export const metadata: Metadata = {
  title: "Contact Us | MDStores",
  description: "Have questions about our jewelry or services? Contact our team for assistance, custom orders, or to schedule an appointment.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
              <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                We&apos;re here to help with any questions about our jewelry or services
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <div>
                <ContactInfo />
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop"
                    alt="Our Gold Tennis Bracelet"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Floating badge similar to landing page */}
                  <div className="absolute bottom-6 left-6 bg-white p-4 rounded-sm shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFC0CB] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Exclusive</p>
                        <p className="text-sm font-medium text-gray-900">Private Appointments Available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-gray-900">
                    Visit Our Boutique
                  </h3>
                  <p className="text-gray-700">
                    Experience our stunning jewelry collection in person at our elegant boutique. 
                    Our expert staff is ready to assist you with finding the perfect piece or 
                    creating a custom design that captures your unique style.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="tel:+14155552671" 
                      className="inline-block px-6 py-2 bg-[#FFC0CB] hover:bg-[#ffaabb] text-white font-medium rounded-sm transition-colors"
                    >
                      Schedule a Visit
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <MapLocation />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-[#FFC0CB]/10 text-[#FFC0CB] text-sm font-medium mb-4 rounded-sm">
                Customer Support
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-gray-900 mb-2">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FAQ />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 
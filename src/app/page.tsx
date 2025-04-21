import Navbar from "@/components/landingPage/Navbar";
import Hero from "@/components/landingPage/Hero";
import FeaturedProducts from "@/components/landingPage/FeaturedProducts";
import Categories from "@/components/landingPage/Categories";
import Testimonials from "@/components/landingPage/Testimonials";
import Newsletter from "@/components/landingPage/Newsletter";
import Footer from "@/components/landingPage/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

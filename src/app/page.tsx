import Contact from "@/components/Contact";
import ContainerService from "@/components/ContainerService";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import ImageCarPreFooter from "@/components/ImageCarPreFooter";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ContainerService />
      <HeroSection />
      <Contact />
      <Slider />
      <ImageCarPreFooter />
      <Footer />
    </>
  );
}

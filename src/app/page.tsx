import Contact from "@/components/Contact";
import ContainerService from "@/components/ContainerService";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ContainerService />
      <HeroSection />
      <Contact />
    </>
  );
}

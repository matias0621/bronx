import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import ContainerService from "@/components/ContainerService";
import FadeInComponent from "@/components/FadeComponent/FadeInComponent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import ImageCarPreFooter from "@/components/ImageCarPreFooter";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <FadeInComponent>
        <Header />
        <Hero />
      </FadeInComponent>

      <FadeInComponent>
        <ContainerService />
      </FadeInComponent>

      <FadeInComponent>
        <Carousel />
      </FadeInComponent>

      <FadeInComponent>
        <HeroSection />
      </FadeInComponent>

      <FadeInComponent>
        <Contact />
      </FadeInComponent>

      <FadeInComponent>
        <Slider />
      </FadeInComponent>

      <FadeInComponent>
        <ImageCarPreFooter />
      </FadeInComponent>

      <FadeInComponent>
        <Footer />
      </FadeInComponent>
    </>
  );
}

import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ServicesSection from "../components/ServicesSection";
import BrandsSection from "../components/BrandsSection";
import WhyUs from "../components/WhyUs";
import ReviewsSection from "../components/ReviewsSection";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <BrandsSection />
      <WhyUs />
      <ReviewsSection />
      <ContactForm />
    </>
  );
}

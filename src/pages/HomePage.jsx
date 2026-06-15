import { useMemo } from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import ServicesSection from "../components/ServicesSection";
import BrandsSection from "../components/BrandsSection";
import WhyUs from "../components/WhyUs";
import ReviewsSection from "../components/ReviewsSection";
import ContactForm from "../components/ContactForm";
import { getAll } from "../utils/db";

export default function HomePage() {
  const services = useMemo(() => getAll("services") || [], []);
  const reviews = useMemo(() => getAll("reviews") || [], []);

  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection services={services} />
      <BrandsSection />
      <WhyUs />
      <ReviewsSection reviews={reviews} />
      <ContactForm />
    </>
  );
}

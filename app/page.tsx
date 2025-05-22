import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PartsByMakeSection from "@/components/parts-by-make-section";
import ProductCategoriesSection from "@/components/product-categories-section";
import CallToActionSection from "@/components/call-to-action-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategoriesSection />
      <CallToActionSection />
      <ServicesSection />
      <TestimonialsSection />
      <PartsByMakeSection />
    </>
  );
}

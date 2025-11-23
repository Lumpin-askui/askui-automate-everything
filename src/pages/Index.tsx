import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import ProductShowcase from "@/components/ProductShowcase";
import CustomerStory from "@/components/CustomerStory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <CustomerStory />
      <Problems />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Products from "@/components/Products";
import Features from "@/components/Features";
import CustomerStory from "@/components/CustomerStory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";

const Index = () => {
  const customers = [
    { name: "Deutsche Bahn", logo: dbLogo },
    { name: "SEW Eurodrive", logo: sewLogo },
    { name: "Zucchetti", logo: zucchettiLogo },
    { name: "Solute", logo: soluteLogo },
    { name: "Intel Software", logo: intelLogo }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Customer Logos */}
      <section className="py-12 bg-background border-y border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Problems />
      <Products />
      <Features />
      <CustomerStory />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

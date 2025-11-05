import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";
import intelLogo from "@/assets/clients/intel.png";
import { cms } from "@/services/cms";

const customers = [
  { name: "Deutsche Bahn", logo: dbLogo },
  { name: "SEW Eurodrive", logo: sewLogo },
  { name: "Zucchetti", logo: zucchettiLogo },
  { name: "Solute", logo: soluteLogo },
  { name: "Intel Software", logo: intelLogo }
];

const Customers = () => {
  const caseStudies = cms.getAllCaseStudies();
  
  // Create a map of company names to case study slugs
  const companyToCaseStudy = new Map(
    caseStudies.map(study => [study.company, study.slug])
  );

  return (
    <section id="customers" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise customers rely on AskUI for production-grade automation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {customers.map((customer, index) => {
            const caseStudySlug = companyToCaseStudy.get(customer.name);
            const hasCaseStudy = !!caseStudySlug;
            
            const content = (
              <div className="relative flex items-center justify-center p-6 rounded-lg hover:bg-background transition-colors group cursor-pointer">
                <img
                  src={customer.logo}
                  alt={customer.name}
                  className="h-12 md:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                />
                {hasCaseStudy && (
                  <div className="absolute -top-1 -right-1 bg-accent text-primary rounded-full p-1.5 shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                )}
                {hasCaseStudy && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-primary text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Case Study
                  </div>
                )}
              </div>
            );

            return hasCaseStudy ? (
              <Link key={index} to={`/case-studies/${caseStudySlug}`} className="block">
                {content}
              </Link>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">#1</div>
            <div className="text-sm text-muted-foreground">Android World Benchmark</div>
          </div>
          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">ISO27001</div>
            <div className="text-sm text-muted-foreground">Security Certified</div>
          </div>
          <div className="text-center p-8 rounded-lg bg-background border border-border">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Supported Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;

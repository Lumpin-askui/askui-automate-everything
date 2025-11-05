import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Imprint
            </h1>
            
            <p className="mb-8 text-lg text-white/80">
              Legal information according to § 5 TMG
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Information according to § 5 TMG</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>AskUI GmbH</strong><br />
                    [Street Address]<br />
                    [Postal Code] [City]<br />
                    [Country]
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>Phone:</strong> +49 (0) [Phone Number]<br />
                    <strong>Email:</strong> info@askui.com<br />
                    <strong>Website:</strong> www.askui.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Represented by</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Managing Director Name]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Register Entry</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    <strong>Entry in:</strong> Commercial Register<br />
                    <strong>Register Court:</strong> [Court Name]<br />
                    <strong>Registration Number:</strong> HRB [Number]
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">VAT ID</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
                  DE [VAT Number]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Responsible for content according to § 55 Abs. 2 RStV</h2>
                <div className="text-muted-foreground leading-relaxed space-y-2">
                  <p>
                    [Name]<br />
                    [Street Address]<br />
                    [Postal Code] [City]<br />
                    [Country]
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Liability</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Liability for Contents</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As service providers, we are liable for own contents of these websites according to Sec. 7, 
                      paragraph 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 German Telemedia 
                      Act (TMG), service providers are not under obligation to permanently monitor submitted or 
                      stored information or to search for evidences that indicate illegal activities. Legal obligations 
                      to removing information or to blocking the use of information remain unchallenged. In this case, 
                      liability is only possible at the time of knowledge about a specific violation of law. Illegal 
                      contents will be removed immediately at the time we get knowledge of them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Liability for Links</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our offer includes links to external third party websites. We have no influence on the contents 
                      of those websites, therefore we cannot guarantee for those contents. Providers or administrators 
                      of linked websites are always responsible for their own contents. The linked websites had been 
                      checked for possible violations of law at the time of the establishment of the link. Illegal 
                      contents were not detected at the time of the linking. However, a permanent monitoring of the 
                      contents of linked websites cannot be imposed without reasonable indications that there has been 
                      a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Copyright</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Contents and compilations published on these websites by the providers are subject to German 
                      copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the 
                      scope of the copyright law require a written permission of the author or originator. Downloads 
                      and copies of these websites are permitted for private use only. The commercial use of our 
                      contents without permission of the original author is prohibited. Copyright laws of third parties 
                      are respected as long as the contents on these websites do not originate from the provider. 
                      Contributions of third parties on this site are indicated as such. However, if you notice any 
                      violations of copyright law, please inform us. Such contents will be removed immediately.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Information about the collection of personal data and the rights of data subjects can be found in 
                  our <a href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;


import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/30 border-b border-border">
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the AskUI services, you agree to be bound by these Terms of Service and all 
                  applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                  from using or accessing our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the AskUI software for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained in the Services</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may be required to register an account to access certain features of our Services. You agree 
                  to provide accurate, current, and complete information during registration and to update such 
                  information to keep it accurate, current, and complete. You are responsible for maintaining the 
                  confidentiality of your account credentials.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Acceptable Use</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the Services to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful, malicious, or illegal content</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Attempt to gain unauthorized access to any portion of the Services</li>
                  <li>Use the Services for any fraudulent or misleading purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you purchase a paid subscription, you agree to pay all fees associated with your subscription. 
                  Fees are billed in advance on a recurring basis. All fees are non-refundable except as required by 
                  law or as otherwise stated in our refund policy. We reserve the right to change our pricing with 
                  reasonable notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Services and their original content, features, and functionality are owned by AskUI and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual 
                  property laws. You may not use our trademarks, service marks, or logos without our prior written 
                  consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information on this website and in our Services is provided on an "as is" basis. To the fullest 
                  extent permitted by law, AskUI excludes all representations, warranties, and conditions relating to 
                  our Services and the use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall AskUI or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the Services, even if AskUI or an authorized representative has been notified 
                  orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to the Services immediately, without prior 
                  notice or liability, for any reason whatsoever, including without limitation if you breach the 
                  Terms. Upon termination, your right to use the Services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
                  revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Email: legal@askui.com<br />
                  Address: [Your Company Address]
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

export default TermsOfService;

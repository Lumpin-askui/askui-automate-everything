import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Upload, Mail, Link as LinkIcon, FileSpreadsheet, Globe } from "lucide-react";

const ZAPIER_WEBHOOK_URL = import.meta.env.VITE_ZAPIER_WEBHOOK_URL || "https://hooks.zapier.com/hooks/catch/15603221/uzbs47d/";

const CSVUpload = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("https://");
  const [targetUrl, setTargetUrl] = useState("https://");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
        alert("Please upload a CSV file.");
        return;
      }
      setCsvFile(file);
    }
  };

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateLinkedInUrl = (value: string): boolean => {
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i;
    return linkedinRegex.test(value);
  };

  const validateUrl = (value: string): boolean => {
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!csvFile) {
      alert("Please upload a CSV file with test cases.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    if (!validateEmail(email.trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!linkedinUrl.trim()) {
      alert("Please enter your LinkedIn URL.");
      return;
    }

    if (!validateLinkedInUrl(linkedinUrl.trim())) {
      alert("Please enter a valid LinkedIn URL.");
      return;
    }

    if (!targetUrl.trim()) {
      alert("Please enter the target URL of the application to automate.");
      return;
    }

    if (!validateUrl(targetUrl.trim())) {
      alert("Please enter a valid URL (must start with http:// or https://).");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("csvFile", csvFile);
      formData.append("email", email.trim());
      formData.append("linkedinUrl", linkedinUrl.trim());
      formData.append("targetUrl", targetUrl.trim());
      formData.append("timestamp", new Date().toISOString());

      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok && response.type !== "opaque") {
        throw new Error(`Zapier webhook returned status ${response.status}`);
      }

      setIsSubmitted(true);
      setCsvFile(null);
      setEmail("");
      setLinkedinUrl("https://");
      setTargetUrl("https://");
      // Reset file input
      const fileInput = document.getElementById("csvFile") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("There was an error submitting your file. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCsvFile(null);
    setEmail("");
    setLinkedinUrl("https://");
    setTargetUrl("https://");
    const fileInput = document.getElementById("csvFile") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-20 flex-1">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Upload Your Test Cases CSV
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Upload your CSV file with test cases and our Sales Team will return with your test cases executed on various devices. This automated test execution will provide valuable information for your POC.
              </p>
            </div>

            {/* Upload Form */}
            {!isSubmitted ? (
              <Card className="border-2 border-border/50 shadow-lg">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* CSV File Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="csvFile" className="flex items-center gap-2">
                        <FileSpreadsheet className="h-4 w-4" />
                        Test Cases CSV File
                      </Label>
                      <div className="flex items-center gap-4">
                        <Input
                          id="csvFile"
                          type="file"
                          accept=".csv,text/csv"
                          onChange={handleFileChange}
                          className="cursor-pointer"
                          required
                          disabled={isSubmitted}
                        />
                        {csvFile && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <FileSpreadsheet className="h-4 w-4" />
                            <span>{csvFile.name}</span>
                            <span className="text-xs">
                              ({(csvFile.size / 1024).toFixed(2)} KB)
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Upload a CSV file containing your test cases
                      </p>
                    </div>

                    {/* Target Application URL */}
                    <div className="space-y-2">
                      <Label htmlFor="targetUrl" className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        Target Application URL
                      </Label>
                      <Input
                        id="targetUrl"
                        type="url"
                        value={targetUrl}
                        onChange={(e) => setTargetUrl(e.target.value)}
                        placeholder="https://example.com"
                        required
                        disabled={isSubmitted}
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter the URL where we can find the application to automate
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          disabled={isSubmitted}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedinUrl" className="flex items-center gap-2">
                          <LinkIcon className="h-4 w-4" />
                          LinkedIn URL
                        </Label>
                        <Input
                          id="linkedinUrl"
                          type="url"
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          placeholder="https://linkedin.com/in/yourprofile"
                          required
                          disabled={isSubmitted}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-accent px-8"
                        disabled={!csvFile || !email.trim() || !linkedinUrl.trim() || linkedinUrl.trim() === "https://" || !targetUrl.trim() || targetUrl.trim() === "https://" || isSubmitting}
                      >
                        {isSubmitting ? (
                          "Uploading..."
                        ) : (
                          <>
                            <Upload className="h-4 w-4 mr-2" />
                            Upload & Submit
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center min-h-[400px]">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Thank you for your submission!</h2>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      Your test cases CSV file has been successfully uploaded. Our Sales Team will execute your test cases on various devices and return the results to help inform your POC.
                    </p>
                    <Button onClick={handleReset} variant="outline">
                      Upload Another File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CSVUpload;


import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send, Paperclip, CheckCircle, User, Mail, Bot } from "lucide-react";

const AgileTestingDaysEvent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submission, setSubmission] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("computer-agent");

  // Suggestion prompts
  const suggestions = [
    {
      title: "Android UI testing Agent",
      description: "You are an Android testing UI agent. Your mission is to open the X app and perform comprehensive UI testing...",
      prompt: "You are an Android testing UI agent. Your mission is to open the X app and perform comprehensive UI testing."
    },
    {
      title: "Web Application QA",
      description: "Perform an in-depth, human-like quality assurance analysis on the application...",
      prompt: "Perform an in-depth, human-like quality assurance analysis on the application."
    },
    {
      title: "PDF to Excel",
      description: "Please check if a PDF file is open on the left and Excel open to the right...",
      prompt: "Please check if a PDF file is open on the left and Excel open to the right."
    },
    {
      title: "Draw a Snowman",
      description: "Go to tldraw and draw a Snowman. Be very smooth in your drawing.",
      prompt: "Go to tldraw and draw a Snowman. Be very smooth in your drawing."
    }
  ];

  const handleSuggestionClick = (prompt: string) => {
    if (!isSubmitted) {
      setSubmission(prompt);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!submission.trim() || !firstName.trim() || !lastName.trim() || !email.trim()) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint to document submissions
      // For now, we'll just simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // In production, this would be:
      // await fetch('/api/event-submissions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ 
      //     firstName: firstName.trim(),
      //     lastName: lastName.trim(),
      //     email: email.trim(),
      //     answer: submission.trim(),
      //     event: 'agile-testing-days-2025',
      //     timestamp: new Date().toISOString()
      //   })
      // });

      setIsSubmitted(true);
      setSubmission("");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting:", error);
      alert("There was an error submitting your response. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmission("");
    setFirstName("");
    setLastName("");
    setEmail("");
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
                If you could literally automate anything about your work, what would that be?
              </h1>
              <p className="text-lg text-muted-foreground">
                Share your automation idea and enter to win amazing prizes at Agile Testing Days Berlin 2025
              </p>
            </div>

            {/* Contact Information Form */}
            <Card className="border-2 border-border/50 shadow-lg mb-6">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter your first name"
                      required
                      disabled={isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Enter your last name"
                      required
                      disabled={isSubmitted}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
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
                </div>
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card className="border-2 border-border/50 shadow-lg">
              <CardContent className="p-0">
                {/* Agent Selector Bar */}
                <div className="border-b border-border px-4 py-3 bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Select value={selectedAgent} onValueChange={setSelectedAgent}>
                      <SelectTrigger className="w-[200px] border-0 bg-transparent shadow-none focus:ring-0">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <SelectValue placeholder="Select agent" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-agent">Computer Agent</SelectItem>
                        <SelectItem value="web-agent">Web Agent</SelectItem>
                        <SelectItem value="mobile-agent">Mobile Agent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Empty Chat State or Success Message */}
                {!isSubmitted ? (
                  <div className="flex flex-col min-h-[500px]">
                    {/* Chat Area */}
                    <div className="flex-1 flex items-center justify-center p-8 min-h-[200px]">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-4">
                          <MessageCircle className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          No messages yet. Start the conversation below.
                        </p>
                      </div>
                    </div>

                    {/* Suggestion Cards */}
                    <div className="px-4 pb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {suggestions.map((suggestion, index) => (
                          <Card
                            key={index}
                            className="cursor-pointer hover:bg-muted/50 transition-colors border-border/50"
                            onClick={() => handleSuggestionClick(suggestion.prompt)}
                          >
                            <CardContent className="p-4">
                              <h4 className="font-semibold text-sm mb-1">{suggestion.title}</h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {suggestion.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-border p-4">
                      <form onSubmit={handleSubmit} className="flex gap-2">
                        <div className="flex-1 relative">
                          <Textarea
                            value={submission}
                            onChange={(e) => setSubmission(e.target.value)}
                            placeholder="Type your message here..."
                            className="min-h-[60px] max-h-[200px] pr-12 resize-none"
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e);
                              }
                            }}
                            disabled={isSubmitted}
                          />
                          <div className="absolute bottom-3 right-3 flex items-center gap-2">
                            <button
                              type="button"
                              className="p-1.5 rounded-md hover:bg-muted transition-colors"
                              aria-label="Attach file"
                              disabled={isSubmitted}
                            >
                              <Paperclip className="h-4 w-4 text-muted-foreground" />
                            </button>
                          </div>
                        </div>
                        <Button
                          type="submit"
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-accent px-6"
                          disabled={!submission.trim() || !firstName.trim() || !lastName.trim() || !email.trim() || isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send
                            </>
                          )}
                        </Button>
                      </form>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Press Enter to send, Shift+Enter for new line
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[500px] p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">Thank you for your submission!</h2>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      Your automation idea has been recorded. The top 3 most creative and impactful ideas will win amazing LEGO prizes!
                    </p>
                    <Button onClick={handleReset} variant="outline">
                      Submit Another Idea
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Prizes Info */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🥇</div>
                    <h3 className="font-semibold mb-2">1st Place</h3>
                    <p className="text-sm text-muted-foreground">
                      LEGO Ferrari SF-24 F1 Car
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🥈</div>
                    <h3 className="font-semibold mb-2">2nd Place</h3>
                    <p className="text-sm text-muted-foreground">
                      LEGO Iron Man Mark 3
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🥉</div>
                    <h3 className="font-semibold mb-2">3rd Place</h3>
                    <p className="text-sm text-muted-foreground">
                      LEGO Orchid Flower
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Winners will be announced at the end of Agile Testing Days Berlin 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgileTestingDaysEvent;


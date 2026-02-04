import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/layout/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-amber-50/30 pt-10 pb-20">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7 pt-10 lg:pt-0">
            <FadeIn delay={0.1} direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6 border border-accent/20">
                <ShieldCheck className="w-4 h-4" />
                <span>California's Leading FMT Specialists Since 2014</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Finally Restore Your <span className="text-primary italic">Gut Health</span> With Proven FMT Treatment
              </h1>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                Dr. Jonathan Birch has helped over 1,000 patients achieve lasting relief with our proven FMT protocol. 
                Whether you're dealing with C. diff, recurring digestive issues, or other gut health concerns, we're here to help.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="grid grid-cols-3 gap-8 mb-10 border-t border-b border-gray-100 py-6">
                <div>
                  <div className="text-3xl font-serif font-bold text-accent mb-1">1,000+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Patients Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-accent mb-1">90%+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-accent mb-1">10+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium">Years Experience</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 rounded-lg bg-accent hover:bg-accent/90 text-white font-bold text-base shadow-lg shadow-accent/20">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-lg border-primary text-primary font-bold hover:bg-primary/5">
                Call (805) 500-8300
              </Button>
            </FadeIn>
            
            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
               <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Licensed Medical Clinic</span>
               <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> HIPAA Compliant</span>
               <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-primary" /> Super Donor Screening</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.6} direction="left">
              <Card className="border-none shadow-2xl shadow-primary/10 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">Schedule Your Consultation</h3>
                    <p className="text-sm text-muted-foreground">
                      Dr. Birch will review your case and discuss the right treatment path together with you.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" className="bg-white border-gray-200" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Smith" className="bg-white border-gray-200" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-white border-gray-200" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-white border-gray-200" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="concern">Primary Concern</Label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-200">
                          <SelectValue placeholder="Select your concern..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="c-diff">C. difficile (C. diff)</SelectItem>
                          <SelectItem value="gut-health">Gut Health Consultation</SelectItem>
                          <SelectItem value="digestive">Digestive Wellness</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your situation (optional)</Label>
                      <Textarea id="message" placeholder="Share any additional details..." className="bg-white border-gray-200 min-h-[80px]" />
                    </div>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-12 text-base shadow-md mt-2">
                      Request My Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1 mt-4">
                      <ShieldCheck className="w-3 h-3" /> Your information is 100% confidential and HIPAA protected
                    </p>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 bg-white flex items-center justify-center">
          <div className="container px-4 text-center">
            <FadeIn>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Contact <span className="italic text-primary">Us</span></h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We are here to help you on your journey to optimal health.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <FadeIn direction="right">
                <div className="bg-muted/30 p-10 rounded-[2rem]">
                  <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          2323 Oak Park Lane Suite 102<br/>
                          Santa Barbara, CA 93105
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Call Us</h3>
                        <p className="text-muted-foreground">
                          (805) 500-8300
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Mon-Fri 9am-5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">
                          info@puretyclinic.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Hours</h3>
                        <ul className="text-muted-foreground text-sm space-y-1">
                          <li className="flex justify-between w-40"><span>Mon - Fri</span> <span>9:00 - 5:00</span></li>
                          <li className="flex justify-between w-40"><span>Saturday</span> <span>By Appt</span></li>
                          <li className="flex justify-between w-40"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Form */}
              <FadeIn direction="left">
                <div className="bg-white p-2">
                  <h2 className="font-serif text-3xl mb-2">Send a Message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you shortly.</p>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Jane" className="bg-gray-50 border-gray-200 h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" className="bg-gray-50 border-gray-200 h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jane@example.com" className="bg-gray-50 border-gray-200 h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200 h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">How can we help?</Label>
                      <Textarea id="message" placeholder="Tell us about your health goals..." className="bg-gray-50 border-gray-200 min-h-[150px]" />
                    </div>

                    <Button size="lg" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="h-[400px] bg-gray-200 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gray-300 animate-pulse" />
           <p className="relative z-10 font-bold text-gray-500 flex items-center gap-2">
             <MapPin className="w-6 h-6" /> Google Maps Integration
           </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

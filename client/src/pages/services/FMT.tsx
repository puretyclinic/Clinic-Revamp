import { FadeIn } from "@/components/layout/FadeIn";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShieldCheck, CheckCircle2, ArrowRight, Cloud, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import * as gtag from "@/lib/gtag";
import { useState } from "react";

export default function FMT() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/rebootbase@icloud.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          Name: `${formData.get("firstName")} ${formData.get("lastName")}`,
          Email: formData.get("email"),
          Phone: formData.get("phone"),
          Subject: formData.get("subject"),
          Message: formData.get("message"),
          _subject: `Purety Clinic Website - New FMT Inquiry from ${formData.get("firstName")} ${formData.get("lastName")}`,
          _replyto: formData.get("email"),
          _cc: "Drjonathan@puretyclinic.com",
          _template: "table",
        }),
      });

      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        gtag.event({
          action: "submit_form",
          category: "Contact",
          label: "FMT Inquiry",
        });

        toast({
          title: "Message Sent!",
          description: "Dr. Jonathan will review your message shortly.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Could not send message. Please call us at (805) 500-8300.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative py-24 bg-primary text-white flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-overlay" />
          <div className="container px-4 text-center relative z-10">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <span className="text-lg leading-none">💩</span>
                <span>Safety, quality and efficacy driven</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-6">Fecal Microbiota <span className="italic text-accent">Transplant</span> (FMT)</h1>
              <div className="flex justify-center gap-4 mt-8">
                 <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild>
                    <a href="tel:+18055008300">Call or Text (805) 500-8300</a>
                 </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <FadeIn>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">FMT Specialists</h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed mb-12">
                 <p className="mb-4">
                   If you are looking for a fecal transplant (FMT), look no further. We have helped hundreds of people since 2015 achieve excellent results with our small batch microbiome transfer program using <a href="https://static1.squarespace.com/static/5e8750872ceab220c4d4f137/t/670ee470c3b707053be6ff95/1729029233938/Purety+Clinic+Clinical+Considerations+for+Donor+Selection+and+Screening+.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">superior donors</a>. Enemas, capsules, oral liquid, and colonoscopy are the best options.
                 </p>
                 <p className="mb-4">
                   Safety, quality and efficacy is our focus for you.
                 </p>
                 <p className="mb-4">
                   We are based in Santa Barbara, California, and we frequently do initial remote consultations.
                 </p>
                 <p className="font-bold text-foreground mb-4">
                   Start by either calling or texting us at 805-500-8300, or please tell us your story below.
                 </p>
                 <p>
                   We are compassionate and respond quickly. We look forward to getting to know you and doing our best for you. Have a wonderful day.
                 </p>
              </div>

              {/* Form */}
              <div className="bg-accent/5 p-8 rounded-2xl mb-16 border border-accent/20">
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name (required)</Label>
                        <Input id="firstName" name="firstName" required className="bg-white" data-testid="input-fmt-firstName" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name (required)</Label>
                        <Input id="lastName" name="lastName" required className="bg-white" data-testid="input-fmt-lastName" />
                      </div>
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="email">Email (required)</Label>
                     <Input id="email" name="email" type="email" required className="bg-white" data-testid="input-fmt-email" />
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="phone">Phone (required)</Label>
                     <Input id="phone" name="phone" type="tel" required className="bg-white" data-testid="input-fmt-phone" />
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="subject">Subject (required)</Label>
                     <Input id="subject" name="subject" required className="bg-white" data-testid="input-fmt-subject" />
                   </div>
                   
                   <div className="space-y-2">
                     <Label htmlFor="message">Message (required)</Label>
                     <Textarea id="message" name="message" required className="bg-white min-h-[150px]" data-testid="input-fmt-message" />
                   </div>
                   
                   <Button type="submit" size="lg" disabled={sending} className="w-full md:w-auto px-8" data-testid="button-fmt-submit">
                     {sending ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</> : "Submit"}
                   </Button>
                 </form>
              </div>

              {/* Testimonials */}
              <div className="mb-16">
                 <h3 className="font-serif text-2xl font-bold mb-8 text-center">These are just a few recent comments from our wonderful patients:</h3>
                 
                 <div className="space-y-8">
                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"I am eternally grateful for these guys. I was dealing with an extremely drug induced panic disorder (PFS). These people gave me my life back!"</p>
                     <footer className="font-bold text-sm text-gray-500">- SH</footer>
                   </blockquote>

                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"I am tremendously grateful for what Dr. Birch has done for me. Before undergoing his FMT protocol, I had severe eczema that covered nearly every part of my body, and extreme gastrointestinal issues. Six months following the FMT, my skin is 90% better and I have had gastrointestinal improvements as well. I continue to get better and I sincerely believe it is due to the skill and expertise of Dr. Birch."</p>
                     <footer className="font-bold text-sm text-gray-500">- JB</footer>
                   </blockquote>
                   
                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"I have been seeing Dr. Birch for eight years and can confidently say his combination of expertise, extensive knowledge, patience, and understanding makes him an outstanding doctor. 1.5 years ago, I was hospitalized for 17 days due severe Ulcerative Colitis symptoms, nearly experiencing colon rupture. I was told I would have to be on a chemo drug the rest of my life at only 31 years old. When I came out of the hospital I met with Dr. Birch and he created a plan to fully heal my body. In only three months after being hospitalized, the inflammation in the colon returned to normal, I was symptom-free, and made a full recovery. In less than six months from being hospitalized I was completely free of all medication and haven't needed any since."</p>
                     <footer className="font-bold text-sm text-gray-500">- JC</footer>
                   </blockquote>

                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"I had been suffering with diarrhea for 9 months when finally got a diagnosis of c-diff. I was referred to Dr. Birch. I wanted to avoid the harsh antibiotics that kill off everything in the gut. He guided me through the FMT process and I have had very good results. The diarrhea ended with 6 weeks and my stools were back to normal within a few months. My energy is excellent! The results were so good that if I had to do it again, I wouldn't think twice. Dr. Birch and the clinic are kind, compassionate, and very responsive."</p>
                     <footer className="font-bold text-sm text-gray-500">- AA</footer>
                   </blockquote>

                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"Dr. Jonathan Birch changed my life. I highly recommend consulting with him if you have c diff, or a gut microbiome dysregulation issue. Under his care I was able to treat the c diff infection AND stop taking all medicine related to Inflammatory Bowel disease... So far it has been 18 months since my first FMT treatment (I had two, approximately 10 months apart) and 9 months since my last dose of biologics. I feel great with no IBD issues - no diarrhea, cramping, or pain!"</p>
                     <footer className="font-bold text-sm text-gray-500">- PM</footer>
                   </blockquote>
                   
                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"I would like to thank Dr. Jonathan Birch and all the staff at Purety Clinic for the kind and careful treatment of the FMT I had in early 2022. I am doing very well. The FMT procedure was very successful - the infection is gone, and after my recent colonoscopy, the doctor told me I was in complete remission with no sign of UC. I am very grateful to Dr. Birch and all the staff who helped to make this procedure possible! Thank you all so very much!"</p>
                     <footer className="font-bold text-sm text-gray-500">- KS</footer>
                   </blockquote>

                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"Thank you so very much!!! I have been doing great after treatment, many symptoms and body pains have gone down and no gut pain! Thank you from the bottom of my heart, I am so grateful!"</p>
                     <footer className="font-bold text-sm text-gray-500">- KBS</footer>
                   </blockquote>
                   
                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">'It has just been a few days and I am feeling SO much better. Wow! A HUGE improvement.'</p>
                     <footer className="font-bold text-sm text-gray-500">- TD</footer>
                   </blockquote>

                   <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
                     <p className="italic text-gray-700 mb-2">"It has been a long time since we have communicated but I wanted to reach out and tell you how successful my FMT last September was. I went from a starch free diet, back pain, knuckle pain, serious brain fog, shoulder pain, and achilles issues that limited runs to less than three miles, to almost a full (albiet still quite healthy) diet and pain/brain fog free. I have even been running 10+ mile runs pain free. I tell people that I feel like I did when I was in my 20's (I'm now 37). Thank you"</p>
                     <footer className="font-bold text-sm text-gray-500">- MH</footer>
                   </blockquote>
                 </div>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
                 <p>
                   Since 2014, Dr Birch has been beyond grateful to help hundreds of patients achieve amazing recoveries using FMT. He is known as one of the leading fecal transplant doctors in the country and in the meantime has become an expert in gastrointestinal conditions. His goal is to create an ideal protocol during the initial consultation and figure out a plan with you to optimize lasting results. <a href="/contact" className="text-primary hover:underline font-bold">Contact us today</a> to discuss if you may be eligible.
                 </p>
                 <p>
                   The FMT treatment is performed with an extract of the stool of an extensively screened 'super' donor is suspended in solution and delivered to the patient via enema, which is then retained by the patient for at least 30 minutes yet usually hours as it comes out with the next bowel movement, or it is further concentrated and triple encapsulated for oral consumption. The protocol and dose amount depends on the specific patient. Another option is to have it implanted throughout the large intestine by colonoscopy here in Southern California. This treatment delivers the complete flora of a perfectly healthy, vital, healthy metabolic individual.
                 </p>
                 <p className="font-bold text-foreground mt-8 mb-4">
                   Fecal Microbiota Transplantion, also known as FMT, human probiotic infusion, bacteriotherapy, and fecal transplant, is a powerful infusion of healthy colon flora which has been used historically to treat patients with clostridium difficile, aka C difficile infection, inflammatory bowel disease ( crohn's disease and ulcerative colitis ), irritable bowel syndrome, autoimmune disease, dysbiotic gut flora as well as other conditions.
                 </p>
                 
                 <div className="bg-primary/5 p-6 rounded-xl my-8">
                   <p className="mb-4">
                     At <a href="/" className="text-primary hover:underline font-bold">Purety Family Medical Clinic</a>, our fecal transplant doctors offer fecal microbiota transplantation via retention enema and via encapsulation, neither of which has any known serious adverse effects.
                   </p>
                   <p className="mb-0">
                     Currently, the <a href="#" className="text-primary hover:underline">FDA allows</a> fecal transplantation to be given for antibiotic resistant Clostridium difficile infections, also known as C Difficile, or CDI (*compassionate use can be applied for). Because of FDA regulation, we use this therapy for people with c diff. FMT has shown to have a well <strong>over 90% cure rate of refractory (antibiotic resistant) C diff infections</strong>.
                   </p>
                 </div>
                 
                 <p>
                   Since 2014 we have served all of California as well as those who would like to travel here. Closest to us we have served Santa Barbara county with FMT fecal microbiota transplant including Santa Barbara, Goleta, Carpinteria, Isla Vista, Hope Ranch, Summerland, Solvang, Santa Maria, Buellton, Lompoc, Guadalupe, and Montecito. We also frequently welcome our patients from Ventura County, San Luis Obispo County, Los Angeles County, and beyond.
                 </p>

                 <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-6">Fecal Microbiota Transplantation History</h3>
                 <p>
                   Fecal transplantion has proven to successfully re-establish a healthy gut flora in the recipient of healthy donor stool. In the Journal of Clinical Gastroenterology in September 2010, the Gastroenterology Department in New South Wales, Australia showed a <a href="#" className="text-primary hover:underline">durable alteration of the colonic microbiota by the administration of donor fecal flora</a>. At 24 weeks after a fecal microbiota transplant procedure, bacterial populations in patients' fecal samples consisted predominantly of bacteria derived from healthy donor samples. Similar comparisons were made and each recipient's baseline sample was statistically significant with a Friedman test.
                 </p>
                 
                 <ul className="list-disc pl-6 space-y-4 my-6">
                    <li>The first written record of fecal bacteria transplantion treatment is Ge Hong, who in the 4th Century CE successfully used oral-fecal suspension treatments for food poisoning and severe diarrhea.</li>
                    <li>Li Shizhen in 16th century CE used fermented, fresh, dried, or infant gut bacteria transplantation for severe diarrhea, vomiting and constipation.</li>
                    <li>Christian Franz Paullini used by mouth fecal suspensions transplants successfully for dysentery in the 17th century.</li>
                    <li>Before 1982, Robert Carroll, ND used fecal transplant for a variety of <strong>autoimmune</strong> and <strong>GI conditions</strong>.</li>
                    <li>Published in the Lancet, 1989 Jan 21 <a href="#" className="text-primary hover:underline">Treatment of ulcerative colitis by implantation of normal colonic flora</a>. Bennet had 11 years of Ulcerative colitis, 7 years of steroid-dependency with severe symptoms if he dropped below 30 mg/day steroid. At 3 months post fecal microbiota transplantation retention enema he had no symptoms, came off steroid, and colonoscopy revealed no active inflammation. Dr Bennet cured his own ulcerative colitis UC IBD with fecal transplant. This was the first documented <strong>IBD treatment success</strong> with fecal transplantation.</li>
                    <li>This led to the journal article published in the medical journal of Australia in 1989: Med J Aust. 1989 May 15;150(10):604 <a href="#" className="text-primary hover:underline">Bowel-flora alteration: a potential cure for <strong>inflammatory bowel disease</strong> and <strong>irritable bowel syndrome</strong>?</a> Borody, George, Brandi, Noonan, Cole, Hyland, Morgan, Maysey, Moore-Jones D.</li>
                    <li>Up to now, fecal transplantion has been used to treat an array of gastrointestinal conditions successfully. To learn about the amazing success stories of FMT and other health information we encourage you to take a look at <a href="http://thepowerofpoop.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">thepowerofpoop.com</a>.</li>
                 </ul>
                 
                 <div className="flex justify-center my-8">
                   <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                      <a href="tel:+18055008300">Call Now (805) 500-8300</a>
                   </Button>
                 </div>

                 <h3 className="text-2xl font-serif font-bold text-primary mt-12 mb-6">Donor Screening is of utmost importance</h3>
                 <p>
                   We pride ourselves on going above and beyond the screening guidelines in the United States to ensure that the fecal matter transplantion samples are of the absolute highest quality standards. Only a small handful of donors are used because of this as well as it allows for frequent screening. The donors we use are considered 'super donors' , extremely healthy in every possible way.
                 </p>
                 
                 <h4 className="text-xl font-bold mt-8 mb-4">All stool donor meet the following criteria:</h4>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>No prior antibiotics use</li>
                   <li>Born vaginally</li>
                   <li>Breastfed</li>
                   <li>BMI &lt;24 & waist circumference in healthy range</li>
                   <li>High metabolic rate and physical fitness.</li>
                   <li>Ideal personal and family health history.</li>
                   <li>Ideal intestinal function.</li>
                 </ul>

                 <h4 className="text-xl font-bold mt-8 mb-4">The donors do not suffer from any chronic disease, which includes:</h4>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>Psychological disorders</li>
                   <li>Autoimmune disease</li>
                   <li>Atopy and allergy</li>
                   <li>Chronic pain</li>
                   <li>Gastrointestinal conditions</li>
                   <li>Metabolic disorders</li>
                   <li>Cancer and malignancy</li>
                 </ul>
                 
                 <h4 className="text-xl font-bold mt-8 mb-4">Other considerations that warrant exclusion from donating:</h4>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>High risk travel history</li>
                   <li>High risk sexual activity</li>
                   <li>Age less than 6 and greater than 39</li>
                 </ul>
                 
                 <h4 className="text-xl font-bold mt-8 mb-4">Donors are screened via stool and blood laboratory testing for but not limited to:</h4>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>HIV 1 and 2, 4th generation ELISA testing</li>
                   <li>Treponema pallidum (Syphilis)</li>
                   <li>Hepatitis A</li>
                   <li>Hepatitis B</li>
                   <li>Hepatitis C</li>
                   <li>H Pylori fecal antigen</li>
                   <li>Clostridium difficile by PCR for Toxin A and B</li>
                   <li>Ova & Parasites exam</li>
                 </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

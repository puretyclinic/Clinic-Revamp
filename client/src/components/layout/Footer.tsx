import { Link } from "wouter";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="block mb-6">
                <span className="font-serif text-3xl font-bold tracking-tight text-white">
                  PURETY
                </span>
                <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-white/60">
                  Family Medical Clinic
                </span>
              </a>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Holistic, integrative, and functional medicine in Santa Barbara, CA. 
              Curing the entire body, not just the malady.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Google Reviews Badge */}
            <a href="https://www.google.com/search?q=Purety+Family+Medical+Clinic+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all group">
               <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
               </div>
               <div>
                 <div className="flex text-[#FBBC05]">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                   ))}
                 </div>
                 <div className="text-[10px] text-gray-500 font-bold leading-tight mt-0.5 group-hover:text-primary transition-colors">
                   5.0 Rating | 80+ Reviews
                 </div>
               </div>
            </a>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-primary">Explore</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-primary">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <span>
                  123 Healing Way, Suite 100<br/>
                  Santa Barbara, CA 93101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(805) 500-8300</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@puretyclinic.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-primary">Hours</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Fri</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2 pt-2">
                <span>Saturday</span>
                <span>By Appointment</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Purety Family Medical Clinic. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

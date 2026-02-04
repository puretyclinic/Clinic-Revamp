import { ArrowLeft, Check, Download, ExternalLink, Play, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/layout/FadeIn";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-green-500/30 pb-32">
      {/* Header / Nav */}
      <div className="flex justify-center pt-8 pb-4">
        {/* Simple pill indicator similar to the top of the screenshot */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500/20" />
          <div className="w-2 h-2 rounded-full bg-green-500/20" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>

      <main className="container max-w-md mx-auto px-6 pt-6">
        <FadeIn direction="up">
          <h1 className="text-2xl font-bold mb-2 text-white">Claim Sequence Preview</h1>
          <p className="text-gray-400 text-sm mb-8">
            Here's what you'll do to claim your $20 from Honeygain
          </p>

          <div className="space-y-4">
            {/* Step 1 */}
            <StepCard 
              number="1" 
              title="Visit Honeygain" 
              description="Click the button to open partner site"
              duration="30s"
              icon={<ExternalLink className="w-4 h-4" />}
            />

            {/* Step 2 */}
            <StepCard 
              number="2" 
              title="Create Account" 
              description="Sign up with your email"
              duration="1 min"
              icon={<UserPlus className="w-4 h-4" />}
            />

            {/* Step 3 */}
            <StepCard 
              number="3" 
              title="Download App" 
              description="Install on your device"
              duration="1 min"
              icon={<Download className="w-4 h-4" />}
            />

            {/* Step 4 */}
            <StepCard 
              number="4" 
              title="Activate" 
              description="Keep running in background"
              duration="30s"
              icon={<Play className="w-4 h-4" />}
            />
          </div>

          {/* Earnings Summary Card */}
          <div className="mt-8 bg-[#111] rounded-2xl p-6 border border-white/5 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-900 to-green-500/20" />
             <div className="flex justify-between items-end">
               <div>
                 <p className="text-gray-400 text-xs mb-1">Estimated total time</p>
                 <p className="text-white font-medium text-lg">~3 minutes</p>
               </div>
               <div className="text-right">
                 <p className="text-gray-400 text-xs mb-1">Potential earnings</p>
                 <p className="text-green-500 font-bold text-2xl">+$20</p>
               </div>
             </div>
          </div>
        </FadeIn>
      </main>

      {/* Bottom Fixed Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-[#0a0a0a] border-t border-white/5 z-50">
        <div className="container max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            className="w-full sm:w-1/3 bg-transparent border-white/10 text-white hover:bg-white/5 hover:text-white h-12 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          
          <a href="https://r.honeygain.me/YOUR_CODE" target="_blank" rel="noopener noreferrer" className="w-full sm:w-2/3">
             <Button 
              className="w-full bg-[#00D676] hover:bg-[#00c06a] text-black font-bold h-12 rounded-xl shadow-[0_0_20px_rgba(0,214,118,0.2)] transition-all active:scale-[0.98]"
            >
              Begin Claim Sequence
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function StepCard({ number, title, description, duration, icon }: { number: string, title: string, description: string, duration: string, icon: React.ReactNode }) {
  return (
    <div className="bg-[#111] rounded-2xl p-4 border border-white/5 flex items-start gap-4 hover:border-white/10 transition-colors cursor-pointer group">
      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold shrink-0 group-hover:bg-green-500/20 transition-colors">
        {number}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-0.5">
          <h3 className="font-bold text-white text-sm">{title}</h3>
          <span className="text-xs text-gray-500 font-mono">{duration}</span>
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

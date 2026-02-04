import { ArrowLeft, Check, Download, ExternalLink, Play, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-[#0a0a0a] text-white font-sans selection:bg-green-500/30 flex flex-col overflow-hidden">
      {/* Top Indicators */}
      <div className="flex justify-center py-4 shrink-0">
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Main Content Area - Flexible height */}
      <main className="flex-1 container max-w-md mx-auto px-5 flex flex-col min-h-0">
        <div className="shrink-0 mb-4">
          <h1 className="text-xl font-bold mb-1 text-white">Claim Sequence Preview</h1>
          <p className="text-gray-400 text-xs">
            Here's what you'll do to claim your $20 from Honeygain
          </p>
        </div>

        {/* Steps List - Scrollable if absolutely needed on tiny screens, but fits on most */}
        <div className="flex-1 flex flex-col gap-2 min-h-0 justify-center">
          <StepCard 
            number="1" 
            title="Visit Honeygain" 
            description="Click the button to open partner site"
            duration="30s"
            icon={<ExternalLink className="w-3 h-3" />}
          />

          <StepCard 
            number="2" 
            title="Create Account" 
            description="Sign up with your email"
            duration="1 min"
            icon={<UserPlus className="w-3 h-3" />}
          />

          <StepCard 
            number="3" 
            title="Download App" 
            description="Install on your device"
            duration="1 min"
            icon={<Download className="w-3 h-3" />}
          />

          <StepCard 
            number="4" 
            title="Activate" 
            description="Keep running in background"
            duration="30s"
            icon={<Play className="w-3 h-3" />}
          />
        </div>

        {/* Earnings Summary Card - Compact */}
        <div className="mt-3 mb-4 shrink-0 bg-[#111] rounded-xl p-4 border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-900 to-green-500/20" />
           <div className="flex justify-between items-end">
             <div>
               <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">Estimated Time</p>
               <p className="text-white font-medium text-base">~3 mins</p>
             </div>
             <div className="text-right">
               <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">Potential Earnings</p>
               <p className="text-green-500 font-bold text-xl">+$20</p>
             </div>
           </div>
        </div>
      </main>

      {/* Bottom Action Bar - Compact */}
      <div className="shrink-0 p-4 pb-6 bg-[#0a0a0a] border-t border-white/5 z-50">
        <div className="container max-w-md mx-auto flex flex-col gap-3">
          <Button 
            variant="ghost" 
            className="w-full h-10 text-gray-400 hover:text-white hover:bg-white/5 text-sm font-normal"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> Back
          </Button>
          
          <a href="https://r.honeygain.me/YOUR_CODE" target="_blank" rel="noopener noreferrer" className="w-full">
             <Button 
              className="w-full bg-[#00D676] hover:bg-[#00c06a] text-black font-bold h-12 text-base rounded-xl shadow-[0_0_15px_rgba(0,214,118,0.15)] active:scale-[0.98]"
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
    <div className="bg-[#111] rounded-xl p-3 border border-white/5 flex items-center gap-3 hover:border-white/10 transition-colors cursor-pointer group shrink-0">
      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-sm shrink-0 group-hover:bg-green-500/20 transition-colors">
        {number}
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="font-bold text-white text-sm truncate pr-2">{title}</h3>
          <span className="text-[10px] text-gray-500 font-mono whitespace-nowrap">{duration}</span>
        </div>
        <p className="text-gray-400 text-xs leading-tight truncate">{description}</p>
      </div>
    </div>
  );
}

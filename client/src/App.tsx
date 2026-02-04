import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Shop from "@/pages/Shop";
import ClaimPreview from "@/pages/ClaimPreview";
import RegenerativeMedicine from "@/pages/services/RegenerativeMedicine";
import IVTherapy from "@/pages/services/IVTherapy";
import NaturopathicMedicine from "@/pages/services/NaturopathicMedicine";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/regenerative" component={RegenerativeMedicine} />
      <Route path="/services/iv-therapy" component={IVTherapy} />
      <Route path="/services/naturopathic" component={NaturopathicMedicine} />
      <Route path="/doctors" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/shop" component={Shop} />
      <Route path="/claim" component={ClaimPreview} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import * as gtag from "@/lib/gtag";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import ClaimPreview from "@/pages/ClaimPreview";
import RegenerativeMedicine from "@/pages/services/RegenerativeMedicine";
import IVTherapy from "@/pages/services/IVTherapy";
import NaturopathicMedicine from "@/pages/services/NaturopathicMedicine";
import FMT from "@/pages/services/FMT";
import CancerSupport from "@/pages/services/CancerSupport";
import BlogPost from "@/pages/blog/BlogPost";

import OzoneTherapy from "@/pages/services/OzoneTherapy";
import HormoneReplacement from "@/pages/services/HormoneReplacement";
import PlasmaExchange from "@/pages/services/PlasmaExchange";
import NatureTherapies from "@/pages/services/NatureTherapies";
import LocationPage from "@/pages/LocationPage";
import Testimonials from "@/pages/Testimonials";
import FAQ from "@/pages/FAQ";
import Admin from "@/pages/Admin";
import DrBirch from "@/pages/DrBirch";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/regenerative" component={RegenerativeMedicine} />
      <Route path="/prp-santa-barbara" component={RegenerativeMedicine} />
      <Route path="/stem-cell-therapy-santa-barbara" component={RegenerativeMedicine} />
      <Route path="/services/iv-therapy" component={IVTherapy} />
      <Route path="/services/naturopathic" component={NaturopathicMedicine} />
      <Route path="/services/fmt" component={FMT} />
      <Route path="/fecal-transplant" component={FMT} />
      <Route path="/services/cancer-support" component={CancerSupport} />
      <Route path="/services/ozone-therapy" component={OzoneTherapy} />
      <Route path="/ebo2-santa-barbara" component={OzoneTherapy} />
      <Route path="/eboo-santa-barbara" component={OzoneTherapy} />
      <Route path="/services/hormone-replacement" component={HormoneReplacement} />
      <Route path="/services/plasma-exchange" component={PlasmaExchange} />
      <Route path="/services/nature-therapies" component={NatureTherapies} />
      
      <Route path="/locations/:city" component={LocationPage} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/faqs" component={FAQ} />

      <Route path="/doctors" component={About} />
      <Route path="/dr-jonathan-birch" component={DrBirch} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/shop" component={Shop} />
      <Route path="/shop/product/:slug" component={ProductDetail} />
      <Route path="/claim" component={ClaimPreview} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function PageviewTracker() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    gtag.pageview(location);
  }, [location]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <PageviewTracker />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

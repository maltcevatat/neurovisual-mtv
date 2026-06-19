import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Thanks from "@/pages/Thanks";
import Offer from "@/pages/Offer";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PersonalDataConsent from "@/pages/PersonalDataConsent";
import MarketingConsent from "@/pages/MarketingConsent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/thanks" component={Thanks} />
      <Route path="/offer" component={Offer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/personal-data-consent" component={PersonalDataConsent} />
      <Route path="/marketing-consent" component={MarketingConsent} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </TooltipProvider>
  );
}

export default App;

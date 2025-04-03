import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCookieConsent } from "@/hooks/useCookieConsent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { showCookieBanner } = useCookieConsent();

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Suspense fallback={<div className="flex-grow flex items-center justify-center">Loading...</div>}>
          <Router />
        </Suspense>
        <Footer />
      </div>
      {showCookieBanner && <CookieBanner />}
      <Toaster />
    </>
  );
}

export default App;

import { Suspense, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Language } from "@/contexts/LanguageContext";

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
  
  // Ustawiamy język dokumentu za pomocą localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language || 'pl';
    document.documentElement.lang = storedLanguage;
  }, []);

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

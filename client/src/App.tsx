import { Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorSinglesSection from "@/components/AuthorSinglesSection";
import CollaborativeSinglesSection from "@/components/CollaborativeSinglesSection";

function Router() {
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieScriptConsent"); // Używamy tej samej zmiennej

    // Jeśli zgoda nie została jeszcze wyrażona, wyświetlamy banner
    if (!cookieConsent) {
      if (
        window.CookieScript &&
        typeof window.CookieScript.show === "function"
      ) {
        window.CookieScript.show(); // Pokazujemy banner
      }
    } else {
      console.log("Cookies already accepted, banner not shown");
    }
  }, []);

  const acceptCookies = () => {
    // Zapisujemy w localStorage, że cookies zostały zaakceptowane
    localStorage.setItem("cookieScriptConsent", "true");

    // Jeśli metoda hide jest dostępna, ukrywamy baner
    if (window.CookieScript && typeof window.CookieScript.hide === "function") {
      window.CookieScript.hide(); // Ukrywa baner
    }
  };

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/singles-autorskie" component={AuthorSinglesSection} />
      <Route path="/singles-wspolne" component={CollaborativeSinglesSection} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Suspense
          fallback={
            <div className="flex-grow flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Router />
        </Suspense>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;

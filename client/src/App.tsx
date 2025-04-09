import { Suspense, useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorSinglesSection from "@/components/AuthorSinglesSection";
import CollaborativeSinglesSection from "@/components/CollaborativeSinglesSection";
import { FaAngleUp } from "react-icons/fa";

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
      <Route path="/single-autorskie" component={AuthorSinglesSection} />
      <Route path="/single-wspolne" component={CollaborativeSinglesSection} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg dark:bg-gray-700 dark:hover:bg-gray-900"
      >
        <FaAngleUp />
      </button>
    )
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
      <ScrollToTop />
    </>
  );
}

export default App;

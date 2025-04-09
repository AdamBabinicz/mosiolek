import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground z-50"
          size="icon"
          aria-label="Przewiń do góry"
        >
          <IoArrowUp className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;

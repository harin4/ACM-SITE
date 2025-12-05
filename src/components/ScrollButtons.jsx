import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setShowUp(scrollTop > 100);
      setShowDown(scrollTop < scrollHeight - clientHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  const scrollDown = () => window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      <button
        onClick={scrollUp}
        className={`group w-12 h-12 rounded-full glass-card flex items-center justify-center 
          transition-all duration-500 hover:scale-110 hover:border-cyan/40
          ${showUp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
        aria-label="Scroll up"
      >
        <ChevronUp className="w-5 h-5 text-cyan group-hover:animate-bounce-soft" />
      </button>

      <button
        onClick={scrollDown}
        className={`group w-12 h-12 rounded-full glass-card flex items-center justify-center 
          transition-all duration-500 hover:scale-110 hover:border-cyan/40
          ${showDown ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"}`}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5 text-cyan group-hover:animate-bounce-soft" />
      </button>
    </div>
  );
};

export default ScrollButtons;

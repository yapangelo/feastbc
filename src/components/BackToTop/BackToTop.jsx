import React, { useState, useEffect } from "react";
import "./BackToTop.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ⬆
    </button>
  );
};

export default BackToTop;

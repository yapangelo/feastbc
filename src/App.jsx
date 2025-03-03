import React, { useRef } from "react";
import "./App.scss";
import GrandFeast from "./pages/GrandFeast/GrandFeast";
import Header from "./components/Header/Header";
import Prayer from "./pages/Prayer/Prayer";
import Socials from "./pages/Socials/Socials";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  // Create refs for each section
  const grandFeastRef = useRef(null);
  const prayerRef = useRef(null);
  const socialsRef = useRef(null);

  // Function to scroll to the referenced section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        grandFeastRef={grandFeastRef}
        prayerRef={prayerRef}
        socialsRef={socialsRef}
      />
      <div ref={grandFeastRef}>
        <GrandFeast />
      </div>
      <div ref={prayerRef}>
        <Prayer />
      </div>
      <div ref={socialsRef}>
        <Socials />
      </div>
      <BackToTop />
      <footer className="app__footer">
        <div className="app__footer-container"></div>
      </footer>
    </div>
  );
}

export default App;

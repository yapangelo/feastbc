import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Home from "./pages/Home/Home";
import SponsorPage from "./pages/SponsorPage/SponsorPage";
import Header from "./components/Header/Header";
import BackToTop from "./components/BackToTop/BackToTop";
import PrayerPage from "./pages/PrayerPage/PrayerPage";

function App() {
  // Create refs for each section
  const grandFeastRef = useRef(null);
  const prayerRef = useRef(null);
  const socialsRef = useRef(null);

  // Function to scroll to the referenced section smoothly and slowly
  const scrollToSection = (ref) => {
    if (ref.current) {
      const targetPosition = ref.current.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1200; // Adjust for slower/faster scrolling (in milliseconds)
      let startTime = null;

      const easeInOutQuad = (t) =>
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure it stops at 1
        const easedProgress = easeInOutQuad(progress); // Apply easing

        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <BrowserRouter>
      {/* Header stays inside App.jsx and receives scrollToSection + refs */}
      <Header
        scrollToSection={scrollToSection}
        grandFeastRef={grandFeastRef}
        prayerRef={prayerRef}
        socialsRef={socialsRef}
      />
      <Routes>
        {/* Pass refs & scroll function to Home so it can attach them to sections */}
        <Route
          path="/"
          element={
            <Home
              scrollToSection={scrollToSection}
              grandFeastRef={grandFeastRef}
              prayerRef={prayerRef}
              socialsRef={socialsRef}
            />
          }
        />
        <Route path="/sponsorpage" element={<SponsorPage />} />
        <Route path="/prayerpage" element={<PrayerPage />} />
      </Routes>
      <BackToTop />
      <footer className="app__footer">
        <div className="app__footer-container"></div>
      </footer>
    </BrowserRouter>
  );
}

export default App;

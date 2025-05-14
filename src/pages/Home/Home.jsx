import React, { useState, useEffect } from "react";
import GrandFeast from "../GrandFeast/GrandFeast";
import Prayer from "../Prayer/Prayer";
import Socials from "../Socials/Socials";
import Sponsors from "../../components/Sponsors/Sponsors.jsx";
import NewsletterPopup from "../../components/NewsLetterPopup/NewsLetterPopup";

function Home({ grandFeastRef, socialsRef, formRef, sponsorRef }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Newsletter Popup */}
      {showPopup && <NewsletterPopup onClose={() => setShowPopup(false)} />}
      {/* Main Content */}
      <div ref={grandFeastRef}>
        <GrandFeast formRef={formRef} />
      </div>
      <div ref={sponsorRef}>
        <Sponsors />
      </div>
      {/* <div ref={prayerRef}>
        <Prayer />
      </div> */}
      <div ref={socialsRef}>
        <Socials />
      </div>
    </>
  );
}

export default Home;

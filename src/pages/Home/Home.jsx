import React from "react";
import GrandFeast from "../GrandFeast/GrandFeast";
import Prayer from "../Prayer/Prayer";
import Socials from "../Socials/Socials";

function Home({ grandFeastRef, prayerRef, socialsRef }) {
  return (
    <>
      <div ref={grandFeastRef}>
        <GrandFeast />
      </div>
      <div ref={prayerRef}>
        <Prayer />
      </div>
      <div ref={socialsRef}>
        <Socials />
      </div>
    </>
  );
}

export default Home;

import "./Sponsors.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import platinumlogo from "../../assets/icons/platinum.png";
import platinum1 from "../../assets/images/sponsors/burnabysouthdenta2l.jpg";
import platinum2 from "../../assets/images/sponsors/platinum-mercado-delacruz.png";
import platinum3 from "../../assets/images/sponsors/wfg.jpg";
import silverlogo from "../../assets/icons/silver.png";
import silver1 from "../../assets/images/sponsors/drfranciscavaldez.jpg";
import silver2 from "../../assets/images/sponsors/silver-chris-estrella.jpg";
import silver3 from "../../assets/images/sponsors/silver-jp-villanueva.png";
import silver4 from "../../assets/images/sponsors/silver-vhec.png";
import Button from "../Button/Button";
// import SponsorTierList from "../SponsorTierList/SponsorTierList";

const Sponsors = () => {
  const sponsorsplatinum = [
    { image: platinum1, link: "https://www.burnabysouthdental.com/" },
    {
      image: platinum2,
      link: "https://mdcpa.ca/",
    },
    {
      image: platinum3,
    },
  ];

  const sponsorssilver = [
    {
      image: silver1,
    },
    {
      image: silver2,
      link: "https://chris-estrella.remaxmtnview.ca/",
    },
    {
      image: silver3,
    },
    {
      image: silver4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsorsplatinum.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [sponsorsplatinum.length]);

  return (
    <div className="sponsors">
      <h1 className="sponsors__title">EVENT SPONSORS</h1>
      <img
        src={platinumlogo}
        alt="platinum-logo"
        className="sponsors__title-icon"
      />
      <div className="sponsors__slideshow">
        <div
          className="sponsors__slides-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sponsorsplatinum.map((sponsor, index) => (
            <div className="sponsors__slide" key={index}>
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.image}
                  alt={`Sponsor ${index + 1}`}
                  className="sponsors__slide-image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <img
        src={silverlogo}
        alt="silver-logo"
        className="sponsors__title-icon"
      />
      <div className="sponsors__gallery">
        {sponsorssilver.map((sponsor, index) => (
          <div key={index} className="sponsors__gallery-imgcontainer">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.image}
                alt={`Sponsor ${index + 1}`}
                className="sponsors__gallery-image"
              />
            </a>
          </div>
        ))}
      </div>
      <Link to="/sponsorpage">
        <Button text={"Be A Sponsor"} className={"button--primary"} />
      </Link>
      {/* <SponsorTierList /> */}
    </div>
  );
};

export default Sponsors;

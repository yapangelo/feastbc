import "./Sponsors.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import gold1 from "../../assets/images/sponsors/burnabysouthdenta2l.jpg";
import silver1 from "../../assets/images/sponsors/drfranciscavaldez.jpg";
import gold2 from "../../assets/images/sponsors/md-consulting.jpg";
import gold3 from "../../assets/images/sponsors/wfg.jpg";
import Button from "../Button/Button";
// import SponsorTierList from "../SponsorTierList/SponsorTierList";

const Sponsors = () => {
  const sponsorsgold = [
    { image: gold1, link: "https://www.burnabysouthdental.com/" },
    {
      image: gold2,
    },
    {
      image: gold3,
    },
  ];

  const sponsorssilver = [
    {
      image: silver1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sponsorsgold.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [sponsorsgold.length]);

  return (
    <div className="sponsors">
      <h1 className="sponsors__title">EVENT SPONSORS</h1>
      <h2 className="sponsors__tier">Platinum</h2>
      {/* <div className="sponsors__gallery-gold">
        {sponsorsgold.map((sponsor, index) => (
          <div key={index} className="sponsors__gallery-imgcontainer-gold">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img
                src={sponsor.image}
                alt={`Sponsor ${index + 1}`}
                className="sponsors__gallery-image-gold"
              />
            </a>
          </div>
        ))}
      </div> */}

      <div className="sponsors__slideshow">
        <div
          className="sponsors__slides-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {sponsorsgold.map((sponsor, index) => (
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

      <h2 className="sponsors__tier">Silver</h2>
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

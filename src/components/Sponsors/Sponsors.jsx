import "./Sponsors.scss";
import { Link } from "react-router-dom";
import gold1 from "../../assets/images/sponsors/burnabysouthdental.jpg";
import silver1 from "../../assets/images/sponsors/drfranciscavaldez.jpg";
import sponsor3 from "../../assets/images/sponsors/feast.jpg";
import sponsor4 from "../../assets/images/sponsors/feast.jpg";
import sponsor5 from "../../assets/images/sponsors/feast.jpg";
import sponsor6 from "../../assets/images/sponsors/feast.jpg";
import Button from "../Button/Button";
// import SponsorTierList from "../SponsorTierList/SponsorTierList";

const Sponsors = () => {
  const sponsorsgold = [{ image: gold1, link: "https://thefeastbc.com/" }];

  const sponsorssilver = [
    {
      image: silver1,
      link: "https://www.burnabysouthdental.com/",
    },
  ];

  return (
    <div className="sponsors">
      <h1 className="sponsors__title">EVENT SPONSORS</h1>
      <h2 className="sponsors__tier">Gold</h2>
      <div className="sponsors__gallery">
        {sponsorsgold.map((sponsor, index) => (
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

import "./Sponsors.scss";
import { Link } from "react-router-dom";
import sponsor1 from "../../assets/images/sponsors/feast.jpg";
import sponsor2 from "../../assets/images/sponsors/feast.jpg";
import sponsor3 from "../../assets/images/sponsors/feast.jpg";
import sponsor4 from "../../assets/images/sponsors/feast.jpg";
import sponsor5 from "../../assets/images/sponsors/feast.jpg";
import sponsor6 from "../../assets/images/sponsors/feast.jpg";
import Button from "../Button/Button";
import SponsorTierList from "../SponsorTierList/SponsorTierList";

const Sponsors = () => {
  const sponsors = [{ image: sponsor1, link: "https://thefeastbc.com/" }];

  return (
    <div className="sponsors">
      <h1 className="sponsors__title">EVENT SPONSORS</h1>
      <div className="sponsors__gallery">
        {sponsors.map((sponsor, index) => (
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
      <SponsorTierList />
    </div>
  );
};

export default Sponsors;

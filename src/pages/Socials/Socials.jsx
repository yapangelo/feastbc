import "./Socials.scss";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";

const Socials = () => {
  return (
    <div className="social">
      <h1 className="social__title">GET SOCIAL</h1>
      <div className="social__icontainer">
        <a href="https://www.instagram.com/thefeastvancouver/" target="_blank">
          <img
            src={insta}
            alt="Instagram"
            className="social__icontainer-icon"
          />
        </a>
        <a href="https://www.facebook.com/TheFeastVancouver/" target="_blank">
          <img
            src={facebook}
            alt="Facebook"
            className="social__icontainer-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;

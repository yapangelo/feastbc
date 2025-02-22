import "./Home.scss";
import feastlogo from "../../assets/images/BC_Feast_Vertical.png";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import lettherebelight from "../../assets/images/lettherebelight.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={feastlogo} alt="feastlogo" className="hero__logo" />
        <h1 className="hero__welcome">WELCOME HOME</h1>
        <p className="hero__text">
          God wants to bless and love everyone, reaching out to every area of
          our life – spiritual, physical, family, and our financial life. The
          Light of Jesus ( LOJ ) Family welcomes everyone with open arms.
        </p>
        <Link to="/about">
          <Button text="join us" className="hero__button button--primary" />
        </Link>
      </div>
      <div className="feature">
        <div className="feature__container">
          <div className="feature__container-flex">
            <h2 className="feature__title">Grand Feast BC</h2>
            <p className="feature__text">St. Mary’s Gym, Vancouver</p>
            <p className="feature__text">August 25, 2025</p>
          </div>
          <div className="feature__container-flex">
            <img
              src={lettherebelight}
              alt="grand feast theme"
              className="feature__themeart"
            />
          </div>
        </div>
        <div className="feature__button-container">
          <Link to="/grandfeast">
            <Button
              text="more info"
              className="feature__button button--primary"
            />
          </Link>
        </div>
      </div>
      <div className="prayer">
        <h1 className="prayer__title">NEED A PRAYER?</h1>
        <p className="prayer__text">
          Sometimes, when life feels overwhelming, and all you have are
          questions, you start feeling hopeless and a bit lost. But it’s during
          these times that someone praying for you can give you the hope you
          need to go on and face life’s challenges.
        </p>
        <Button text="ask for a prayer" className="button--primary" />
      </div>
      <div className="social">
        <h1 className="social__title">GET SOCIAL</h1>
        <div className="social__icontainer">
          <Link to="https://www.instagram.com/thefeastvancouver/">
            <img src={insta} alt="insta" className="social__icontainer-icon" />
          </Link>
          <Link to="https://www.facebook.com/TheFeastVancouver/">
            <img
              src={facebook}
              alt="facebook"
              className="social__icontainer-icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;

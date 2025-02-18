import "./Home.scss";
import feastlogo from "../../assets/images/BC_Feast_Vertical.png";
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
    </div>
  );
};
export default Home;

import React from "react";
import "./Home.scss";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import GrandFeast from "../GrandFeast/GrandFeast";
import Button from "../../components/Button/Button";

const Home = ({ scrollToSection, aboutRef }) => {
  return (
    <div className="master">
      {/* <div className="home">
        <h1 className="home__welcome">WELCOME HOME</h1>
        <p className="home__text">
          God wants to bless and love everyone, reaching out to every area of
          our life – spiritual, physical, family, and our financial life. The
          Light of Jesus (LOJ) Family welcomes everyone with open arms.
        </p>
        <Button
          text="Join us"
          className="home__button button--primary"
          onClick={() => scrollToSection(aboutRef)}
        />
      </div> */}
    </div>
  );
};

export default Home;

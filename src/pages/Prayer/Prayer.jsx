import "./Prayer.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Prayer = () => {
  return (
    <div className="prayer">
      <h1 className="prayer__title">NEED A PRAYER?</h1>
      <p className="prayer__text">
        Sometimes, when life feels overwhelming, and all you have are questions,
        you start feeling hopeless and a bit lost. But it’s during these times
        that someone praying for you can give you the hope you need to go on and
        face life’s challenges.
      </p>
      <div className="prayer__button-container">
        {/* <Link to="/prayerpage"> */}
        <Button text="Ask for a prayer" className="button--primary" />
        {/* </Link> */}
      </div>
    </div>
  );
};
export default Prayer;

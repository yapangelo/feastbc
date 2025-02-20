import "./Events.scss";
import feastlogo from "../../assets/images/bcfeast-vertical-black.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="events">
      <div className="events__content">
        <img src={feastlogo} alt="feast-logo" />
        <Link to="/">
          <Button className="button--primary" text="come home" />
        </Link>
      </div>
    </div>
  );
};
export default Events;

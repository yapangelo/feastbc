import "./Prayer.scss";
import Button from "../../components/Button/Button";

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
        <Button text="Ask for a prayer" className="button--primary" />
      </div>
    </div>
  );
};
export default Prayer;

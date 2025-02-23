import "./NavPopup.scss";
import { Link } from "react-router-dom";

const NavPopup = ({ onClose }) => {
  const handleLinkClick = (e) => {
    onClose();
  };

  return (
    <nav className="navpopup">
      <div className="navpopup__page-container">
        <Link to="/" onClick={handleLinkClick}>
          <h1 className="navpopup__page">HOME</h1>
        </Link>
        <Link to="/grandfeast" onClick={handleLinkClick}>
          <h1 className="navpopup__page">GRAND FEAST</h1>
        </Link>
        <Link to="/events" onClick={handleLinkClick}>
          <h1 className="navpopup__page">EVENTS</h1>
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          <h1 className="navpopup__page">ABOUT</h1>
        </Link>
      </div>
    </nav>
  );
};
export default NavPopup;

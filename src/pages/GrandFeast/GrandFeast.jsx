import "./GrandFeast.scss";
import bo from "../../assets/images/boedited.jpg";
import arun from "../../assets/images/arunedited.jpg";
import monch from "../../assets/images/monchedited.jpg";
import hero from "../../assets/images/grandfeast-hero.jpg";
import Button from "../../components/Button/Button";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const GrandFeast = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f63htos", // Service ID
        "template_a8ihvuh", // Template ID
        form.current,
        "0mk-5r8TGGIOvV0Uy" // Public Key
      )
      .then(
        (result) => {
          setPopupMessage("Email sent successfully!"); // Success message
          setPopupType("success"); // Set popup type to success
          setShowPopup(true); // Show the popup

          form.current.reset();
        },
        (error) => {
          setPopupMessage("Failed to send the email. Please try again."); // Error message
          setPopupType("error"); // Set popup type to error
          setShowPopup(true); // Show the popup
        }
      );
  };

  React.useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer); // Clear timer if the component unmounts
    }
  }, [showPopup]);

  return (
    <div className="grandfeast">
      <div className="grandfeast__hero">
        <img
          src={hero}
          alt="grand feast details"
          className="grandfeast__hero-image"
        />
      </div>
      <div className="grandfeast__copy">
        <p className="grandfeast__copy-text">
          The Grand Feast BC is an annual gathering that unites people from all
          walks of life for a day of worship, inspiration, and spiritual
          renewal. Rooted in the mission of the Light of Jesus Community, it
          serves as a beacon of faith, unity, and hope, welcoming both Catholics
          and non-Catholics to experience God’s love through uplifting music,
          heartfelt prayers, and life-changing talks. This year’s event will
          take place on Saturday, August 30, 2025, at the Bell Performing Arts
          Theatre in Surrey, featuring renowned speakers Bro. Bo Sanchez, Bro.
          Arun Gogna, and Bro. Monching Bueno. With a legacy of hosting
          transformative experiences, the Grand Feast continues to be a place
          where individuals, families, and communities come together to be
          refreshed in spirit and strengthened in faith, offering inspiration,
          healing, and a renewed sense of purpose to all who attend.
        </p>
      </div>
      <div className="grandfeast__speakers">
        <h1 className="grandfeast__speakers-title">OUR SPEAKERS</h1>
        <div className="grandfeast__speakers-gallery">
          <img
            src={bo}
            alt="Bo Sanchez"
            className="grandfeast__speakers-image"
          />
          <img
            src={arun}
            alt="Arun Gogna"
            className="grandfeast__speakers-image"
          />
          <img
            src={monch}
            alt="Monching Bueno"
            className="grandfeast__speakers-image"
          />
        </div>
      </div>
      <div className="grandfeast__form">
        <h1 className="grandfeast__form-title">RESERVE YOUR TICKETS!</h1>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact__form-name"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="contact__form-email"
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone"
            className="contact__form-phone"
          />
          <input
            type="number"
            name="user_numberoftickets"
            placeholder="Number of Tickets"
            className="contact__form-tickets"
            min="1"
            required
          />

          <Button
            type="submit"
            text="Submit"
            value="Send"
            className="button--primary contact__form-button"
          />
        </form>

        {/* Popup Notification */}
        {showPopup && (
          <div className={`popup ${popupType}`}>
            <p>{popupMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default GrandFeast;

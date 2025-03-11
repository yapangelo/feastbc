import "./Form.scss";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "../../components/Button/Button";
import ConsentPopup from "../ConsentPopup/ConsentPopup";

const Form = ({
  title = "RESERVE YOUR TICKETS!", // Default title
  inputs = [], // Dynamic input fields
  emailConfig = {
    serviceId: "service_f63htos",
    templateId: "template_a8ihvuh",
    publicKey: "0mk-5r8TGGIOvV0Uy",
  },
  buttonText = "Submit", // Customizable button text
}) => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");
  const [consentGiven, setConsentGiven] = useState(false);
  const [showConsentPopup, setShowConsentPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailConfig.serviceId, // Configurable Service ID
        emailConfig.templateId, // Configurable Template ID
        form.current,
        emailConfig.publicKey // Configurable Public Key
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

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <section className="form">
      <h1 className="form__title">{title}</h1>

      <form ref={form} onSubmit={sendEmail} className="form__fields">
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            className="form__inputs"
            min={input.min}
            required={input.required}
          />
        ))}
        <div className="form__checkbox">
          <input
            type="checkbox"
            id="consent"
            checked={consentGiven}
            onChange={() => setConsentGiven(!consentGiven)}
            required
          />
          <label htmlFor="consent">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevents navigation
                setShowConsentPopup(true); // Opens popup
              }}
            >
              I agree to the Privacy Policy and consent to my information being
              collected and processed.
            </a>
          </label>
        </div>

        <div className="form__button-container">
          <Button
            type="submit"
            text={buttonText}
            className="button--primary form__button"
            disabled={!consentGiven}
          />
        </div>
      </form>

      {showPopup && (
        <div className={`form__popup ${popupType}`}>
          <p>{popupMessage}</p>
        </div>
      )}

      {/* Show Privacy Policy Popup if triggered */}
      {showConsentPopup && (
        <ConsentPopup onClose={() => setShowConsentPopup(false)} />
      )}
    </section>
  );
};

export default Form;

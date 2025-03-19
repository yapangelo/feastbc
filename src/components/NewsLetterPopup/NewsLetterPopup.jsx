import React, { useState } from "react";
import "./NewsLetterPopup.scss";

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwwVkj5-q7PTrF5k106M-YeZ-JbaaKxVvGQpwXnrrqmap-5kG59Tcni6vXrynjr4ifp/exec",
        {
          method: "POST",
          mode: "cors", // Ensure CORS handling
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json(); // Read the response

      if (response.ok) {
        console.log("Success:", data);
        setSubmitted(true);
      } else {
        console.error("Server Error:", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="newsletter-popup">
      <div className="newsletter-popup__content">
        {!submitted ? (
          <>
            <h2>Stay Updated!</h2>
            <p>Sign up for our newsletter to receive the latest updates.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            <button className="newsletter-popup__close" onClick={onClose}>
              ✖
            </button>
          </>
        ) : (
          <>
            <h2>Thank You!</h2>
            <p>You’ve successfully subscribed to our newsletter.</p>
            <button className="newsletter-popup__close" onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup;

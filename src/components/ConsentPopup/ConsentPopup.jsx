import "./ConsentPopup.scss";
import close from "../../assets/close.svg";

const ConsentPopup = ({ onClose }) => {
  return (
    <div className="consentpopup">
      <div className="consentpopup__date">
        <p className="consentpopup__policy">Effective 03/11/25</p>
        <img
          src={close}
          alt="close"
          className="consentpopup__close"
          onClick={onClose}
        />
      </div>

      <p className="consentpopup__policy">
        The Light of Jesus Community values your privacy. This Privacy Policy
        explains how we collect, use, and protect your personal information when
        you visit our website, https://thefeastbc.com/. By using our Site, you
        consent to the collection, use, and disclosure of your information as
        outlined in this policy.
      </p>
      <p className="consentpopup__policy">
        When you interact with our Site, we may collect the following personal
        information: Personal Identifiable Information (PII): name, email
        address, phone number, company name.
      </p>
      <p className="consentpopup__policy">
        We only collect personal information with your consent and for purposes
        that a reasonable person would consider appropriate.
      </p>
      <p className="consentpopup__policy">
        We may use your personal information to: Provide and improve our
        services. Respond to inquiries or support requests. Process transactions
        or registrations. Ensure security and fraud prevention. We do not sell
        or share your personal information with third parties without your
        consent, except as required by law.
      </p>
      <p className="consentpopup__policy">
        By submitting your personal information, you agree to this policy. You
        can withdraw your consent at any time by contacting us at
        lojvancouver@gmail.com
      </p>
      <p className="consentpopup__policy">
        We store your personal information securely and only for as long as
        necessary for the purposes stated above. We implement reasonable
        security measures to protect your data, but no online transmission is
        100% secure. Use our Site at your own risk.
      </p>
      <p className="consentpopup__policy">
        We may disclose your personal information if required by law or in
        response to legal requests (e.g., court orders, government
        investigations).
      </p>
      <p className="consentpopup__policy">
        Under BC’s Personal Information Protection Act (PIPA) and PIPEDA, you
        have the right to: Access, correct, or delete your personal information.
        Request details on how we use your data. Withdraw consent for future
        data collection. To make a request, contact us at
        lojvancouver@gmail.com.
      </p>
      <p className="consentpopup__policy">
        Our Site may contain links to third-party websites. We are not
        responsible for their privacy policies. Review their policies before
        providing any personal data.
      </p>
      <p className="consentpopup__policy">
        We may update this policy from time to time. The latest version will be
        posted on this page with an updated Effective Date.
      </p>
      <p className="consentpopup__policy">
        If you have any questions about this Privacy Policy, please contact us:
        Email: lojvancouver@gmail.com.
      </p>
    </div>
  );
};
export default ConsentPopup;

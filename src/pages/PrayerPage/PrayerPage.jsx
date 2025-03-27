import { useEffect } from "react";
import "./PrayerPage.scss";
import Form from "../../components/Form/Form";

const PrayerPage = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll"); // Disable scrolling

    return () => {
      document.body.classList.remove("no-scroll"); // Re-enable scrolling when leaving the page
    };
  }, []);

  return (
    <div className="prayerpage">
      <h1 className="prayerpage__title">check</h1>
      <div className="prayerpage__form">
        <Form
          title="BE A SPONSOR!"
          inputs={[
            {
              type: "text",
              name: "user_name",
              placeholder: "Name",
              required: true,
            },
            {
              type: "text",
              name: "user_company",
              placeholder: "Company",
              required: true,
            },
            {
              type: "email",
              name: "user_email",
              placeholder: "Email",
              required: true,
            },
            {
              type: "tel",
              name: "user_phone",
              placeholder: "Phone",
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PrayerPage;

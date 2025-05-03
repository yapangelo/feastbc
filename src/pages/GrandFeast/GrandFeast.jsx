import "./GrandFeast.scss";
import Speaker from "../../components/Speaker/Speaker";
import Form from "../../components/Form/Form";
import hero from "../../assets/images/grandfeast-hero.jpg";
import bo from "../../assets/images/bo.png";
import monching from "../../assets/images/monching.png";
import arun from "../../assets/images/arun1.png";

const GrandFeast = () => {
  return (
    <section className="grandfeast">
      <div className="grandfeast__hero">
        <img
          src={hero}
          alt="grand feast details"
          className="grandfeast__hero-image"
        />
      </div>
      <div className="grandfeast__copy">
        <h1 className="grandfeast__copy-title">Grand Feast BC 2025</h1>
        <p className="grandfeast__copy-text grandfeast__copy-text--padding-bottom">
          The Grand Feast BC is a gathering that unites people from all walks of
          life for a day of worship, inspiration, and spiritual renewal. Rooted
          in the mission of the Light of Jesus Community, it serves as a beacon
          of faith, unity, and hope, welcoming both Catholics and non-Catholics
          to experience God’s love through uplifting music, heartfelt prayers,
          and life-changing talks.
        </p>
        <p className="grandfeast__copy-text">
          This year’s event will take place on Saturday, August 30, 2025, at the
          Bell Performing Arts Theatre in Surrey, featuring renowned speakers
          Bro. Bo Sanchez, Bro. Arun Gogna, and Bro. Monching Bueno. With a
          legacy of hosting transformative experiences, the Grand Feast
          continues to be a place where individuals, families, and communities
          come together to be refreshed in spirit and strengthened in faith,
          offering inspiration, healing, and a renewed sense of purpose to all
          who attend.
        </p>
      </div>
      <div className="grandfeast__speakers">
        <h1 className="grandfeast__speakers-title">OUR SPEAKERS</h1>
        <div className="grandfeast__speakers-container">
          <Speaker
            className="grandfeast__speakers-speaker"
            image={bo}
            name="Bo Sanchez"
            title="Founder, The Feast"
          />
          <Speaker
            image={monching}
            name="Monching Bueno"
            title="Country Builder, Feast Canada"
            className="grandfeast__speakers-speaker"
          />
          <Speaker
            className="grandfeast__speakers-speaker"
            image={arun}
            name="Arun Gogna"
            title="Regional Builder, Feast Mega Manila"
          />
        </div>
      </div>

      <section>
        <Form
          title="RESERVE YOUR TICKETS!"
          inputs={[
            {
              type: "text",
              name: "user_name",
              placeholder: "Name",
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
            {
              type: "number",
              name: "user_numberoftickets",
              placeholder: "Number of Tickets",
              min: 1,
              required: true,
            },
          ]}
        />
      </section>
    </section>
  );
};
export default GrandFeast;

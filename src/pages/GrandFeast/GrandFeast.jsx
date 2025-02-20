import "./GrandFeast.scss";
import bo from "../../assets/images/boedited.jpg";
import arun from "../../assets/images/arunedited.jpg";
import monch from "../../assets/images/monchedited.jpg";
import feastvideo from "../../assets/videos/grandfeast-video.mp4";

const GrandFeast = () => {
  return (
    <div className="grandfeast">
      <div className="grandfeast__hero">
        <div className="grandfeast__hero-overlay">
          <h2 className="grandfeast__hero-title">GRAND FEAST BC</h2>
        </div>
        <video
          src={feastvideo}
          className="grandfeast__hero-video"
          controls
          autoPlay
          muted
          loop
        />
      </div>
      <div className="grandfeast__copy">
        <h1 className="grandfeast__copy-title">COME JOIN US!</h1>
        <p className="grandfeast__copy-text">
          The <strong>Grand Feast BC</strong> is an annual gathering that brings
          together people from <strong>all walks of life</strong> for a powerful
          day of worship, inspiration, and spiritual renewal. Rooted in the
          mission of the Light of Jesus Community, this event serves as a beacon
          of faith, unity, and hope,
          <strong>inviting both Catholics and non-Catholics</strong>
          to experience God’s love in a profound way. Through uplifting music,
          heartfelt prayers, and life-changing talks, the Grand Feast creates an
          atmosphere where attendees can deepen their relationship with God and
          find encouragement in their personal journeys.
        </p>
        <p className="grandfeast__copy-text">
          This year’s Grand Feast will be held on{" "}
          <strong>
            Saturday, August 30, 2025, at the Bell Performing Arts Theatre in
            Surrey,
          </strong>
          featuring renowned speakers Bro. Bo Sanchez, Bro. Arun Gogna and Bro.
          Monching Bueno. With a legacy of hosting inspiring events, the Grand
          Feast continues to be a place of encounter—where individuals,
          families, and communities come together to be refreshed in spirit and
          strengthened in faith. Whether you are seeking inspiration, healing,
          or a renewed sense of purpose, the Grand Feast is a celebration of
          God’s grace that <strong> welcomes everyone with open arms</strong>.
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
    </div>
  );
};
export default GrandFeast;

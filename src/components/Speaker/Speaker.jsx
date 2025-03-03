import "./Speaker.scss";

const Speaker = ({ image, name, title }) => {
  return (
    <div className="speaker">
      <img src={image} alt={name} className="speaker__image" />
      <div className="speaker__overlay">
        <h3 className="speaker__name">{name}</h3>
        <p className="speaker__title">{title}</p>
      </div>
    </div>
  );
};
export default Speaker;

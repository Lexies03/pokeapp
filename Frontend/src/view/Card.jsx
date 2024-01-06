import "../../styles/card.css";

const Card = ({ name, img, type }) => {
  const newtype = type.join(", ");
  return (
    <div className="cardContainer">
      <h3 className="pokemonName">{name.toUpperCase()}</h3>
      <img
        src={img}
        alt={name}
        style={{ borderRadius: "10px", width: "200px", height: "200px" }}
      />
      <p className="pokemonType">{newtype}</p>
    </div>
  );
};

export default Card;

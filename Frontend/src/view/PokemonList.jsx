import Card from "../view/Card";
import "../../styles/pokemonList.css";
import "../../styles/card.css";

const PokemonList = ({ pokemons }) => {
  
  return (
    <div className="cardMainContainer">
      <ul className="pokemonCard_container">
        {pokemons.map((pokemon) => {
          return (
            <li key={pokemon._id} className="pokemonCard_li">
              <Card name={pokemon.name} img={pokemon.img} type={pokemon.type} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;

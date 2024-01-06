import { useEffect, useState } from "react";
//views
import Header from "../view/Header";
import CustomButton from "../view/CustomButton";
import PokemonCard from "../view/PokemonList";

//model
import pokemonModel from "../model/PokemonModel";

function PokemonController() {
  const [pokemons, setPokemons] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    async function fetchData() {
      return pokemonModel.getPokemons(limit, skip);
    }

    fetchData().then((pokemons) => {
      console.log(pokemons);
      setPokemons(pokemons);
    });
  }, [limit, skip]);

  const handleLoadMore = () => {
    setLimit(limit + 20);
  };

  return (
    <div>
      <Header headerValue="Pokemons" />
      <PokemonCard pokemons={pokemons} />
      <CustomButton btnValue="Load More" handleLoadMore={handleLoadMore} />
    </div>
  );
}

export default PokemonController;

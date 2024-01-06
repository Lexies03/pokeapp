class PokemonModel {
  constructor() {}

  async getPokemons(limit, skip) {
    try {
      const response = await fetch(
        `http://localhost:3001/pokemons?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error("Failed to fetch pokemons");
    }
  }
}

const model = new PokemonModel();
export default model;

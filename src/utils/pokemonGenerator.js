class Pokemon {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.isCaught = false;
  }
}

class PokemonArray {
  constructor() {
    this.pokemon = [];
  }
}


export async function pokemonGenerator() {
  const pokemonArray = new PokemonArray();

  const apiBase = "https://pokeapi.co/api/v2/pokemon/";

  while (pokemonArray.pokemon.length < 20) {
    const pokemonId = getRandomFirstGenPokemonId();

    try {
      const response = await fetch(apiBase + pokemonId);
      if (!response.ok) {
        throw new Error("API request failed");
      }

      const pokemonData = await response.json();
      let pokemonName = pokemonData.species.name;
      let pokemonImageUrl = pokemonData.sprites.front_default;

      //checks if pokemon is already in array
      if (
        !pokemonArray.pokemon.some((pokemon) => pokemon.name === pokemonName)
      ) {
        pokemonArray.pokemon.push(new Pokemon(pokemonName, pokemonImageUrl));
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log("Pokémon data fetched:", pokemonArray);
  return pokemonArray;
}

const getRandomFirstGenPokemonId = () => Math.ceil(Math.random() * 151); // There are 151 pokemon in first generation.

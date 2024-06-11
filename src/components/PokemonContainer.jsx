import { useState, useEffect } from "react";
import pokemonGenerator from "../utils/pokemonGenerator.js";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonContainer() {
  const [pokemonCharacters, setPokemonCharacters] = useState([]);

  useEffect(() => {
    const fetchPokemonFromApi = async () => {
      const result = await pokemonGenerator();
      setPokemonCharacters(result.pokemon);
    };

    fetchPokemonFromApi();
  }, []);

  return (
    <div className='pokemon-container'>
      {pokemonCharacters.map((pokemon, index) => (
        <PokemonCard
          key={index}
          index={index}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
        />
      ))}
    </div>
  );
}

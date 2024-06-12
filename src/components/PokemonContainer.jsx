import { useState, useEffect } from "react";
import { pokemonGenerator } from "../utils/pokemonGenerator.js";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonContainer({ setCurrentScore }) {
  const [pokemonCharacters, setPokemonCharacters] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const fetchPokemonData = async () => {
    const result = await pokemonGenerator();
    setPokemonCharacters(result.pokemon);
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  function handlePokemonArrayShuffle() {
    //Fisher-Yates Shuffle
    const shuffledPokemonCharacters = [...pokemonCharacters];
    for (let i = shuffledPokemonCharacters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPokemonCharacters[i], shuffledPokemonCharacters[j]] = [
        shuffledPokemonCharacters[j],
        shuffledPokemonCharacters[i],
      ];
    }
    setPokemonCharacters(shuffledPokemonCharacters);
  }

  function handleTurn(index) {
    if (pokemonCharacters[index].isCaught) {
      setGameOver(true);
    } else {
      setCurrentScore((currentScore) => currentScore + 1);
      const updatedPokemonCharacters = [...pokemonCharacters];
      updatedPokemonCharacters[index].isCaught = true;
      setPokemonCharacters(updatedPokemonCharacters);
      handlePokemonArrayShuffle();
    }
  }

  function restartGame() {
    setCurrentScore(0);
    setGameOver(false);
    fetchPokemonData();
  }

  if (gameOver) {
    return (
      <div>
        <p>Game over!</p>
        <button onClick={() => restartGame()}>Restart</button>
      </div>
    );
  }

  return (
    <div className="pokemon-container">
      {pokemonCharacters.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.name}
          index={index}
          name={pokemon.name}
          imageUrl={pokemon.imageUrl}
          onClick={() => handleTurn(index)}
        />
      ))}
    </div>
  );
}

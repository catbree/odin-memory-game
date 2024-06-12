import { useState } from 'react';
import Header from "./Header.jsx";
import PokemonContainer from "./PokemonContainer.jsx";

export default function App() {

  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div>
      <Header currentScore={currentScore} />
      <PokemonContainer setCurrentScore={setCurrentScore} />
    </div>
  );
}

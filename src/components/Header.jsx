import { useState } from 'react';

export default function Header({ currentScore }) {
  
  const [highScore,setHighScore] = useState(0);

  if (currentScore > highScore) {
    const newHighScore = currentScore;
    setHighScore(newHighScore);
  }

  return (
    <div>
      <div>
        <h1>Catch-Em-Once!</h1>
        <p>
          Become a true Pokémon Master by capturing all 20 unique Pokémon below
          with no repeats!{" "}
        </p>
      </div>
      <div>
        <p>Unique Pokémon captured: {currentScore}</p>
        <p>Highscore: {highScore} </p>
      </div>
    </div>
  );
}

import ScoreTable from "./ScoreTable.jsx"

export default function Header() {
  return (
    <div>
      <div>
      <h1>Catch-Em-Once!</h1>
      <p>Become a true Pokémon Master by capturing all 20 unique Pokémon below with no repeats! </p>
      </div>
      <ScoreTable />
    </div>
  );
}
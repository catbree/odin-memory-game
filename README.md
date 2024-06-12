# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Catbree's Catch-em-once

Catch-em-once is a pokemon-themed memory game. 

At the start of the game, 20 unique pokemons are shown. 
On each turn, the player catches a pokemon.
At the end of a turn, the position of all pokemons are randomised.
This is repeated and the game ends when either:
1. player has caught each pokemon once, or 
2. player selects a pokemon already caught from a previous turn.
High score is updated if live score > current high score.
When the game ends, player can restart.


A live score keeps track of the unique pokemons caught.
A high score keeps track of the highest captured live score.


# Notes

PokeAPI serves 20 unique pokemons at the start of every game.

High score is not stored in memory. Upon leaving or refreshing page, high score will be lost.

# Next Steps
- Implement win condition: Currently, there's no indication of winning when all 20 guesses are correct.
- Add styling.
- Add difficulty levels: Provide options to increase difficulty by removing names and showing back sprites.
- Address API call issues: Fix bug causing double loading on restart and ensure proper refreshing of Pokémon sets.
- Optimize API performance: Investigate ways to speed up API calls to reduce initial load times.
- Add loading screen: Consider implementing a loading screen during Pokémon set refresh to improve user experience.
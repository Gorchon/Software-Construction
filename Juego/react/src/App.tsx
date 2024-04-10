// import { useState } from "react";

import { useEffect, useState } from "react";
import "./App.css";
import ScreenPokemonnes from "./components/ScreenPokemonnes";

export type Pokemon = {
  name: string;
  id: string;
  sprites: {
    front_default: string;
    // include other sprite variations if needed
  };
};

function App() {
  const [pokemones, setPokemones] = useState<Pokemon[]>([]);
  // const [count, setCount] = useState(0);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const pokemonData = async (pokeUrl: string) => {
    const response = await fetchData(pokeUrl);
    const dataPromises = response.results.map(async (pokemon: Pokemon) => {
      const details = await fetchData(pokeUrl + "/" + pokemon.name);
      return {
        name: details.name,
        id: details.id.toString(), // Convert to string if it's not already
        sprites: details.sprites,
      };
    });

    const pokemonWithImages = await Promise.all(dataPromises);
    setPokemones(pokemonWithImages);
    console.log(pokemonWithImages);
  };

  useEffect(() => {
    pokemonData(pokeUrl);
  }, []);

  return (
    <div className="main-container">
      <div className="gameboy-container">
        <div className="gameboy-header">Gameboy</div>
        <div className="layout-game">
          <div className="container-screen">
            <div className="screen-layout">
              <ScreenPokemonnes pokemones={pokemones} />
            </div>
          </div>

          <div className="button-container">
            <div className="container-pad">
              <button className="up-btn"></button>
              <button className="down-btn"></button>
              <button className="right-btn"></button>
              <button className="left-btn"></button>
            </div>
            <div className="container-select">
              <div className="container-select-button">
                <button className="button-select"></button>
                <div>select</div>
              </div>
              <div className="container-start-button">
                <button className="button-start"></button>
                <div>start</div>
              </div>
            </div>
            <div className="container-action">
              <div className="button-a-container">
                <button
                  className="button-a"
                  onClick={() => console.log("ge")}
                ></button>
                <div>B</div>
              </div>

              <div className="button-b-container">
                <button className="button-b"></button>
                <div>A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

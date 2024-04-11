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
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState<number>(0);
  // const [count, setCount] = useState(0);
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon";
  const urlWithLimit = `${pokeUrl}?limit=200`;
  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  const pokemonData = async (pokeUrl: string) => {
    const response = await fetchData(urlWithLimit);
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

  const handleDirectionalClick = (direction: string) => {
    let newIndex = selectedPokemonIndex;
    switch (direction) {
      case "up":
        newIndex = Math.max(0, newIndex - 3);
        break;
      case "down":
        newIndex = Math.min(pokemones.length - 1, newIndex + 3);
        break;
      case "left":
        newIndex = Math.max(0, newIndex - 1);
        break;
      case "right":
        newIndex = Math.min(pokemones.length - 1, newIndex + 1);
        break;
      default:
        break;
    }
    setSelectedPokemonIndex(newIndex);
  };

  return (
    <div className="main-container">
      <div className="gameboy-container">
        <div className="gameboy-header">Gameboy</div>
        <div className="layout-game">
          <div className="container-screen">
            <div className="screen-layout">
              <ScreenPokemonnes
                pokemones={pokemones}
                selectedPokemonIndex={selectedPokemonIndex}
              />
            </div>
          </div>

          <div className="button-container">
            <div className="container-pad">
              <button
                className="up-btn"
                onClick={() => handleDirectionalClick("up")}
              ></button>
              <button
                className="down-btn"
                onClick={() => handleDirectionalClick("down")}
              ></button>
              <button
                className="right-btn"
                onClick={() => handleDirectionalClick("right")}
              ></button>
              <button
                className="left-btn"
                onClick={() => handleDirectionalClick("left")}
              ></button>
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

import React, { useEffect, useRef } from "react";
import { Pokemon } from "../App";

type ScreenPokemonnesProps = {
  pokemones: Pokemon[];
  selectedPokemonIndex: number;
};

const ScreenPokemonnes = ({
  pokemones,
  selectedPokemonIndex,
}: ScreenPokemonnesProps) => {
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedPokemonIndex]);

  return (
    <div className="pokemons-grid-container">
      {pokemones.map((pokemon, index) => (
        <div
          key={pokemon.id}
          className={`pokemon-grid-item ${
            index === selectedPokemonIndex ? "selected" : ""
          }`}
          ref={index === selectedPokemonIndex ? selectedRef : null}
        >
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default ScreenPokemonnes;

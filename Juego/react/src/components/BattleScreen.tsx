import React from "react";
import { Pokemon } from "../App";

type BattleScreenProps = {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon;
  backgroundUrl: string;
};

const BattleScreen: React.FC<BattleScreenProps> = ({
  selectedPokemon,
  opponentPokemon,
  backgroundUrl,
}) => {
  return (
    <div
      className="battle-screen"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <img
        className="selected-pokemon"
        src={selectedPokemon.sprites.back_default}
        alt={selectedPokemon.name}
      />
      <img
        src={opponentPokemon.sprites.front_default}
        alt={opponentPokemon.name}
      />
    </div>
  );
};

export default BattleScreen;

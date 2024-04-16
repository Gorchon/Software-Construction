import React from "react";
import { Pokemon } from "../App";

type BattleScreenProps = {
  selectedPokemon: Pokemon;
  opponentPokemon: Pokemon;
  backgroundUrl: string;
  opponentHealth: number;
  onAttack: () => void;
};

const BattleScreen: React.FC<BattleScreenProps> = ({
  selectedPokemon,
  opponentPokemon,
  backgroundUrl,
  opponentHealth,
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
      <div>
        <img
          src={opponentPokemon.sprites.front_default}
          alt={opponentPokemon.name}
        />
        <p>Enemy Health: {opponentHealth}</p>
      </div>
    </div>
  );
};

export default BattleScreen;

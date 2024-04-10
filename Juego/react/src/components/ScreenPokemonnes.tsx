import { Pokemon } from "../App";

type ScreenPokemonnesProps = {
  pokemones: Pokemon[];
};

const ScreenPokemonnes = ({ pokemones }: ScreenPokemonnesProps) => {
  console.log("screenPoke", pokemones);
  return pokemones.map((pokemon) => <div key={pokemon.id}>{pokemon.name}</div>);
};

export default ScreenPokemonnes;

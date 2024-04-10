import { Pokemon } from "../App";

type ScreenPokemonnesProps = {
  pokemones: Pokemon[];
};

const ScreenPokemonnes = ({ pokemones }: ScreenPokemonnesProps) => {
  console.log("screenPoke", pokemones);

  const handleClick = (pokemonName: string) => {
    // Replace this with the actual click handling logic
    console.log(`You clicked on ${pokemonName}`);
  };

  return (
    <div className="pokemons-grid-container">
      {pokemones.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon-grid-item"
          onClick={() => handleClick(pokemon.name)}
        >
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default ScreenPokemonnes;

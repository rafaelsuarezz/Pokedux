import { PokemonCard } from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  if (!Array.isArray(pokemons)) {
    throw new Error("pokemons debe ser un arreglo");
  }

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        if (!pokemon.name || !pokemon.sprites || !pokemon.sprites.front_default) {
          throw new Error("Cada pokémon debe tener una propiedad 'name' y 'sprites.front_default'");
        }

        return (
          <PokemonCard 
            name={pokemon.name} 
            key={pokemon.name} 
            image={pokemon.sprites.front_default} 
            types={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill({ name: "", sprites: { front_default: "" } }),
};

export { PokemonList };
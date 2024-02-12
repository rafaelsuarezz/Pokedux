import axios from "axios"

const getPokemon = () => {
    return axios
    .get ('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((res) => res.data.results)
    .catch((error) => console.log(error))
}

const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((error) => console.log(error))
}

export { getPokemon, getPokemonDetails } 
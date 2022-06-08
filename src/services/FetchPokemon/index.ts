import { Pokemon } from "../../contracts/Pokemon";

export async function getAllPokemon(): Promise<Pokemon[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => console.warn(err));

  console.log('getAllPokemon', response);

  return response.results;
}

export async function getPokemonByName(name: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .catch(err => console.warn(err));

  console.log('getPokemonByName', response);

  return response;
}




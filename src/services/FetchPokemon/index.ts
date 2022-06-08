import { Poke, Pokemon, Pokemons } from '../../contracts/Pokemon';
import { PokeSpeccy } from '../../contracts/PokemonSpeccy';

export async function getPokemonByName(name: string): Promise<Pokemon> {
  try {
    console.log('getPokemonByName', name);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      method: 'GET',
    });

    const data = (await response.json()) as Pokemon;
    console.log(data);
    return data;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function getPokemonSpeccyByName(
  name: string,
): Promise<PokeSpeccy> {
  try {
    console.log('getPokemonSpeccyByName', name);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`,
      {
        method: 'GET',
      },
    );

    const data = (await response.json()) as PokeSpeccy;
    console.log(data);
    return data;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

export async function getAllPokemon(): Promise<Pokemon[]> {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`, {
      method: 'GET',
    });

    const data = (await response.json()) as Pokemons;

    console.log('getAllPokemon', response);

    const pokemons = await Promise.all(
      data.results.map((pokemon: Poke) => getPokemonByName(pokemon.name)),
    );

    return pokemons;
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

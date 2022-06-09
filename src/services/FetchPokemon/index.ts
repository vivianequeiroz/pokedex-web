import { Poke, Pokemon, Pokemons } from '../../contracts/Pokemon';
import { PokeSpeccy } from '../../contracts/PokemonSpeccy';

export type getAllProps = {
  offset?: number;
};

export async function getPokemonByName(name: string): Promise<Pokemon> {
  try {
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

export async function getAllPokemon(
  pageParam: number = 0,
): Promise<{ pokemons: Pokemon[]; pageParam: number } & Pokemons> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}`,
      {
        method: 'GET',
      },
    );

    const data = (await response.json()) as Pokemons;

    const pokemons = await Promise.all(
      data.results.map((pokemon: Poke) => getPokemonByName(pokemon.name)),
    );

    return {
      pokemons,
      ...data,
      pageParam,
    };
  } catch (error) {
    console.warn(error);
    throw error;
  }
}

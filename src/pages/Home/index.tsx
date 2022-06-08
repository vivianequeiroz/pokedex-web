import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { Logomark } from '../../components/Logomark';
import { PokemonCard } from '../../components/PokemonCard';
import { getAllPokemon } from '../../services/FetchPokemon';

export const Home: FunctionComponent = () => {
  const { data } = useQuery('pokemonData', getAllPokemon);

  return (
    <main className="flex flex-col gap-8 bg-gray-50 p-4 min-h-screen">
      <h1>
        <Logomark />
      </h1>
      <ul className="flex flex-wrap justify-center gap-4">
        {data?.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
    </main>
  );
};

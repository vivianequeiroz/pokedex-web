import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { Logomark } from '../../components/Logomark';
import { PokemonCard } from '../../components/PokemonCard';
import { getAllPokemon } from '../../services/FetchPokemon';

export const Home: FunctionComponent = () => {
  const queryResult = useQuery('pokemonData', getAllPokemon);

  return (
    <main className="flex flex-col gap-8 bg-gray-50 p-4">
      <h1>
        <Logomark />
      </h1>
      <ul className="flex flex-wrap justify-between gap-4">
        {queryResult.data?.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard pokemon={{ ...pokemon, id: index + 1 }} />
          </li>
        ))}
      </ul>
    </main>
  );
};

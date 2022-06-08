import { FunctionComponent, useState } from 'react';
import { useQuery } from 'react-query';
import { Logomark } from '../../components/Logomark';
import { PokemonCard } from '../../components/PokemonCard';
import { Spinner } from '../../components/Spinner';
import { Pokemon } from '../../contracts/Pokemon';
import { getAllPokemon } from '../../services/FetchPokemon';

export const Home: FunctionComponent = () => {
  const [offset, setOffset] = useState(0);

  const { data, isLoading } = useQuery(
    ['pokemonData', offset],
    () => getAllPokemon({ offset }),
    {
      keepPreviousData: true,
    },
  );

  const hasMore = offset < 1120;

  const handleLoadMore = () => {
    setOffset(offset + 10);
  };

  return (
    <main className="flex flex-col gap-8 bg-gray-50 p-4 min-h-screen">
      <h1>
        <Logomark />
      </h1>
      {isLoading && <Spinner />}
      <ul className="flex flex-wrap justify-center gap-4">
        {data?.map((pokemon, index) => (
          <li key={index}>
            <PokemonCard pokemon={pokemon} />
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading && <Spinner />}
          {isLoading ? 'Loading...' : 'Load next'}
        </button>
      )}
    </main>
  );
};

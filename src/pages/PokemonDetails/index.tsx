import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Logomark } from '../../components/Logomark';
import { PokemonCardDetails } from '../../components/PokemonCardDetails';
import { getPokemonByName } from '../../services/FetchPokemon';

type PokemonDetailsParams = {
  name: string;
};

export const PokemonDetails: FunctionComponent = () => {
  const { name } = useParams<PokemonDetailsParams>();
  const queryResult = useQuery(['pokemon', name], () =>
    getPokemonByName(String(name)),
  );
  console.log(queryResult?.data);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <div className="flex flex-col justify-between items-center rounded-lg p-1 bg-white gap-20 max-w-sm">
        <PokemonCardDetails pokemon={queryResult?.data!} />
      </div>
    </main>
  );
};

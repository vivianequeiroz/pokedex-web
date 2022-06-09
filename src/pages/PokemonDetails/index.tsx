import { FunctionComponent } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { PokemonCardDetails } from '../../components/PokemonCardDetails';
import { Spinner } from '../../components/Spinner';
import {
  getPokemonByName,
  getPokemonSpeccyByName,
} from '../../services/FetchPokemon';

type PokemonDetailsParams = {
  name: string;
};

export const PokemonDetails: FunctionComponent = () => {
  const { name } = useParams<PokemonDetailsParams>();

  const { data, isLoading } = useQuery(['pokemon', name], () =>
    getPokemonByName(String(name)),
  );

  getPokemonSpeccyByName;

  const { data: speccyData, isLoading: isLoadingSpeccy } = useQuery(
    ['pokemon-speccy', name],
    () => getPokemonSpeccyByName(String(name)),
  );

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <div className="flex flex-col justify-between items-center rounded-lg bg-white gap-20 max-w-sm p-4">
        {isLoading || (isLoadingSpeccy && <Spinner />)}
        {data && <PokemonCardDetails pokemon={data} speccy={speccyData} />}
      </div>
    </main>
  );
};

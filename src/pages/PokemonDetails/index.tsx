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
    <main>
      <h2>
        <Logomark />
      </h2>
      {/* <PokemonCardDetails
        pokemon={{
          id: queryResult.data!.id,
          name: queryResult.data!.name,
          image: queryResult.data!.image,
          stats: queryResult.data!.stats,
        }}
      /> */}
    </main>
  );
};

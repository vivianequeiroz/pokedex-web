import { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';
import { Logomark } from '../../components/Logomark';

type PokemonDetailsParams = {
  id: string;
};

export const PokemonDetails: FunctionComponent = () => {
  const routeParams = useParams<PokemonDetailsParams>();
  console.log(routeParams);

  return (
    <main>
      <h2>
        <Logomark />
      </h2>
      PokemonDetails!!!
    </main>
  );
};

import { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

type PokemonDetailsParams = {
  id: string;
};

export const PokemonDetails: FunctionComponent = () => {
  const routeParams = useParams<PokemonDetailsParams>();
  console.log(routeParams);

  return <h1>PokemonDetails!!!</h1>;
};

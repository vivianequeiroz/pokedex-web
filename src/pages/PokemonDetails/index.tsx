import { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';
import { Logomark } from '../../components/Logomark';
import { PokemonCardDetails } from '../../components/PokemonCardDetails';

type PokemonDetailsParams = {
  id: string;
};

export const PokemonDetails: FunctionComponent = () => {
  const routeParams = useParams<PokemonDetailsParams>();
  console.log(routeParams);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <div className="flex flex-col justify-between items-center rounded-lg p-1 bg-white gap-20 max-w-sm">
        <PokemonCardDetails
          pokemon={{
            id: 1,
            name: 'Bulbasaur',
            image:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            stats: [
              {
                base_stat: 45,
                effort: 0,
                stat: {
                  name: 'hp',
                  url: 'https://pokeapi.co/api/v2/stat/1/',
                },
              },
              {
                base_stat: 49,
                effort: 0,
                stat: {
                  name: 'attack',
                  url: 'https://pokeapi.co/api/v2/stat/2/',
                },
              },
              {
                base_stat: 49,
                effort: 0,
                stat: {
                  name: 'defense',
                  url: 'https://pokeapi.co/api/v2/stat/3/',
                },
              },
              {
                base_stat: 65,
                effort: 1,
                stat: {
                  name: 'special-attack',
                  url: 'https://pokeapi.co/api/v2/stat/4/',
                },
              },
              {
                base_stat: 65,
                effort: 0,
                stat: {
                  name: 'special-defense',
                  url: 'https://pokeapi.co/api/v2/stat/5/',
                },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: {
                  name: 'speed',
                  url: 'https://pokeapi.co/api/v2/stat/6/',
                },
              },
            ],
            types: [
              {
                slot: 1,
                type: {
                  name: 'grass',
                  url: 'https://pokeapi.co/api/v2/type/12/',
                },
              },
              {
                slot: 2,
                type: {
                  name: 'poison',
                  url: 'https://pokeapi.co/api/v2/type/4/',
                },
              },
            ],
          }}
        />
      </div>
    </main>
  );
};

import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { PokemonCard } from '../../components/PokemonCard';

export const Home: FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="pokemon/1">PokemonDetails</Link>
      </nav>
      <ul className="flex justify-between">
        <li>
          <PokemonCard
            pokemon={{
              id: 1,
              name: 'Bulbasaur',
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            }}
          />

          <PokemonCard
            pokemon={{
              id: 2,
              name: 'Ivysaur',
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            }}
          />

          <PokemonCard
            pokemon={{
              id: 3,
              name: 'Venusaur',
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            }}
          />
        </li>
      </ul>
    </div>
  );
};

import { FunctionComponent } from 'react';
import { Pokemon } from '../../contracts/Pokemon';
import { Link } from 'react-router-dom';

type PokemonCardProps = {
  pokemon: Pokemon;
};

export const PokemonCard: FunctionComponent<PokemonCardProps> = ({
  pokemon,
}) => {
  return (
    <article className="flex border-green-500 border-4 rounded-lg overflow-hidden max-w-xs h-52">
      <Link
        to={`/pokemon/${pokemon.name}`}
        className="flex flex-col flex-1 justify-between items-center overflow-hidden"
      >
        <img src={pokemon.image} alt={pokemon.name} className="h-52" />
        <footer className="flex justify-center items-center bg-green-500 border-green-500 border-2 w-full text-white text-2xl">
          <p>{pokemon.name}</p>
        </footer>
      </Link>
    </article>
  );
};

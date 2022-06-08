import { FunctionComponent } from 'react';
import { Pokemon } from '../../contracts/Pokemon';
import { Link } from 'react-router-dom';
import { forceGetTailwindColorsByType } from '../../utils/getColorByType';

type PokemonCardProps = {
  pokemon: Pick<Pokemon, 'id' | 'name' | 'types'>;
};

export const PokemonCard: FunctionComponent<PokemonCardProps> = ({
  pokemon,
}) => {
  const type = pokemon.types[0].type.name;
  const color = forceGetTailwindColorsByType(type);

  return (
    <article
      className={`flex border-4 rounded-lg overflow-hidden max-w-xs h-52`}
      style={{
        borderColor: color,
      }}
    >
      <Link
        to={`/pokemon/${String(pokemon.name).toLowerCase()}`}
        className="flex flex-col flex-1 justify-between items-center overflow-hidden"
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          className="h-52"
        />
        <footer
          className={`flex justify-center items-center w-full text-white text-2xl`}
          style={{
            backgroundColor: color,
          }}
        >
          <p className="text-center capitalize">{pokemon.name}</p>
        </footer>
      </Link>
    </article>
  );
};

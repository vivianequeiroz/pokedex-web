import { FunctionComponent } from 'react';
import ArrowLeftIcon from '../../assets/ArrowLeft.svg';
import { Pokemon } from '../../contracts/Pokemon';
import { Link } from 'react-router-dom';

type PokemonCardDetailsProps = {
  pokemon: Pokemon;
};

export const PokemonCardDetails: FunctionComponent<PokemonCardDetailsProps> = ({
  pokemon,
}) => {
  return (
    <div className="flex flex-col justify-between items-center rounded-lg p-1 bg-green-400 gap-20 max-w-sm">
      <header className="flex justify-between items-center p-4 w-full">
        <div className="flex justify-between items-center gap-4">
          <Link to="/">
            <img src={ArrowLeftIcon} alt="go back" className="h-4 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">{pokemon.name}</h1>
        </div>
        <p className="text-white text-sm font-bold">#{pokemon.id}</p>
      </header>
      <div
        className="flex flex-col justify-between items-center p-4 w-full
        bg-white rounded-lg relative pt-20 gap-4"
      >
        <img
          className="h-60 absolute -top-28"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
        <ul className="flex justify-center items-center gap-4 w-full text-white font-bold">
          {pokemon.types.map((type) => (
            <li
              key={type.type.name}
              className="bg-green-800 rounded-2xl py-1 px-3 capitalize"
            >
              {type.type.name}
            </li>
          ))}
        </ul>
        <h2 className="text-green-500 font-bold text-xl">About</h2>
        <p>
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </p>
        <h2 className="text-green-500 font-bold text-xl">Base Stats</h2>
        <ul className="flex flex-col justify-between items-start w-full">
          <li>
            <span className="text-green-500 font-bold">HP</span>: 45
          </li>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span className="text-green-500 font-bold">{stat.stat.name}</span>
              : {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

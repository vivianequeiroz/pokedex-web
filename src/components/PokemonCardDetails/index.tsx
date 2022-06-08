import { FunctionComponent } from 'react';
import ArrowLeftIcon from '../../assets/ArrowLeft.svg';
import { Pokemon } from '../../contracts/Pokemon';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { forceGetTailwindColorsByType } from '../../utils/getColorByType';
import { PokeSpeccy } from '../../contracts/PokemonSpeccy';

type PokemonCardDetailsProps = {
  pokemon: Pokemon;
  speccy?: PokeSpeccy;
};

export const PokemonCardDetails: FunctionComponent<PokemonCardDetailsProps> = ({
  pokemon,
  speccy,
}) => {
  const type = pokemon.types[0].type.name;
  const color = forceGetTailwindColorsByType(type);

  const about =
    speccy?.flavor_text_entries[0].flavor_text ??
    'Unkown data about this pokemon';
  console.log(pokemon);
  return (
    <motion.div
      className="flex flex-col justify-between items-center rounded-lg p-1 gap-20 max-w-sm
      min-w-sm"
      animate={{ y: [0, 100, 0] }}
      style={{
        backgroundColor: color,
      }}
    >
      <header className="flex justify-between items-center p-4 w-full">
        <div className="flex justify-between items-center gap-4">
          <Link to="/">
            <img src={ArrowLeftIcon} alt="go back" className="h-4 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white capitalize">
            {pokemon.name}
          </h1>
        </div>
        <p className="text-white text-sm font-bold">#{pokemon.id}</p>
      </header>
      <div
        className="flex flex-col justify-between items-center p-4 w-full
        bg-white rounded-lg relative pt-28 gap-4"
      >
        <img
          className="h-60 absolute -top-28"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />
        <ul className="flex justify-center items-center gap-4 w-full text-white font-bold">
          {pokemon.types.map((type) => (
            <li
              key={type.type.name}
              className="rounded-2xl py-1 px-3 capitalize"
              style={{
                backgroundColor: color,
              }}
            >
              {type.type.name}
            </li>
          ))}
        </ul>
        <h2
          className="font-bold text-xl"
          style={{
            color,
          }}
        >
          About
        </h2>
        <p>{about}</p>
        <h2
          className="font-bold text-xl"
          style={{
            color,
          }}
        >
          Base Stats
        </h2>
        <ul className="flex flex-col justify-between items-start w-full">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              <span
                className="text-green-500 font-bold uppercase"
                style={{
                  color,
                }}
              >
                {stat.stat.name}
              </span>
              : {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

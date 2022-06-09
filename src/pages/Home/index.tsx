import { FunctionComponent, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { Logomark } from '../../components/Logomark';
import { PokemonCard } from '../../components/PokemonCard';
import { Spinner } from '../../components/Spinner';
import { getAllPokemon } from '../../services/FetchPokemon';
import { motion } from 'framer-motion';

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export const Home: FunctionComponent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      'pokemonData',
      ({ pageParam }) => getAllPokemon(pageParam),
      {
        getNextPageParam: (lastPage, _) => lastPage.pageParam + 10,
        getPreviousPageParam: (firstPage, _) => firstPage.pageParam,
      },
    );

  const handleLoadMore = () => {
    const previousPageParam =
      data?.pageParams[data?.pageParams.length - 1] || 10;
    fetchNextPage({
      pageParam: +previousPageParam + 10,
    });
  };

  console.log('pageParams_home', data?.pageParams);
  return (
    <main className="flex flex-col gap-8 bg-gray-50 p-4 min-h-screen">
      <h1>
        <Logomark />
      </h1>
      {/* {isLoading && <Spinner />} */}
      {data?.pages?.map((page) => (
        <motion.ul
          className="flex flex-wrap justify-between gap-4"
          initial="hidden"
          animate="visible"
          variants={list}
        >
          {page.pokemons?.map((pokemon, index) => (
            <motion.li key={index} variants={item}>
              <PokemonCard pokemon={pokemon} />
            </motion.li>
          ))}
        </motion.ul>
      ))}

      {hasNextPage && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLoadMore}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage && <Spinner />}
          {isFetchingNextPage ? 'Loading...' : 'Load next'}
        </button>
      )}
    </main>
  );
};

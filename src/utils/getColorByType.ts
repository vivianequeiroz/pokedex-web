import { PokeType } from '../contracts/Pokemon';
import tailwindColors from 'tailwindcss/colors';

// ugly framework https://tailwindcss.com/docs/content-configuration#dynamic-class-names
// nice solution https://github.com/tailwindlabs/tailwindcss/discussions/3461#discussioncomment-329183

export type TailwindColors =
  | 'gray-500'
  | 'red-500'
  | 'blue-500'
  | 'yellow-500'
  | 'green-500'
  | 'cyan-500'
  | 'orange-500'
  | 'purple-500'
  | 'brown-500'
  | 'indigo-500'
  | 'pink-500'
  | 'teal-500'
  | 'black';

export type BackgroundColors = `bg-${TailwindColors}`;
export type BorderColors = `border-${TailwindColors}`;

export const getColorByType = (type: PokeType) => {
  const colorByType = new Map<PokeType, TailwindColors>()
    .set('normal', 'gray-500')
    .set('fire', 'red-500')
    .set('water', 'blue-500')
    .set('electric', 'yellow-500')
    .set('grass', 'green-500')
    .set('ice', 'cyan-500')
    .set('fighting', 'orange-500')
    .set('poison', 'purple-500')
    .set('ground', 'brown-500')
    .set('flying', 'indigo-500')
    .set('psychic', 'pink-500')
    .set('bug', 'teal-500')
    .set('rock', 'gray-500')
    .set('ghost', 'indigo-500')
    .set('dragon', 'indigo-500')
    .set('dark', 'gray-500')
    .set('steel', 'gray-500')
    .set('fairy', 'pink-500');

  return colorByType.get(type) || 'black';
};

export const getBorderByType = (type: PokeType): BorderColors => {
  return `border-${getColorByType(type)}`;
};

export const getBackgroundByType = (type: PokeType): BackgroundColors => {
  return `bg-${getColorByType(type)}`;
};

export const forceGetTailwindColorsByType = (
  type: PokeType,
): TailwindColors => {
  const pokemonColorByType: Record<PokeType, string> = {
    normal: tailwindColors.gray[500],
    fire: tailwindColors.red['500'],
    water: tailwindColors.blue['500'],
    electric: tailwindColors.yellow['500'],
    grass: tailwindColors.green['500'],
    ice: tailwindColors.blue['500'],
    fighting: tailwindColors.red['500'],
    poison: tailwindColors.purple['500'],
    ground: tailwindColors.amber['500'],
    flying: tailwindColors.indigo['500'],
    psychic: tailwindColors.pink['500'],
    bug: tailwindColors.teal['500'],
    rock: tailwindColors.gray['500'],
    ghost: tailwindColors.indigo['500'],
    dragon: tailwindColors.indigo['500'],
    dark: tailwindColors.gray['500'],
    steel: tailwindColors.gray['500'],
    fairy: tailwindColors.pink['500'],
  };

  return pokemonColorByType[type] as TailwindColors;
};

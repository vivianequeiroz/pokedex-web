export type Pokemon = {
  id: number;
  name: string;
  image: string;
  stats: BaseStat[];
  types: Poketype[];
};

export interface BaseStat {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

export interface Poketype {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

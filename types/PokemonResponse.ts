export type PokemonResponse = {
  height: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
};

export type PokemonsResponse = {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
};

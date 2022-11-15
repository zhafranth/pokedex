export interface ParamsTypes {
  offset?: number;
  limit?: number;
}

export interface ResultPokemonProperties {
  name: string;
  url: string;
}

export interface PokemonListProperties {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultPokemonProperties[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}

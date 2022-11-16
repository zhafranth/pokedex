export interface ParamsTypes {
  offset?: number;
  limit?: number;
}

export interface ResultPokemonProperties {
  name: string;
  url: string;
}

export interface TypeProperties {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface AbilityProperties {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

type StatsType =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export interface StatsProperties {
  base_stat: number;
  effort: 2;
  stat: { name: StatsType; url: string };
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
  types: TypeProperties[];
  weight: number;
  height: number;
  abilities: AbilityProperties[];
  stats: StatsProperties[];
}

import { useQuery } from "@tanstack/react-query";
import { ParamsTypes } from "./pokedex.interface";
import { getPokemonList } from "./pokedex";

export const useGetPokemonList = (params: ParamsTypes) =>
  useQuery(["pokemon-list", params], () => getPokemonList(params));

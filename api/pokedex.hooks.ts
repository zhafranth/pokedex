import { useQuery } from "@tanstack/react-query";
import { ParamsTypes } from "./pokedex.interface";
import { getPokemonList, getDetailPokemon } from "./pokedex";

export const useGetPokemonList = (params: ParamsTypes) =>
  useQuery(["pokemon-list", params], () => getPokemonList(params));

export const useDetailPokemon = (name: string) =>
  useQuery(["pokemon-list", name], () => getDetailPokemon(name));

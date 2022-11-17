import { useQuery } from "@tanstack/react-query";
import { ParamsTypes } from "./pokedex.interface";
import {
  getPokemonList,
  getDetailPokemon,
  getSpeciesPokemon,
  getEvolutionChain,
  getTypePokemon,
  getPokemonWithType,
} from "./pokedex";

export const useGetPokemonList = (params: ParamsTypes) =>
  useQuery(["pokemon-list", params], () => getPokemonList(params));

export const useDetailPokemon = (name: string) =>
  useQuery(["pokemon-detail", name], () => getDetailPokemon(name), {
    enabled: !!name,
  });

export const useSpeciesPokemon = (name: string) =>
  useQuery(["pokemon-species", name], () => getSpeciesPokemon(name), {
    retry: false,
    refetchOnWindowFocus: false,
  });

export const useEvolutionChain = (url?: string) =>
  useQuery(["evolution", url], () => getEvolutionChain(url), {
    enabled: !!url,
  });

export const usePokemonTypeList = () =>
  useQuery(["pokemon-type-list"], getTypePokemon);

export const usePokemonType = (type: string) =>
  useQuery(["pokemon-type", type], () => getPokemonWithType(type));

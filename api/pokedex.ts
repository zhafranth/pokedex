import apiRequest from "config/Axios.config";
import axios, { AxiosResponse } from "axios";
import {
  ParamsTypes,
  PokemonListProperties,
  PokemonDetail,
  SpeciesProperties,
  EvolutionChainProperties,
} from "./pokedex.interface";

export const getPokemonList = async (params: ParamsTypes) => {
  const response: AxiosResponse<PokemonListProperties> = await apiRequest({
    url: "/pokemon",
    method: "GET",
    params,
  });

  return response.data;
};

export const getDetailPokemon = async (name: string) => {
  const response: AxiosResponse<PokemonDetail> = await apiRequest({
    url: `/pokemon/${name}`,
    method: "GET",
  });

  return response.data;
};

export const getSpeciesPokemon = async (name: string) => {
  const response: AxiosResponse<SpeciesProperties> = await apiRequest({
    url: `/pokemon-species/${name}`,
    method: "GET",
  });

  return response.data;
};

export const getEvolutionChain = async (url?: string) => {
  const response: AxiosResponse<EvolutionChainProperties> = await axios({
    url,
  });

  return response.data;
};

import apiRequest from "config/Axios.config";
import { AxiosResponse } from "axios";
import {
  ParamsTypes,
  PokemonListProperties,
  PokemonDetail,
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

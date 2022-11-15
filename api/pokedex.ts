import apiRequest from "config/Axios.config";
import { AxiosResponse } from "axios";
import { ParamsTypes, PokemonListProperties } from "./pokedex.interface";

export const getPokemonList = async (params: ParamsTypes) => {
  const response: AxiosResponse<PokemonListProperties> = await apiRequest({
    url: "/pokemon",
    method: "GET",
    params,
  });

  return response.data;
};

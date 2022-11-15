import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export default apiRequest;

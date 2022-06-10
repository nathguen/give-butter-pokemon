import { Pokemon } from "./types";

const base = "https://pokeapi.co/api/v2";

interface FetchAllPokemonResponse extends Response {
  results: Pokemon.Summary[];
}

export const fetchAllPokemon = async (): Promise<FetchAllPokemonResponse> => {
  return fetch(`${base}/pokemon/?limit=151`).then((response) =>
    response.json()
  );
};

export const fetchPokemonSpeciesByName = (name: string) => {
  return fetch(`${base}/pokemon-species/${name}`).then((response) =>
    response.json()
  );
};

interface FetchPokemonDetailsByNameResponse extends Response, Pokemon.Details {}

export const fetchPokemonDetailsByName = async (
  name: string
): Promise<FetchPokemonDetailsByNameResponse> => {
  return fetch(`${base}/pokemon/${name}`).then((response) => response.json());
};

export const fetchEvolutionChainById = (id: string) => {
  return fetch(`${base}/evolution-chain/${id}`).then((response) =>
    response.json()
  );
};

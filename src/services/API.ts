import type { PokemonList, Pokemon } from "../types/pokemon.ts";

const BASE_URL = "https://pokeapi.co/api/v2"

type PokemonListParams = {
  limit: number;
  offset: number;
}

export const getPokemonList = async ({ limit = 20, offset = 0 }: PokemonListParams): Promise<PokemonList> => {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)

  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }

  return response.json();
}

export const getPokemonById = async ({ id }: { id: number | string }): Promise<Pokemon> => {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);

  if (!response.ok) {
  throw new Error('Failed to fetch Pokemon details');
}

return response.json();
}

export const extractIdFromUrl = (url: string): number => {
  const matches = url.match(/\/pokemon\/(\d+)\//);
  return matches ? +matches[1] : 0;
}
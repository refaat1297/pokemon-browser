import { useParams, useNavigate } from 'react-router-dom';
import type { Pokemon } from '../types/pokemon';
import {useEffect, useState} from "react";
import {getPokemonById} from "../services/API.ts";
import ErrorMessage from "../components/shared/ErrorMessage.tsx";
import PokemonDetailsCard from "../components/pokemon-details";

const PokemonDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async () => {
    if (!id) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await getPokemonById({ id });
      setPokemon(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon details');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading Pokemon...</p>
        </div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center">
        <ErrorMessage message={error || 'Pokemon not found'} onRetry={fetchPokemon} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium mb-2"
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
          </svg>
          Back to List
        </button>


        <div className=" mx-auto max-w-4xl">
          <PokemonDetailsCard pokemon={pokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
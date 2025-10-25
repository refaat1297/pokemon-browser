import {useEffect, useState} from "react";
import type {PokemonCardData} from "../types/pokemon.ts";
import {getPokemonList, extractIdFromUrl, getPokemonById} from "../services/API.ts";
import ErrorMessage from "../components/shared/ErrorMessage.tsx";
import PokemonCard from "../components/shared/PokemonCard.tsx";
import PokemonCardSkeleton from "../components/shared/PokemonCardSkeleton.tsx";

const LoadMoreView = () => {
  const [pokemonList, setPokemonList] = useState<PokemonCardData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemonList = async ({ currentOffset, append = false }: { currentOffset: number; append: boolean }) => {
    if (append) {
      setIsLoading(true);
    } else {
      setInitialLoading(true);
    }
    setError(null);

    try {
      const response = await getPokemonList({
        limit: 20,
        offset: currentOffset,
      })

      const pokemonData: PokemonCardData[] = await Promise.all(
        response.results.map(async (item) => {
          const id = extractIdFromUrl(item.url);
          const details = await getPokemonById({id});

          return {
            id: details.id,
            name: details.name,
            avatar: details.sprites.other?.['official-artwork']?.front_default ||
              details.sprites.front_default ||
              '',
          };
        })
      );


      setPokemonList((prev)=> {
        return append ? [...prev, ...pokemonData] : pokemonData
      })
      setOffset(currentOffset + 20);
      setHasMore(response.next !== null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch Pokemon');
    } finally {
      setIsLoading(false);
      setInitialLoading(false);
    }
  }

  const handleLoadMore = () => {
    fetchPokemonList({
      currentOffset: offset,
      append: true,
    })
  }

  const handleRetry = () => {
    setPokemonList([])
    setOffset(0)
    fetchPokemonList({
      currentOffset: 0,
      append: false,
    })
  }

  useEffect(() => {
    fetchPokemonList({
      currentOffset: 0,
      append: false,
    })
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {
          error && pokemonList.length === 0
          ? (
              <ErrorMessage message={error} onRetry={handleRetry} />
          )
          : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pokemonList.map((p) => (
                  <PokemonCard key={p.id} pokemon={p} />
                ))}

                {isLoading &&
                  Array.from({ length: 20 }).map((_, index) => (
                    <PokemonCardSkeleton key={`skeleton-${index}`} />
                  ))}
              </div>

              {initialLoading && pokemonList.length === 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <PokemonCardSkeleton key={index} />
                  ))}
                </div>
              )}

              {!initialLoading && hasMore && !error && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Loading more Pokemon...
                      </>
                    ) : (
                      'Load More Pokemon'
                    )}
                  </button>
                </div>
              )}

              {!initialLoading && pokemonList.length > 0 && (
                <div className="text-center mt-6 text-gray-600">
                  Showing {pokemonList.length} Pokemon
                </div>
              )}
            </>
          )
        }
      </div>
    </div>
  )
}

export default LoadMoreView
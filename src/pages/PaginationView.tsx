import {useEffect, useState} from "react";
import {getPokemonList, extractIdFromUrl, getPokemonById} from "../services/API.ts";
import type {PokemonCardData} from "../types/pokemon.ts";
import PokemonCard from "../components/shared/PokemonCard.tsx";
import PokemonCardSkeleton from "../components/shared/PokemonCardSkeleton.tsx";
import ErrorMessage from "../components/shared/ErrorMessage.tsx";
import Pagination from "../components/Pagination.tsx";


type Pagination = {
  page: number;
  itemsPerPage: number;
  totalItems: number;
  next: string | null;
  previous: string | null;
}

const PaginationView = () => {
  const [pokemonList, setPokemonList] = useState<PokemonCardData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    itemsPerPage: 20,
    totalItems: 0,
    next: null,
    previous: null,
  })

  const totalPages = Math.round(pagination.totalItems / pagination.itemsPerPage);

  const fetchPokemonList = async ({ page }: { page: number }) => {
    setIsLoading(true);
    setError(null);

    try {

      const offset = (page - 1) * pagination.itemsPerPage;
      const response = await getPokemonList({
        limit: pagination.itemsPerPage,
        offset,
      })

      setPagination({
        ...pagination,
        page,
        totalItems: response.count,
        next: response.next,
        previous: response.previous,
      });

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

      setPokemonList(pokemonData);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch Pokemon');
    } finally {
      setIsLoading(false);
    }
  }

  const handlePageChange = (page: number ) => {
    setPagination({
      ...pagination,
      page: page + 1,
    })
  }

  const handleRetry = () => {
    fetchPokemonList({ page: pagination.page });
  };

  useEffect(() => {
    fetchPokemonList({ page: pagination.page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pagination.page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {
          error
            ? (
              <ErrorMessage message={error} onRetry={handleRetry} />
            )
            : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {isLoading
                    ? Array.from({ length: pagination.itemsPerPage }).map((_, index) => (
                      <PokemonCardSkeleton key={index} />
                    ))
                    : pokemonList.map((p) => <PokemonCard key={p.id} pokemon={p} />)}
                </div>

                {!isLoading && pokemonList.length > 0 && (
                  <Pagination
                    currentPage={pagination.page}
                    totalPages={totalPages}
                    next={pagination.next}
                    previous={pagination.previous}
                    onPageChange={handlePageChange}
                  />
                )}

                {!isLoading && pokemonList.length > 0 && (
                  <div className="text-center mt-6 text-gray-600">
                    Page {pagination.page} of {totalPages} (Showing {pagination.itemsPerPage} Pokemon shown)
                  </div>
                )}
              </>
            )

        }

      </div>
    </div>
  )
}

export default PaginationView
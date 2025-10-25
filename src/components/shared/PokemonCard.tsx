import { Link } from 'react-router-dom';
import type { PokemonCardData } from '../../types/pokemon';

interface PokemonCardProps {
  pokemon: PokemonCardData;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1 p-5"
    >
      <div className="h-30 w-full bg-gray-50 flex items-center justify-center p-4">
        <img
          src={pokemon.avatar}
          alt={pokemon.name}
          className="w-[200px] h-[120px] object-contain"
          loading="lazy"
        />
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg font-bold text-gray-800 capitalize">
          {pokemon.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">#{pokemon.id.toString().padStart(3, '0')}</p>
      </div>
    </Link>
  )
}

export default PokemonCard
import type { Pokemon } from '../../types/pokemon';

type ImageProps = {
  pokemon: Pokemon;
}

const Image = ({ pokemon }: ImageProps) => {
  return (
    <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mb-8 shadow-inner relative">
      <div className="absolute inset-0 bg-white/40 rounded-full"></div>
      <img
        src={pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default || ''}
        alt={pokemon.name}
        className="relative z-10 w-11/12 h-11/12 object-contain drop-shadow-2xl"
      />
    </div>
  )
}

export default Image
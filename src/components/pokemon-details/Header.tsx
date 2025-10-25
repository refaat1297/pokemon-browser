import type { Pokemon } from '../../types/pokemon';

type HeaderProps = {
  pokemon: Pokemon;
}

const Header = ({ pokemon }: HeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 p-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-white capitalize">{pokemon.name}</h1>
      </div>
      <p className="text-xl text-white/90 font-semibold">#{String(pokemon.id).padStart(4, '0')}</p>
    </div>
  )
}

export default Header
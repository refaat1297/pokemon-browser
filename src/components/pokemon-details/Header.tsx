import type { Pokemon } from '../../types/pokemon';

type HeaderProps = {
  pokemon: Pokemon;
}

const Header = ({ pokemon }: HeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 p-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
        </svg>
        <h1 className="text-3xl md:text-4xl font-bold text-white capitalize">{pokemon.name}</h1>
      </div>
      <p className="text-xl text-white/90 font-semibold">#{String(pokemon.id).padStart(4, '0')}</p>
    </div>
  )
}

export default Header
import type { PokemonAbility } from '../../types/pokemon';

type AbilitiesProps = {
  abilities: PokemonAbility[];
}

const Abilities = ({ abilities }: AbilitiesProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Abilities</h2>
      <div className="space-y-2">
        {abilities.map((ability) => (
          <div key={ability.ability.name} className="flex items-center gap-3">
            <span className="font-semibold bg-gray-100 px-2 py-1 rounded-full text-gray-800 text-sm capitalize">
              {ability.ability.name.replace(/-/g, ' ')}
            </span>
            {ability.is_hidden && (
              <span className="text-sm text-gray-500 font-semibold">(Hidden)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Abilities
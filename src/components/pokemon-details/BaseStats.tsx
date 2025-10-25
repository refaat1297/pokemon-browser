import type { PokemonStat } from '../../types/pokemon';

type BaseStatsProps = {
  stats: PokemonStat[];
}

const BaseStats = ({ stats }: BaseStatsProps) => {
  const statNames: Record<string, string> = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Attack',
    'special-defense': 'Sp. Defense',
    speed: 'Speed',
  };


  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Base Stats</h2>
      <div className="space-y-2">
        {stats.map((stat) => {
          const statName = statNames[stat.stat.name] || stat.stat.name;
          const maxStat = 255;
          const percentage = (stat.base_stat / maxStat) * 100;

          return (
            <div key={stat.stat.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-800 text-base">{statName}</span>
                <span className="font-bold text-gray-900 text-base">{stat.base_stat}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-black h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default BaseStats
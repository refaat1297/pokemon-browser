import type {Pokemon} from "../../types/pokemon";

type HeightAndWeightProps = {
  pokemon: Pokemon;
}

const HeightAndWeight = ({ pokemon }: HeightAndWeightProps) => {

  return (
    <div className="flex gap-16 w-full justify-center">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span className="font-semibold text-sm">Height</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{(pokemon.height / 10).toFixed(1)} m</p>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
          </svg>
          <span className="font-semibold text-sm">Weight</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{(pokemon.weight / 10).toFixed(1)} kg</p>
      </div>
    </div>
  )
}

export default HeightAndWeight
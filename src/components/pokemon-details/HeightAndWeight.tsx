import type {Pokemon} from "../../types/pokemon";
import Ruler from "../icons/Ruler.tsx";
import WeightLine from "../icons/WeightLine.tsx";

type HeightAndWeightProps = {
  pokemon: Pokemon;
}

const HeightAndWeight = ({ pokemon }: HeightAndWeightProps) => {

  return (
    <div className="flex gap-2 w-full justify-center item-center">
      <div className="text-center bg-gray-100 w-full py-4 rounded">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
          <Ruler />
          <span className="font-semibold text-sm">Height</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{(pokemon.height / 10).toFixed(1)} m</p>
      </div>
      <div className="text-center bg-gray-100 w-full py-4 rounded">
        <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
          <WeightLine />
          <span className="font-semibold text-sm">Weight</span>
        </div>
        <p className="text-2xl font-bold text-gray-900">{(pokemon.weight / 10).toFixed(1)} kg</p>
      </div>
    </div>
  )
}

export default HeightAndWeight
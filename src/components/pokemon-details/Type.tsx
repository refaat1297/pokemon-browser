import type {Pokemon} from "../../types/pokemon";

type TypeProps = {
  pokemon: Pokemon;
}

const Type = ({ pokemon }: TypeProps) => {
  const primaryType = pokemon.types[0]?.type.name || 'normal';

  return (
    <div className="mb-8">
      <span className="bg-red-500 text-white px-8 py-2.5 rounded-full text-base font-bold capitalize shadow-lg">
        {primaryType}
      </span>
    </div>
  )
}

export default Type
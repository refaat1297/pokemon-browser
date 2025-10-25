import type { Pokemon } from '../../types/pokemon';
import Header from "./Header.tsx";
import BaseStats from "./BaseStats.tsx";
import Abilities from "./Abilities.tsx";
import BaseExperience from "./BaseExperience.tsx";
import Image from "./Image.tsx";
import Type from "./Type.tsx";
import HeightAndWeight from "./HeightAndWeight.tsx";

type PokemonDetailsProps = {
  pokemon: Pokemon;
}


const PokemonDetails = ({ pokemon }: PokemonDetailsProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <Header pokemon={pokemon} />

      <div className="p-8 md:p-12">

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="flex flex-col items-center">
            <Image pokemon={pokemon} />
            <Type pokemon={pokemon} />
            <HeightAndWeight pokemon={pokemon} />
          </div>

          <div className="space-y-10">
            <BaseStats stats={pokemon.stats} />
            <Abilities abilities={pokemon.abilities} />
            <BaseExperience baseExperience={pokemon.base_experience} />
          </div>

        </div>

      </div>
    </div>
  )
}

export default PokemonDetails
const PokemonCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 animate-pulse p-4">
      <div className="w-full h-[120px] bg-gray-200"></div>
      <div className="p-4 text-center">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mt-2"></div>
      </div>
    </div>
  );
};

export default PokemonCardSkeleton;
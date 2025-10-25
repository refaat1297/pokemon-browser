type BaseExperienceProps = {
  baseExperience: number;
}

const BaseExperience = ({ baseExperience }: BaseExperienceProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Base Experience</h2>
      <p className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
        {baseExperience} XP
      </p>
    </div>
  )
}

export default BaseExperience
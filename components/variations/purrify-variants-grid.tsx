'use client';

const variants = [
  {
    color: 'yellow',
    name: 'Lemeown',
    scent: 'Lemon',
    gradient: 'bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400',
    emoji: '🍋'
  },
  {
    color: 'blue',
    name: 'Meowgic Mist',
    scent: 'Cotton',
    gradient: 'bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400',
    emoji: '☁️'
  },
  {
    color: 'purple',
    name: 'Pawpple Blossom',
    scent: 'Lavender',
    gradient: 'bg-gradient-to-b from-violet-200 via-violet-300 to-violet-400',
    emoji: '🌸'
  },
  {
    color: 'green',
    name: 'Purrsley',
    scent: 'Parsley',
    gradient: 'bg-gradient-to-b from-green-200 via-green-300 to-green-400',
    emoji: '🌿'
  },
  {
    color: 'pink',
    name: 'Strawpurry',
    scent: 'Strawberry',
    gradient: 'bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400',
    emoji: '🍓'
  },
  {
    color: 'orange',
    name: 'Whiskermelon',
    scent: 'Melon',
    gradient: 'bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400',
    emoji: '🍈'
  },
];

export function PurrifyVariantsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-white to-[#F7F9FA]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#6B9DCB] text-center mb-2">
          Our Purrify Variants
        </h1>
        <p className="text-gray-600 text-center mb-12 text-lg">
          Each color brings its own scent and charm.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {variants.map((variant, index) => (
            <div
              key={variant.color}
              className="w-full max-w-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`${variant.gradient} shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl`}>
                <div className="p-8 flex flex-col items-center">
                  <div className="relative w-48 h-48 flex items-center justify-center float-animation">
                    <div className="text-9xl drop-shadow-xl">
                      {variant.emoji}
                    </div>
                  </div>

                  <div className="mt-6 text-center bg-white/60 backdrop-blur-sm rounded-xl py-4 px-6 w-full">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                      {variant.name}
                    </h3>
                    <p className="text-base text-gray-600 italic">
                      {variant.scent}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
}

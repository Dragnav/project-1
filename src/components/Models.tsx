import { Gauge, Zap, Award } from 'lucide-react';

const models = [
  {
    name: 'Phantom Elite',
    category: 'Luxury Sedan',
    image: 'https://images.pexels.com/photos/3849553/pexels-photo-3849553.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      power: '563 HP',
      acceleration: '4.3s 0-60mph',
      topSpeed: '200 mph'
    },
    price: '$425,000'
  },
  {
    name: 'Sovereign GT',
    category: 'Grand Tourer',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      power: '650 HP',
      acceleration: '3.2s 0-60mph',
      topSpeed: '211 mph'
    },
    price: '$385,000'
  },
  {
    name: 'Prestige SUV',
    category: 'Luxury SUV',
    image: 'https://images.pexels.com/photos/3874336/pexels-photo-3874336.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: {
      power: '523 HP',
      acceleration: '4.5s 0-60mph',
      topSpeed: '180 mph'
    },
    price: '$295,000'
  }
];

export default function Models() {
  return (
    <section id="models" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-light tracking-[0.3em] text-sm uppercase">
            Our Collection
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white mt-4 tracking-tight">
            Masterpiece Models
          </h2>
          <p className="text-gray-400 mt-4 font-light max-w-2xl mx-auto">
            Each vehicle represents the pinnacle of automotive engineering and design excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-amber-400/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm font-light">
                  {model.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-light text-white mb-2">{model.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-amber-400 text-sm font-light">Starting at</span>
                  <span className="text-white text-xl font-light">{model.price}</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Gauge size={18} className="text-amber-400" />
                    <span className="font-light text-sm">{model.specs.power}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Zap size={18} className="text-amber-400" />
                    <span className="font-light text-sm">{model.specs.acceleration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Award size={18} className="text-amber-400" />
                    <span className="font-light text-sm">Top Speed: {model.specs.topSpeed}</span>
                  </div>
                </div>

                <button className="w-full bg-white/5 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 text-white hover:text-black border border-white/10 hover:border-transparent px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

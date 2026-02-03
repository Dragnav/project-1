import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-6 animate-fadeIn">
          <div className="inline-block">
            <span className="text-amber-400 font-light tracking-[0.3em] text-sm uppercase">
              Premium Automotive Excellence
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-tight">
            Experience
            <span className="block font-light bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Unparalleled Luxury
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Discover our curated collection of the world's most prestigious automobiles,
            where craftsmanship meets innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-8 py-4 rounded-full font-light tracking-wide hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-light tracking-wide hover:bg-white/10 transition-all duration-300"
            >
              Schedule Visit
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-amber-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

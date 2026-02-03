const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/3849552/pexels-photo-3849552.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Interior Craftsmanship'
  },
  {
    url: 'https://images.pexels.com/photos/3729505/pexels-photo-3729505.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Performance Engineering'
  },
  {
    url: 'https://images.pexels.com/photos/3849550/pexels-photo-3849550.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Elegant Design'
  },
  {
    url: 'https://images.pexels.com/photos/3729470/pexels-photo-3729470.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Details'
  },
  {
    url: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Dynamic Power'
  },
  {
    url: 'https://images.pexels.com/photos/3849559/pexels-photo-3849559.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Refined Excellence'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-light tracking-[0.3em] text-sm uppercase">
            Visual Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white mt-4 tracking-tight">
            Gallery
          </h2>
          <p className="text-gray-400 mt-4 font-light max-w-2xl mx-auto">
            Immerse yourself in the artistry of automotive perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 overflow-hidden rounded-lg border border-white/10 hover:border-amber-400/50 transition-all duration-500"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-xl font-light">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white/5 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 text-white hover:text-black border border-white/10 hover:border-transparent px-8 py-4 rounded-full font-light tracking-wide transition-all duration-300">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

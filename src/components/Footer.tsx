import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-white font-light text-2xl tracking-wider">LUXE</span>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Redefining luxury automotive experiences with unparalleled elegance and performance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Showroom</h4>
            <ul className="space-y-2 text-gray-400 font-light text-sm">
              <li><a href="#models" className="hover:text-amber-400 transition-colors">Our Models</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Virtual Tour</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Visit Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Test Drive</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Trade-In</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-light mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="bg-white/5 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/5 hover:bg-amber-400 hover:text-black p-2 rounded-full transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-gray-400 font-light text-sm">
              Stay updated with our latest arrivals
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-light text-sm">
            © 2024 LUXE Automotive. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 font-light text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

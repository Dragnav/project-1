import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', model: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-light tracking-[0.3em] text-sm uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-white mt-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-400 mt-4 font-light max-w-2xl mx-auto">
            Begin your journey to luxury. Our specialists are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-white/10">
              <h3 className="text-2xl font-light text-white mb-6">Visit Our Showroom</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400/10 p-3 rounded-full">
                    <MapPin className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">
                      1234 Luxury Avenue, Suite 500
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400/10 p-3 rounded-full">
                    <Phone className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">+1 (310) 555-0100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-400/10 p-3 rounded-full">
                    <Mail className="text-amber-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 font-light">contact@luxeshowroom.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-light mb-4">Showroom Hours</h4>
                <div className="space-y-2 text-gray-400 font-light text-sm">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-light text-white mb-6">Request Information</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-light mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 font-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-300 font-light mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="model" className="block text-gray-300 font-light mb-2">
                  Interested Model
                </label>
                <select
                  id="model"
                  value={formData.model}
                  onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300"
                >
                  <option value="">Select a model</option>
                  <option value="phantom">Phantom Elite</option>
                  <option value="sovereign">Sovereign GT</option>
                  <option value="prestige">Prestige SUV</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 font-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your preferences..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 text-black px-6 py-4 rounded-full font-light tracking-wide hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

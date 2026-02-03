import Header from './components/Header';
import Hero from './components/Hero';
import Models from './components/Models';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Models />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

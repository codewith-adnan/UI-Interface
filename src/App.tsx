import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Testimonials from './components/Testominals';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="font-sans antialiased text-default bg-background scroll-smooth">
      <Header />

      <main>
        <Hero />
        <About />
        <Features />
        <Stats />
        <Details />
        <Gallery />
        <Testimonials />
        <Team />
        <Pricing />
        <Contact />
        {/* FAQ and Contact components go here */}
      </main>

      <Footer />

      {/* Scroll Top Button */}
      <a href="#" className="fixed right-4 bottom-4 z-50 bg-accent text-contrast w-10 h-10 flex items-center justify-center rounded hover:bg-accent/80 transition-all">
        <i className="bi bi-arrow-up-short text-2xl"></i>
      </a>
    </div>
  );
}

export default App;
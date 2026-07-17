import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import About from './components/About';
import Product from './components/Product';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Location from './components/Location';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <About />
        <Product />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Location />
        <RelatedProducts />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

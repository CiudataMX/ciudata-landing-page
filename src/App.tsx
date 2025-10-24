import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProject from './components/FeaturedProject';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <FeaturedProject />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
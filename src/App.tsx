import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Navigation } from './components/common/Navigation';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <main className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

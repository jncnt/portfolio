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
      <main className="bg-white text-slate-900 min-h-screen pt-16 relative overflow-x-hidden">
        {/* Subtle Background Elements */}
        <div className="fixed inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-amber-50/50 rounded-full blur-[120px]" />
        </div>

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

import Hero from '../components/Hero.tsx';
import About from '../components/About.tsx';
import Education from '../components/Education.tsx';
import Skills from '../components/Skills.tsx';
import Projects from '../components/Projects.tsx';
import Contact from '../components/Contact.tsx';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index; 
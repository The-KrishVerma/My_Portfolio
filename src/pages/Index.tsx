import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechnicalSkills from '@/components/TechnicalSkills';
import CodingProfiles from '@/components/CodingProfiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

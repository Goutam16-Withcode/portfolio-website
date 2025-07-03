import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import EducationSection from './components/Eduaction';
import ThemeSwitcher from './components/ThemeSwitcher';

const AppContent = () => {
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const { theme, isTransitioning } = useTheme();

  const toggleAIAssistant = () => {
    setShowAIAssistant(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${theme.bgPrimary} transition-colors duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background overlays */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[100px] -z-10"></div>
      <div className={`fixed inset-0 ${theme.bgPrimary} opacity-90 -z-10`}></div>

      <Navbar toggleAI={toggleAIAssistant} />

      <main className="relative z-10">
        <Hero />
        <About />
        <EducationSection />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <AIAssistant
        isOpen={showAIAssistant}
        onClose={() => setShowAIAssistant(false)}
      />
    </div>
  );
};

function App() {
  return (
    
    <ThemeProvider>
      <ThemeSwitcher />
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

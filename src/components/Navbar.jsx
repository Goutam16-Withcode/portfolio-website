import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ toggleAI }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, nextTheme, allThemes, currentThemeIndex } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? `${theme.bgSecondary}/90 backdrop-blur shadow-lg` : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className={`flex-shrink-0 font-bold text-2xl bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
          >
           Goutam Sharma
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${theme.textSecondary} hover:${theme.textPrimary} hover:bg-white/10 transition duration-300`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Theme Switcher */}
              <motion.button
                onClick={nextTheme}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${theme.accent} ${theme.textPrimary} transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-2">
                  <span>Theme</span>
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>
              </motion.button>
              
              {/* AI Assistant Button */}
              <motion.button
                onClick={toggleAI}
                className={`ml-4 px-4 py-2 rounded-md ${theme.buttonBg} ${theme.textPrimary} ${theme.hoverEffect} transition duration-300 flex items-center space-x-2`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>AI Assistant</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4m0 4a4 4 0 100 8 4 4 0 000-8z"></path>
                  <path d="M12 16v4M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07z"></path>
                </svg>
              </motion.button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              onClick={nextTheme}
              className={`p-2 rounded-full bg-gradient-to-r ${theme.accent} ${theme.textPrimary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </motion.button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${theme.textSecondary} hover:${theme.textPrimary} hover:bg-white/10 focus:outline-none`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden ${theme.bgSecondary} shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${theme.textSecondary} hover:${theme.textPrimary} hover:bg-white/10`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              toggleAI();
              setMobileMenuOpen(false);
            }}
            className={`w-full mt-2 flex items-center px-3 py-2 rounded-md text-base font-medium ${theme.textPrimary} ${theme.buttonBg} hover:${theme.textPrimary}`}
          >
            <span>AI Assistant</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8V4m0 4a4 4 0 100 8 4 4 0 000-8z"></path>
              <path d="M12 16v4M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07z"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
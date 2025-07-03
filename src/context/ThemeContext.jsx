import { createContext, useState, useContext, useEffect } from 'react';

// Define available themes
export const themes = [
  { 
    name: 'midnight',
    bgPrimary: 'bg-black', 
    bgSecondary: 'bg-zinc-900',
    textPrimary: 'text-white', 
    textSecondary: 'text-gray-300',
    accent: 'from-purple-600 to-blue-500',
    buttonBg: 'bg-gradient-to-r from-purple-600 to-blue-500',
    hoverEffect: 'hover:from-blue-500 hover:to-purple-600'
  },
  { 
    name: 'neon',
    bgPrimary: 'bg-black', 
    bgSecondary: 'bg-zinc-900',
    textPrimary: 'text-white', 
    textSecondary: 'text-gray-300',
    accent: 'from-green-400 to-cyan-500',
    buttonBg: 'bg-gradient-to-r from-green-400 to-cyan-500',
    hoverEffect: 'hover:from-cyan-500 hover:to-green-400'
  },
  { 
    name: 'crimson',
    bgPrimary: 'bg-black', 
    bgSecondary: 'bg-zinc-900',
    textPrimary: 'text-white', 
    textSecondary: 'text-gray-300',
    accent: 'from-red-500 to-pink-600',
    buttonBg: 'bg-gradient-to-r from-red-500 to-pink-600',
    hoverEffect: 'hover:from-pink-600 hover:to-red-500'
  },
  { 
    name: 'sunset',
    bgPrimary: 'bg-black', 
    bgSecondary: 'bg-zinc-900',
    textPrimary: 'text-white', 
    textSecondary: 'text-gray-300',
    accent: 'from-amber-500 to-red-600',
    buttonBg: 'bg-gradient-to-r from-amber-500 to-red-600',
    hoverEffect: 'hover:from-red-600 hover:to-amber-500'
  },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeTheme = (themeIndex) => {
    if (themeIndex === currentTheme) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTheme(themeIndex);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };
  
  const nextTheme = () => {
    const nextIndex = (currentTheme + 1) % themes.length;
    changeTheme(nextIndex);
  };

  const value = {
    theme: themes[currentTheme],
    changeTheme,
    nextTheme,
    allThemes: themes,
    isTransitioning,
    currentThemeIndex: currentTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
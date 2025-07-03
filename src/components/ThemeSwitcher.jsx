import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const { nextTheme, allThemes, currentThemeIndex, isTransitioning } = useTheme();
  const currentTheme = allThemes[currentThemeIndex];

  const handleClick = () => {
    if (!isTransitioning) nextTheme();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className={`fixed bottom-6 left-6 p-3 rounded-full shadow-lg border border-gray-700 ${currentTheme.buttonBg} text-white z-50 transition-transform`}
      title={`Switch Theme: ${currentTheme.name}`}
    >
      <Sun className="w-5 h-5" />
    </motion.button>
  );
};

export default ThemeSwitcher;

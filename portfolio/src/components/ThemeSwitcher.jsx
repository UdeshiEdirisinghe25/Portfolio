import React from 'react';
import { useTheme } from '../hooks/useTheme'; 
import { Sun, Moon } from 'lucide-react'; 

const ThemeSwitcher = () => {
  const [theme, toggleTheme] = useTheme(); 

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 
                 bg-gray-200 dark:bg-gray-800 
                 text-gray-900 dark:text-gray-100 
                 hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeSwitcher;

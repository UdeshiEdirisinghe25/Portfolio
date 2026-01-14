import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const navLinks = [
  { name: 'Home', href: '#home' }, 
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Standard anchor tag for the Logo */}
        <a href="#home" className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          UDESHI EDIRISINGHE | DEVELOPER
        </a>

        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <ThemeSwitcher />
        </div>
        
        <div className="md:hidden">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
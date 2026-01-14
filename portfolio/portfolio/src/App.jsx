import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
<div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">      
      <Navbar />

      <main>
        {/* Each component needs a matching ID inside its code */}
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="py-4 text-center text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Udeshi Edirisinghe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
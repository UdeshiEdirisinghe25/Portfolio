import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroImage from '../assets/profile.jpg'; // Make sure this path matches your image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 z-10 min-h-screen">
        
        {/* Left: Floating Circular Image with Glow */}
<div className="flex-1 flex justify-center md:justify-start md:ml-24 relative">
          {/* Glow behind image */}
  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl blur-3xl opacity-30 animate-pulse-slow"></div>
          
          <img
            src={HeroImage}
            alt="Udeshi Edirisinghe"
            className="relative rounded-2xl shadow-2xl max-w-[180px] sm:max-w-[220px] md:max-w-[260px] w-full object-cover animate-float"/>
        </div>

        {/* Added md:mr-12 to push text slightly left for balance */}
<div className="flex-1 flex flex-col justify-center text-center md:text-left md:mr-12">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
    Hi, I'm <span className="text-blue-600 dark:text-blue-400">Udeshi Edirisinghe</span>
  </h1>
  <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light text-gray-600 dark:text-gray-400">
    A passionate Full Stack Developer creating robust solutions with React, Node.js, and strong C# backend logic.
  </p>


          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg 
                         hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold 
                         hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a href="#about" aria-label="Scroll down" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
      </a>

      {/* Custom Tailwind Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }

          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.4; }
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

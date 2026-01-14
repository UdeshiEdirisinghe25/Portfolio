import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Rounded container */}
        <div className="
          bg-white/80 dark:bg-gray-800/70
          backdrop-blur-xl
          rounded-3xl
          px-8 py-16
          text-center
          shadow-2xl
          border border-gray-200/50 dark:border-gray-700/50
        ">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Get In Touch
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Have a project idea or collaboration in mind?  
            I’m always open to discussing new challenges and opportunities.
          </p>

          {/* Email Button */}
          <a
            href="mailto:udeshiedirisinghe@gmail.com"
            className="
              inline-flex items-center gap-2
              px-10 py-4
              bg-gradient-to-r from-blue-600 to-indigo-600
              text-white text-lg font-semibold
              rounded-full
              shadow-lg
              hover:shadow-blue-500/30
              transition-all duration-300
              hover:scale-105
            "
          >
            <Mail size={22} />
            Email Me
          </a>

          {/* Social Links */}
          <div className="mt-12">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Connect with me
            </p>

            <div className="flex justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/udeshi-edirisinghe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  p-4 rounded-xl
                  bg-white dark:bg-gray-700
                  text-blue-600 dark:text-blue-400
                  shadow-md
                  hover:scale-110
                  hover:bg-blue-600 hover:text-white
                  transition-all
                "
              >
                <Linkedin size={26} />
              </a>

              <a
                href="https://github.com/UdeshiEdirisinghe25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  p-4 rounded-xl
                  bg-white dark:bg-gray-700
                  text-gray-800 dark:text-gray-200
                  shadow-md
                  hover:scale-110
                  hover:bg-gray-900 hover:text-white
                  transition-all
                "
              >
                <Github size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

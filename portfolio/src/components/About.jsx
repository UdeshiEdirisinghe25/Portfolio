import React from 'react';
import { Award, Code, Zap, ExternalLink } from 'lucide-react';

const About = () => {
  const skills = ["React", "Node.js", "JavaScript", "Tailwind CSS", "C#", "MySQL", "WPF"];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Decorative background element */}
       <div className="relative text-center mb-20">
  
  <h2 className="relative text-4xl md:text-6xl font-extrabold tracking-tight">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 dark:from-purple-400 dark:via-indigo-300 dark:to-blue-400 drop-shadow-lg">
      About Me
    </span>
  </h2>
</div>

        
        {/* Bio Section with 2 Columns */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-xl font-medium text-blue-600 dark:text-blue-400">
              Passionate IT Undergraduate & Developer
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I am Udeshi Edirisinghe, an enthusiastic IT undergraduate specializing in Full Stack Development. I have a strong foundation in C#, WPF, and MySQL, and I am currently focusing on modern JavaScript ecosystems, particularly React and Node.js.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              My goal is to build scalable, high-performance web applications that provide seamless user experiences. I thrive on tackling complex problems and constantly exploring new technologies to deliver innovative solutions.
            </p>
          </div>

          {/* Styled Skills Cloud */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-inner">
            <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-300 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600 font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards with Hover Effects */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300 hover:border-blue-100 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-blue-500/10">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-6 group-hover:bg-blue-600 transition-colors">
              <Code size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Core Skills</h3>
            <p className="text-gray-600 dark:text-gray-400">
              React, Node.js, JavaScript, Tailwind CSS, C#, MySQL.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all hover:border-purple-200 duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-purple-500/10">
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 mb-6 group-hover:bg-purple-600 transition-colors">
              <Zap size={32} className="text-purple-600 dark:text-purple-400 group-hover:text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-3">Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building efficient, responsive, and maintainable full-stack web applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all hover:border-blue-100duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-blue-500/10">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 mb-6 group-hover:bg-blue-600 transition-colors">
              <Award size={32} className="text-blue-600 dark:text-blue-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Collaborative projects in ticket booking systems and inventory management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
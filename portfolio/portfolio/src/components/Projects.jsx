import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, Loader2, Folder } from 'lucide-react';

const GITHUB_USERNAME = 'UdeshiEdirisinghe25'; 

const FALLBACK_PROJECTS = [
  {
    id: 1,
    name: "SmartBus - Ticket Booking System",
    description: "A full-stack e-ticket booking system built with C#, WinForm, and MySQL providing a seamless user experience for commuters.",
    language: "C#",
    url: "https://github.com/UdeshiEdirisinghe25/SmartBus",
  },
  {
    id: 2,
    name: "SilkShield Digital Solution",
    description: "A collaborative invoice generator application with Inventory & customer Management designed for retail efficiency.",
    language: "C#",
    url: "https://github.com/UdeshiEdirisinghe25/SilkShield-New",
  },
];

const ProjectCard = ({ project }) => (
<div className="
  group p-8 rounded-2xl shadow-lg hover:shadow-2xl
  bg-white/90 dark:bg-gray-800/60
  backdrop-blur-md
  border border-gray-200/50 dark:border-gray-700/50
  transition-all duration-500 transform hover:-translate-y-2
  flex flex-col h-full
">

                  
    <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
          <Folder size={24} />
        </div>
        <div className="flex space-x-3 text-gray-400">
           <a href={project.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
             <Github size={20} />
           </a>
           <a href={project.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
             <ExternalLink size={20} />
           </a>
        </div>
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
        {project.name}
    </h3>
    
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {project.description || 'No detailed description available.'}
    </p>
    
    <div className="flex items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
      <span className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400">
        <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
        {project.language || 'Software'}
      </span>
    </div>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchGitHubRepos() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
      );

      if (!response.ok) throw new Error("GitHub API Error");

      const data = await response.json();

      const formattedRepos = data
        .filter(repo => !repo.fork && repo.name !== GITHUB_USERNAME)
        .map(repo => ({
          id: repo.id,
          name: repo.name.replace(/-/g, " "),
          description:
            repo.description ||
            "A personal project showcasing full-stack development skills.",
          language: repo.language || "Software",
          url: repo.html_url,
        }));

      setProjects(
        formattedRepos.length > 0 ? formattedRepos : FALLBACK_PROJECTS
      );
    } catch (error) {
      console.error(error);
      setProjects(FALLBACK_PROJECTS);
    } finally {
      setLoading(false);
    }
  }

  fetchGitHubRepos();
}, []);


  return (
<section id="projects" className="py-24 transition-colors duration-500">
  <div className="
    relative
    bg-gray-100/80 dark:bg-gray-800/60
    backdrop-blur-xl
    rounded-3xl
    px-6 py-20
    shadow-xl
    border border-gray-200/50 dark:border-gray-700/50
  ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">A collection of my work in Full Stack Development and C# Engineering.</p>
        </div>
        
        {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
                <Loader2 size={40} className="animate-spin text-blue-600" />
            </div>
        ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
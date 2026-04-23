import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Travel Website',
            description: 'A comprehensive travel booking platform allowing users to explore destinations, book tour packages, and manage itineraries. Features a responsive modern UI with secure booking flows.',
            image: '/p3.png',
            tags: ['React', 'Tailwind CSS', 'Node.js',],
            demoUrl: 'https://travel-tau-sand.vercel.app/',
            githubUrl: '#'
        },
        {
            title: 'Digital Bazaar',
            description: 'A modern pizza ordering platform with user authentication, dynamic cart management, and a sleek dark-mode UI. Features an admin panel for easy management.',
            image: 'p4.png',
            tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            demoUrl: 'https://digitalbazaar.infinityfreeapp.com/',
            githubUrl: '#'
        },
        {
            title: 'Weather Forecast App',
            description: 'A dynamic weather forecast web app that shows real-time weather data, 7-day forecasts, humidity, wind speed, and UV index for any city worldwide using OpenWeatherMap API.',
            image: '/p2.png',
            tags: ['React', 'OpenWeatherMap API', 'Tailwind CSS', 'Axios'],
            demoUrl: 'https://weather-forcast-weld.vercel.app/',
            githubUrl: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A showcase of my recent work, highlighting my expertise in full-stack development and UI/UX design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card flex flex-col overflow-hidden group hover:-translate-y-2 transition-transform duration-300">

                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'; }} // Fallback
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary dark:text-indigo-400 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold font-poppins text-textm dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Actions */}
                                <div className="flex space-x-3 mt-auto">
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-soft">
                                        <FaExternalLinkAlt /> <span>Live Demo</span>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-white dark:bg-gray-800 text-textm dark:text-white text-sm font-medium border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                                        <FaGithub className="text-lg" /> <span>GitHub</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

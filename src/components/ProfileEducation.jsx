import React from 'react';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const ProfileEducation = () => {
    const technologies = ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'React.js', 'MySQL', 'UI/UX Design'];

    const education = [
        {
            degree: 'Bachelor of Computer Applications (BCA)',
            year: 'Expected May 2026',
            institution: 'Atmiya University',
            location: 'Rajkot, Gujarat'
        }
    ];

    return (
        <section id="profile" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        Profile & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Education</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Objective & Tech */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 border border-gray-100 dark:border-gray-700 h-full">
                            <h3 className="text-2xl font-bold font-poppins text-textm dark:text-white mb-4 flex items-center gap-3">
                                Professional Objective
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                Motivated BCA student with strong skills in Web Development, passionate about building responsive applications, seeking to apply technical skills in a professional IT environment for growth and development.
                            </p>

                            <h3 className="text-xl font-bold font-poppins text-textm dark:text-white mb-4 flex items-center gap-3">
                                <FaCode className="text-primary" /> Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="px-4 py-2 bg-primary/10 text-primary dark:text-indigo-400 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="space-y-8">
                        <div className="glass-card p-8 border border-gray-100 dark:border-gray-700 h-full">
                            <h3 className="text-2xl font-bold font-poppins text-textm dark:text-white mb-6 flex items-center gap-3">
                                <FaGraduationCap className="text-accent" /> Education Background
                            </h3>

                            <div className="space-y-8">
                                {education.map((edu, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-primary/20 pb-4 last:pb-0">
                                        <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 shadow-soft"></div>
                                        <h4 className="text-lg font-bold text-textm dark:text-white font-poppins">{edu.degree}</h4>
                                        <span className="inline-block py-1 px-3 bg-gray-100 dark:bg-gray-800 text-primary dark:text-accent rounded-full text-xs font-semibold my-2">
                                            {edu.year}
                                        </span>
                                        {edu.institution && (
                                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                                {edu.institution}
                                            </p>
                                        )}
                                        {edu.location && (
                                            <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                                                {edu.location}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default ProfileEducation;

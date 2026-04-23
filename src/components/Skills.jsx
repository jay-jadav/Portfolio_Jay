import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaFigma } from 'react-icons/fa';
import { SiMysql, SiAdobexd } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: '95%' },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: '90%' },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: '85%' },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: '80%' },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: '75%' },
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" />, level: '70%' },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, level: '65%' },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, level: '80%' },
        { name: 'UI/UX Design', icon: <div className="flex gap-1"><FaFigma className="text-[#F24E1E]" /><SiAdobexd className="text-[#FF61F6]" /></div>, level: '85%' },
    ];

    return (
        <section id="skills" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        A comprehensive overview of the tools, languages, and technologies I use to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-textm dark:text-white font-poppins mb-3">
                                    {skill.name}
                                </h3>

                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                                        style={{ width: skill.level }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { FiLayout, FiCode, FiCpu } from 'react-icons/fi';

const About = () => {
    const cards = [
        {
            icon: <FiCode className="text-3xl text-primary" />,
            title: 'Full Stack Development',
            description: 'Building robust, scalable applications from front-end interfaces to back-end databases using the latest technologies.'
        },
        {
            icon: <FiLayout className="text-3xl text-accent" />,
            title: 'UI/UX Design',
            description: 'Crafting intuitive, engaging user experiences with a focus on modern aesthetics and responsive web design.'
        },
        {
            icon: <FiCpu className="text-3xl text-purple-500" />,
            title: 'Problem Solving',
            description: 'Analyzing complex requirements and delivering elegant, optimized logical solutions for real-world problems.'
        }
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        I am a highly motivated BCA student and passionate full-stack developer with a strong foundation in modern web technologies and a keen eye for design.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Image Side */}
                    <div className="w-full lg:w-5/12">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src="/dev_setup.png"
                                alt="Developer Workstation"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Content Side / Cards */}
                    <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-1 md:col-span-2 text-gray-600 dark:text-gray-400 mb-4 text-lg leading-relaxed">
                            <p>
                                Currently pursuing my Bachelor of Computer Applications at Atmiya University. My journey in tech is driven by a desire to build solutions that not only work flawlessly but also provide an exceptional user experience.
                            </p>
                        </div>

                        {cards.map((card, index) => (
                            <div key={index} className={`glass-card p-6 border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300 ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-textm dark:text-white mb-3 font-poppins">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

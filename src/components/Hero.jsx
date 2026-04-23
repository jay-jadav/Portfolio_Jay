import React from 'react';
import { Link } from 'react-scroll';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -m-32 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl rounded-tr-none"></div>
      <div className="absolute bottom-0 left-0 -m-32 w-[400px] h-[400px] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl rounded-bl-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight text-textm dark:text-gray-100">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-gradient">Jadav Jay</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Web Developer
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I'm a passionate Full Stack Developer and UI/UX Designer dedicated to creating seamless, modern, and user-centric web applications. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-indigo-700 transition shadow-soft cursor-pointer text-center">
                View My Work
              </Link>
              <a href="/resume.pdf" download="Jay_Resume.pdf" target="_blank" className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 text-textm dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition cursor-pointer text-center shadow-sm">
                Download CV
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative flex justify-center py-10 lg:py-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">

              {/* Gradient Border Frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent p-1.5 shadow-soft">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                  <img src="/p5.png" alt="Jadav Jay" className="w-full h-full object-cover object-center" />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 -left-6 md:-left-10 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-[bounce_3s_ease-in-out_infinite]">
                <FaReact className="text-3xl text-blue-400" />
              </div>
              <div className="absolute bottom-10 -right-6 md:-right-10 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-[bounce_4s_ease-in-out_infinite]">
                <FaNodeJs className="text-3xl text-green-500" />
              </div>
              <div className="absolute top-1/2 -ml-[40px] left-0 translate-y-8 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 animate-[bounce_3.5s_ease-in-out_infinite]">
                <SiJavascript className="text-3xl text-yellow-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

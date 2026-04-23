import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Profile', to: 'profile' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'glass-card py-3' : 'bg-transparent py-5 dark:bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo Text */}
                <div className="flex-1">
                    <div className="text-3xl font-poppins font-bold tracking-tight text-primary dark:text-accent w-fit">
                        Jay<span className="text-textm dark:text-white">.</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            className="cursor-pointer text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions & Mobile Toggle */}
                <div className="flex-1 flex items-center justify-end space-x-4">
                    <button onClick={toggleDarkMode} className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-600" />}
                    </button>

                    <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-primary rounded-full hover:bg-indigo-700 shadow-soft transition-all transform hover:-translate-y-0.5">
                        Let’s Connect
                    </a>

                    <button className="lg:hidden text-2xl text-gray-700 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl py-4 flex flex-col px-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            onClick={() => setIsMenuOpen(false)}
                            className="cursor-pointer text-lg font-medium text-gray-800 dark:text-gray-200"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="#contact" onClick={() => setIsMenuOpen(false)} className="inline-flex w-full items-center justify-center px-6 py-3 text-white bg-primary rounded-lg font-medium">
                        Hire Me
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;

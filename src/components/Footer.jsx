import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = ['Home', 'About', 'Profile', 'Projects', 'Contact'];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300 py-10 mt-auto">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="text-2xl font-poppins font-bold tracking-tight text-primary dark:text-accent mb-2">
                        Jay<span className="text-textm dark:text-white">.</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {currentYear} Jay Jadav. Built with passion and code.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {links.map((link) => (
                        <Link
                            key={link}
                            to={link.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                        >
                            {link}
                        </Link>
                    ))}
                </div>

                {/* Mini Links */}
                <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">Cookies</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

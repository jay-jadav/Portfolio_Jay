import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Jenkins',
            role: 'Product Manager',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            feedback: "Raj is an exceptional developer who deeply understands both technical architecture and user experience. He delivered our e-commerce platform ahead of schedule with flawless execution."
        },
        {
            name: 'Michael Chen',
            role: 'Startup Founder',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            feedback: "Working with Raj was a fantastic experience. His attention to detail and ability to translate complex business requirements into elegant, high-performing code is remarkable."
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-background dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">

            {/* Decorative blobs */}
            <div className="absolute left-0 top-0 -m-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl rounded-tr-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Testimonials</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Hear what my clients and collaborators have to say about my work process, technical skills, and dedication.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative">

                            <FaQuoteLeft className="text-4xl text-primary/10 absolute top-6 left-6" />

                            <div className="relative z-10">
                                <p className="text-gray-600 dark:text-gray-400 italic mb-8 h-24 overflow-hidden">
                                    "{testimonial.feedback}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-bold text-textm dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-primary dark:text-accent">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;

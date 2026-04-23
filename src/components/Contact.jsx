import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '919081734816'; // Country code + number (no + or spaces)

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const text = `Hello Jay! 👋\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setSent(true);
            window.open(whatsappURL, '_blank');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSent(false), 4000);
        }, 800);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-poppins font-bold text-textm dark:text-white mb-4">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                        Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-background dark:bg-gray-900 rounded-3xl overflow-hidden shadow-soft max-w-5xl mx-auto">

                    {/* Contact Info (Left) */}
                    <div className="w-full lg:w-2/5 p-10 bg-primary text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Background design elements */}
                        <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -m-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold font-poppins mb-2">Contact Information</h3>
                            <p className="text-indigo-100 mb-10">Fill up the form and I will get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-xl text-accent" />
                                    <span>+91 9081734816</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-xl text-accent" />
                                    <a href="mailto:jadavjay9899@gmail.com" className="hover:text-accent transition-colors">jadavjay9899@gmail.com</a>
                                </div>
                                <div className="flex flex-start gap-4">
                                    <FaMapMarkerAlt className="text-xl text-accent mt-1" />
                                    <span>Atmiya University<br />Rajkot, Gujarat</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12 relative z-10">
                            <a href="https://github.com/jay-jadav" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                                <FaGithub className="text-lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/jay-jadav-84a23336a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                                <FaLinkedinIn className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors duration-300">
                                <FaInstagram className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Form (Right) */}
                    <div className="w-full lg:w-3/5 p-10 lg:p-12 border border-transparent dark:border-gray-800">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required

                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-textm dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required

                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-textm dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="How can I help you?"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-textm dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || sent}
                                    className={`flex items-center gap-2 w-full sm:w-auto px-8 py-3.5 font-medium rounded-lg transition-all duration-300 shadow-soft disabled:cursor-not-allowed
                                        ${sent
                                            ? 'bg-green-500 text-white scale-95'
                                            : 'bg-[#25D366] text-white hover:bg-[#1ebe5d] active:scale-95'
                                        } disabled:opacity-80`}
                                >
                                    <FaWhatsapp className="text-xl" />
                                    {isSubmitting ? 'Opening WhatsApp...' : sent ? '✓ Sent to WhatsApp!' : 'Send via WhatsApp'}
                                </button>
                                
                                <button
                                    type="button"
                                    onClick={() => {
                                        const subject = encodeURIComponent("Portfolio Inquiry");
                                        const body = encodeURIComponent(`Hello Jay! 👋\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
                                        window.location.href = `mailto:jadavjay9899@gmail.com?subject=${subject}&body=${body}`;
                                    }}
                                    className="flex items-center gap-2 w-full sm:w-auto px-8 py-3.5 font-medium rounded-lg transition-all duration-300 shadow-soft bg-red-600 text-white hover:bg-red-700 active:scale-95"
                                >
                                    <FaEnvelope className="text-xl" />
                                    Send via Email
                                </button>
                                
                                {sent && (
                                    <p className="text-sm text-green-600 dark:text-green-400 animate-pulse">
                                        WhatsApp has been opened! 🎉
                                    </p>
                                )}
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;

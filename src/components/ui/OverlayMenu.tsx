import React, { useEffect, useState } from 'react';

interface OverlayMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Check if mobile on client side only
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const menuItems = [
        { name: 'Home', href: '#home', delay: '0.1s', icon: '🏠' },
        { name: 'About', href: '#about', delay: '0.2s', icon: '👨‍💻' },
        { name: 'Skills', href: '#skills', delay: '0.3s', icon: '🛠️' },
        { name: 'Projects', href: '#projects', delay: '0.4s', icon: '💼' },
        { name: 'Experience', href: '#experience', delay: '0.5s', icon: '🚀' },
        { name: 'Testimonials', href: '#testimonials', delay: '0.6s', icon: '⭐' },
        { name: 'Contact', href: '#contact', delay: '0.7s', icon: '📧' }
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: 'https://linkedin.com/in/sayak-mallick', icon: '💼' },
        { name: 'GitHub', href: 'https://github.com/sayak-mallick', icon: '🐱' },
        { name: 'Twitter', href: 'https://twitter.com/sayak_mallick', icon: '🐦' },
        { name: 'Instagram', href: 'https://instagram.com/sayak.mallick', icon: '📷' }
    ];

    const handleLinkClick = (href: string) => {
        onClose();
        // Small delay to allow menu to close before scrolling
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 transition-all duration-700 ease-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
            {/* Background Overlay with Enhanced Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-slate-900/98 via-purple-900/96 to-teal-900/98 backdrop-blur-xl transition-all duration-700 ${
                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`} />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`floating-element absolute top-20 left-5 md:left-10 w-32 md:w-40 h-32 md:h-40 bg-teal-400/20 md:bg-teal-400/30 rounded-full blur-2xl transition-all duration-1000 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
                <div className={`floating-element absolute top-1/2 right-5 md:right-20 w-24 md:w-32 h-24 md:h-32 bg-purple-400/20 md:bg-purple-400/25 rounded-full blur-2xl transition-all duration-1000 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
                <div className={`floating-element absolute bottom-20 left-1/4 md:left-1/3 w-20 md:w-28 h-20 md:h-28 bg-pink-400/15 md:bg-pink-400/20 rounded-full blur-2xl transition-all duration-1000 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
                <div className={`floating-element absolute top-1/4 left-1/2 w-16 md:w-24 h-16 md:h-24 bg-cyan-400/10 md:bg-cyan-400/15 rounded-full blur-xl transition-all duration-1000 ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full p-4 sm:p-8 max-w-full overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white hover:text-teal-300 transition-all duration-500 hover:scale-110 hover:rotate-180 rounded-full border border-white/30 hover:border-teal-400/60 backdrop-blur-sm bg-white/20 hover:bg-teal-400/30 ${
                        isOpen ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-8 opacity-0 rotate-90'
                    }`}
                    style={{ transitionDelay: isOpen ? '0.1s' : '0s' }}
                    aria-label="Close menu"
                >
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-0.5 bg-current transform rotate-45 -translate-y-0.5"></span>
                        <span className="absolute left-0 top-1/2 w-full h-0.5 bg-current transform -rotate-45 -translate-y-0.5"></span>
                    </div>
                </button>

                {/* Logo with Enhanced Animation */}
                <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
                    isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95'
                }`} style={{ transitionDelay: isOpen ? '0.3s' : '0s' }}>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-wider relative text-center">
                        {'<SM />'}
                        <span className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-teal-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-50 blur-xl"></span>
                    </h1>
                    <p className="text-teal-300 text-base sm:text-lg md:text-xl text-center font-medium">
                        Full Stack Developer
                    </p>
                    <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center">
                        <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full"></div>
                    </div>
                </div>

                {/* Navigation Menu with Icons - Simplified Mobile Layout */}
                <nav className="flex flex-col items-center space-y-6 mb-12 sm:mb-16 w-full">
                    {menuItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(item.href);
                            }}
                            className={`group flex flex-col items-center justify-center w-full text-white transition-all duration-700 hover:scale-105 relative ${
                                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                            } px-4 py-4`}
                            style={{
                                transitionDelay: isOpen ? item.delay : '0s'
                            }}
                        >
                            {/* Icon */}
                            <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                            </span>

                            {/* Text - Always visible */}
                            <span className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
                                {item.name}
                            </span>

                            {/* Background effect */}
                            <span className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-purple-400/10 to-pink-400/10 rounded-lg transform scale-0 group-hover:scale-100 transition-all duration-500 -z-10"></span>
                        </a>
                    ))}
                </nav>

                {/* Enhanced Social Links */}
                <div className={`flex space-x-3 sm:space-x-4 md:space-x-6 mb-6 sm:mb-8 transition-all duration-1000 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '0.9s' : '0s' }}>
                    {socialLinks.map((social, index) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center text-lg sm:text-xl md:text-2xl bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-teal-400/30 hover:to-purple-400/30 hover:border-teal-400/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
                            title={social.name}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                {social.icon}
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Bottom Text with Enhanced Styling */}
                <div className={`absolute bottom-3 sm:bottom-4 md:bottom-6 text-center transition-all duration-1000 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`} style={{ transitionDelay: isOpen ? '1.1s' : '0s' }}>
                    <p className="text-white/70 text-xs sm:text-sm font-medium px-4">
                        © 2025 Sayak Mallick. All rights reserved.
                    </p>
                    <div className="mt-1 sm:mt-2 flex justify-center">
                        <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-white/30 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Enhanced Decorative Elements - Safe client-side rendering */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating particles with different sizes */}
                {Array.from({ length: isMobile ? 10 : 25 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute bg-white/20 rounded-full transition-all duration-1000 ${
                            isOpen ? 'opacity-100 animate-pulse' : 'opacity-0'
                        } ${i % 3 === 0 ? 'w-1 h-1 sm:w-1.5 sm:h-1.5' : i % 3 === 1 ? 'w-0.5 h-0.5 sm:w-1 sm:h-1' : 'w-px h-px sm:w-0.5 sm:h-0.5'}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            transitionDelay: isOpen ? `${i * 0.05}s` : '0s'
                        }}
                    />
                ))}

                {/* Gradient mesh overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent transition-opacity duration-1000 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`} />
            </div>
        </div>
    );
};

export default OverlayMenu;

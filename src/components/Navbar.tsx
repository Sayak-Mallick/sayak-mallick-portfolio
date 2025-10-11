import { useState, useEffect } from 'react';
import OverlayMenu from './ui/OverlayMenu';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/5 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-teal-500/10' 
                    : 'bg-transparent'
            } ${isMenuOpen ? 'pointer-events-none' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="#home"
                                className={`navbar-logo text-2xl md:text-3xl font-bold text-white hover:text-teal-300 transition-all duration-500 relative group ${
                                    isMenuOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                                }`}
                            >
                                {'<SM />'}
                                <span className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className={`hidden lg:flex space-x-8 transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}>
                            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Testimonials', 'Contact'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-white/80 hover:text-white text-sm font-medium transition-all duration-300 hover:scale-105 relative group py-2"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                                    <span className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button - Hidden when overlay is open */}
                        <div className={`lg:hidden transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'
                        }`}>
                            <button
                                onClick={toggleMenu}
                                className="relative w-12 h-12 flex items-center justify-center text-white hover:text-teal-300 transition-all duration-300 group rounded-lg hover:bg-white/10"
                                aria-label="Toggle menu"
                            >
                                <div className="relative w-6 h-6">
                                    <span className="absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center"></span>
                                    <span className="absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300"></span>
                                    <span className="absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 origin-center"></span>
                                </div>
                                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay Menu */}
            <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;

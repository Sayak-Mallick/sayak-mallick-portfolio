import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ParticlesBackground from "../components/ui/ParticlesBackground.tsx";
import hello from "../assets/icons/Hello.gif";
import linkedinIcon from "../assets/icons/linkedin.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import githubIcon from "../assets/icons/github.svg";
import instagramIcon from "../assets/icons/instagram.svg";

const Home = () => {
    const roles = useMemo(() => ["Full-Stack Developer", "Open Source Enthusiast", "Tech Blogger", "UI/UX Designer"], []);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        const timeout = setTimeout(() => {
            if (!deleting && subIndex < current.length) {
                setSubIndex(v => v + 1);
            } else if (!deleting && subIndex === current.length) {
                setTimeout(() => {
                    setDeleting(true)
                }, 1200);
            } else if (deleting && subIndex > 0) {
                setSubIndex(v => v - 1);
            } else if (deleting && subIndex === 0) {
                setDeleting(false);
                setIndex(p => (p + 1) % roles.length);
            }
        }, deleting ? 40 : 60);
        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, roles]);

    const socials = [
        { icon: linkedinIcon, label: "Linkedin", href: "https://www.linkedin.com/in/sayakmallick/" },
        { icon: whatsappIcon, label: "WhatsApp", href: "https://wa.me/916289435632" },
        { icon: instagramIcon, label: "Instagram", href: "https://www.instagram.com/sayakmallick/" },
        { icon: githubIcon, label: "GitHub", href: "https://github.com/Sayak-Mallick" }
    ];

    return (
        <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
            <ParticlesBackground />
            <div className="absolute inset-0">
                <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse">
                </div>
                <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500">
                </div>
            </div>
            <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center h-full text-center lg:text-left relative z-20">
                    <div className="w-full lg-pr-24 mx-auto max-w-[48rem] relative z-30">
                        <motion.div className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <span>
                                {roles[index].substring(0, subIndex)}<span className="blinking-cursor">|</span>
                            </span>
                            <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle">
                            </span>
                        </motion.div>
                        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                            <div>Hi <img src={hello} alt="Hello" className="inline-block w-16 h-16 ml-2" />, I'm</div>
                            <div><span className="text-teal-400">Sayak Mallick</span></div>
                        </motion.h1>
                        <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                            A passionate developer crafting beautiful web experiences.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                            <a href="#contact" className="px-6 py-3 bg-teal-500 text-white rounded-md text-lg font-medium hover:bg-teal-600 transition-all duration-300 text-center">
                                Contact Me
                            </a>
                            <a href="#projects" className="px-6 py-3 border border-white/30 text-white rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-300 text-center">
                                View Projects
                            </a>
                        </motion.div>
                        <motion.div className="flex justify-center lg:justify-start mt-8 gap-6 relative" style={{ zIndex: 99999 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer block relative p-2 -m-2"
                                    aria-label={social.label}
                                    style={{
                                        zIndex: 99999,
                                        pointerEvents: 'auto',
                                        position: 'relative'
                                    }}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.label}
                                        className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer"
                                        style={{
                                            pointerEvents: 'none',
                                            display: 'block'
                                        }}
                                    />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home

import './App.css'
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import About from "./sections/About.tsx";
import Home from "./sections/Home.tsx";
import Skills from "./sections/Skills.tsx";
import Projects from "./sections/Projects.tsx";
import Experience from "./sections/Experience.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Contact from "./sections/Contact.tsx";
import ParticlesBackground from "./components/ui/ParticlesBackground.tsx";
import CustomCursor from "./components/ui/CustomCursor.tsx";

function App() {
    return (
        <div className="relative gradient text-white scroll-smooth">
            <CustomCursor />
            <ParticlesBackground />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

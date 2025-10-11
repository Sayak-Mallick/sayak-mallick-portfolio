import {useEffect, useRef} from "react";
import htmlIcon from "../../assets/icons/html-icon.svg";
import cssIcon from "../../assets/icons/css-icon.svg";
import jsIcon from "../../assets/icons/js-icon.svg";
import reactIcon from "../../assets/icons/react-icon.svg";
import tsIcon from "../../assets/icons/typescript-icon.svg";
import tailwindIcon from "../../assets/icons/tailwind-icon.svg";
import viteIcon from "../../assets/icons/vite-icon.svg";
import vscodeIcon from "../../assets/icons/vscode-icon.svg";
import githubicon from "../../assets/icons/github.svg";
import nodeicon from "../../assets/icons/node-icon.svg";

const ParticlesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: (Particle | IconParticle)[] = [];
        const particleCount = 100;
        const iconCount = 30;
        const colors = ['rgba(255, 255, 255, 0.7)'];

        const icons = [
            htmlIcon, cssIcon, jsIcon, reactIcon, tsIcon,
            tailwindIcon, viteIcon, vscodeIcon, githubicon, nodeicon
        ];

        class Particle {
            x: number;
            y: number;
            radius: number;
            color: string;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 2 + 1;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                this.draw();
            }
        }

        class IconParticle {
            x: number;
            y: number;
            size: number;
            icon: HTMLImageElement;
            speedX: number;
            speedY: number;

            constructor(iconSrc: string) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = 30 + Math.random() * 20; // Medium size (30-50px)
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;

                this.icon = new Image();
                this.icon.src = iconSrc;
            }

            draw() {
                if (this.icon.complete) {
                    ctx.drawImage(this.icon, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
                }
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;

                this.draw();
            }
        }

        function createParticles() {
            particles = [];
            // Create regular particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            // Create icon particles
            for (let i = 0; i < iconCount; i++) {
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                particles.push(new IconParticle(randomIcon));
            }
        }

        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        let animationId: number;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => p.update());
            animationId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        </canvas>
    )
}

export default ParticlesBackground;

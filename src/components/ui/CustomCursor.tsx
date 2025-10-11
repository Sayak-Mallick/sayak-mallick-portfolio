import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState('');

    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    // @ts-ignore
    const rafId = useRef<number>();

    useEffect(() => {
        let isActive = true;

        const animate = () => {
            if (!isActive || !cursorRef.current || !cursorDotRef.current) return;

            // Smooth cursor following with easing
            const ease = 0.12;
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

            // Update positions with transformed for better performance
            cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
            cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;

            rafId.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            setIsHovering(true);

            if (target.tagName === 'A' || target.closest('a')) {
                setCursorText('CLICK');
            } else if (target.tagName === 'BUTTON' || target.closest('button')) {
                setCursorText('PRESS');
            } else if (target.classList.contains('project-card') || target.closest('.project-card')) {
                setCursorText('VIEW');
            } else {
                setCursorText('');
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            setCursorText('');
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, [role="button"], input, textarea, select, .project-card, .skill-item, .nav-link'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Start animation
        animate();

        return () => {
            isActive = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });

            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }

            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
            >
                {cursorText && <span className="cursor-text">{cursorText}</span>}
            </div>

            <div
                ref={cursorDotRef}
                className={`custom-cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
            />
        </>
    );
};

export default CustomCursor;

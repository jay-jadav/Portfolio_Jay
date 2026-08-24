import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    // Use refs for mouse position to avoid re-renders on every mouse move
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef(null);

    useEffect(() => {
        // Check for touch device — hide custom cursor on mobile
        const isMobile = window.matchMedia('(pointer: coarse)').matches;
        if (isMobile) return;

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            // Move the dot instantly
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Detect hoverable elements
        const handleElementHover = (e) => {
            const target = e.target;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('[role="button"]') ||
                target.closest('.cursor-pointer') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA';
            setIsHovering(!!isInteractive);
        };

        // Smooth ring follow with lerp (linear interpolation)
        const animateRing = () => {
            const ease = 0.15; // lower = smoother/slower trailing
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
            }

            animationFrameId.current = requestAnimationFrame(animateRing);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleElementHover);

        // Start the ring animation loop
        animationFrameId.current = requestAnimationFrame(animateRing);

        // Hide default cursor globally
        document.body.style.cursor = 'none';
        const style = document.createElement('style');
        style.id = 'custom-cursor-hide';
        style.textContent = `
            *, *::before, *::after {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleElementHover);
            cancelAnimationFrame(animationFrameId.current);
            document.body.style.cursor = '';
            const el = document.getElementById('custom-cursor-hide');
            if (el) el.remove();
        };
    }, []);

    // Don't render on mobile touch devices, but allow on laptops with touch screens
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return null;

    return (
        <>
            {/* Inner Dot */}
            <div
                ref={dotRef}
                className="custom-cursor-dot"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? '10px' : '8px',
                    height: isHovering ? '10px' : '8px',
                    borderRadius: '50%',
                    background: isClicking
                        ? 'linear-gradient(135deg, #06B6D4, #4F46E5)'
                        : 'linear-gradient(135deg, #4F46E5, #06B6D4)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, background 0.3s ease',
                    willChange: 'transform',
                    boxShadow: '0 0 8px rgba(79, 70, 229, 0.5)',
                }}
            />

            {/* Outer Ring */}
            <div
                ref={ringRef}
                className="custom-cursor-ring"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: isHovering ? '50px' : isClicking ? '30px' : '36px',
                    height: isHovering ? '50px' : isClicking ? '30px' : '36px',
                    borderRadius: '50%',
                    border: `2px solid ${isHovering ? '#06B6D4' : 'rgba(79, 70, 229, 0.5)'}`,
                    pointerEvents: 'none',
                    zIndex: 99998,
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease',
                    willChange: 'transform',
                    background: 'transparent',
                }}
            />
        </>
    );
};

export default CustomCursor;

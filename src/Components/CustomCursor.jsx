import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const previousPosition = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const hoverableElements = document.querySelectorAll('.hover-cursor-scale');

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    hoverableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      previousPosition.current.x += (mousePosition.x - previousPosition.current.x) * 0.1;
      previousPosition.current.y += (mousePosition.y - previousPosition.current.y) * 0.1;

      const cursor = cursorRef.current;
      if (cursor) {
        const offset = isHovered ? 96 : 16;
        cursor.style.transform = `translate3d(${previousPosition.current.x - offset}px, ${
          previousPosition.current.y - offset
        }px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePosition, isHovered]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out 
        ${isHovered ? 'w-100 h-100 bg-[#EB5939] mix-blend-difference' : 'w-8 h-8 bg-[#EB5939]'}`}
    />
  );
};

export default CustomCursor;

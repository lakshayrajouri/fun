"use client";
import { useEffect, useState } from "react";

const CandleCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowSize, setGlowSize] = useState(150);
  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({
        x: event.clientX - glowSize / 2,
        y: event.clientY - glowSize / 2,
      });
    };

    document.addEventListener("mousemove", updateMousePosition);
    return () => document.removeEventListener("mousemove", updateMousePosition);
  }, [glowSize]);

  useEffect(() => {
    const flickerEffect = () => {
      setGlowSize(140 + Math.random() * 20); // Size varies between 140px - 160px
      setOpacity(0.6 + Math.random() * 0.4); // Opacity varies between 0.6 - 1
    };

    const interval = setInterval(flickerEffect, 100 + Math.random() * 200); // Random flicker timing (100-300ms)
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="candle-glow"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: `${glowSize}px`,
        height: `${glowSize}px`,
        opacity: opacity,
      }}
    />
  );
};

export default CandleCursor;

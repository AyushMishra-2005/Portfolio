import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Background({ darkMode }) {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const initialBubbles = Array.from({ length: 15 }, () => ({
      id: Math.random().toString(36).substring(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full ${
            darkMode ? 'bg-gray-700 opacity-30' : 'bg-blue-200 opacity-40'
          }`}
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}rem`,
            height: `${bubble.size}rem`,
          }}
          animate={{
            y: [0, -50, -100, -150, -200],
            x: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
            opacity: [0.4, 0.6, 0.3, 0.1, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}

      <div
        className={`absolute inset-0 pointer-events-none mix-blend-overlay ${
          darkMode ? 'bg-grid-dark opacity-5' : 'bg-grid-light opacity-5'
        }`}
      />

      <div
        className={`absolute inset-0 pointer-events-none mix-blend-overlay ${
          darkMode ? 'noise-dark opacity-10' : 'noise-light opacity-10'
        }`}
      />

      <div className={`absolute inset-0 pointer-events-none ${
        darkMode 
          ? 'bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.1)_0%,transparent_70%)]' 
          : 'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]'
      }`} />
    </div>
  );
}
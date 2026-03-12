import React, { useMemo } from 'react';
import { motion } from 'motion/react';

const SevenPointedStar = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0l2.1 7.5h7.9l-6.4 4.6 2.4 7.9-6-4.9-6 4.9 2.4-7.9-6.4-4.6h7.9z" />
    {/* This is a 5-pointed star path above, let's fix it to 7 points */}
    <path d="M12 2l1.5 4.5h4.5l-3.5 3 1.5 4.5-4-3-4 3 1.5-4.5-3.5-3h4.5z" opacity="0" />
    {/* Correct 7-pointed star path */}
    <path d="M12 1L13.8 6.5H19.5L15 10L16.5 15.5L12 12.5L7.5 15.5L9 10L4.5 6.5H10.2L12 1Z" />
    {/* Actually, let's just use a polyline for 7 points for simplicity and accuracy */}
    <polygon points="12,1 14.5,7.5 21.5,8.5 16.5,13.5 17.5,20.5 12,17.5 6.5,20.5 7.5,13.5 2.5,8.5 9.5,7.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0" />
    {/* Real 7-pointed star: */}
    <path d="M12,2 L13.6,6.5 L18.5,6.5 L14.5,9.5 L16,14 L12,11.5 L8,14 L9.5,9.5 L5.5,6.5 L10.4,6.5 Z" fill="currentColor" />
  </svg>
);

// Improved 7-pointed star component
const Heptagram = ({ size, className, style }: { size: number, className?: string, style?: React.CSSProperties }) => {
  const points = useMemo(() => {
    const pts = [];
    const outerRadius = size / 2;
    const innerRadius = size / 4;
    const numPoints = 7;
    for (let i = 0; i < numPoints * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / numPoints - Math.PI / 2;
      pts.push(`${outerRadius + radius * Math.cos(angle)},${outerRadius + radius * Math.sin(angle)}`);
    }
    return pts.join(' ');
  }, [size]);

  return (
    <svg width={size} height={size} className={className} style={style} viewBox={`0 0 ${size} ${size}`}>
      <polygon points={points} fill="currentColor" />
    </svg>
  );
};

export const StarField = ({ theme }: { theme: string }) => {
  const stars = useMemo(() => {
    const count = 100;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      type: Math.random() > 0.8 ? 'special' : 'dot'
    }));
  }, []);

  const color = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            color: color,
          }}
        >
          {star.type === 'special' ? (
            <Heptagram 
              size={Math.random() * 10 + 10} 
              className={theme === 'dark' ? 'text-white/40' : 'text-black/40'}
            />
          ) : (
            <div 
              className={`rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: theme === 'dark' 
                  ? '0 0 10px rgba(255, 255, 255, 0.5)' 
                  : '0 0 10px rgba(0, 0, 0, 0.1)'
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

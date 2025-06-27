"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface GlobeAnimationProps {
  className?: string;
  size?: number | string;
  glowColor?: string;
  interactive?: boolean;
}

export default function GlobeAnimation({ 
  className = "", 
  size = 300,
  glowColor = "rgba(184, 115, 51, 0.5)", // Default warm-copper glow
  interactive = true
}: GlobeAnimationProps) {
  // Animation controls for interactive mode
  const controls = useAnimation();
  
  // Motion values for mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation values with constraints
  const rotateY = useTransform(mouseX, [-300, 300], [15, -15]);
  const rotateX = useTransform(mouseY, [-300, 300], [-15, 15]);
  
  // State for controlling base rotation
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle mouse movement for interactive mode
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!interactive || !isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    if (!interactive) return;
    
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    controls.start({ rotateY: 360, rotateX: 0 });
  };
  
  // Start automatic rotation when component mounts
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        rotateY: 360,
        transition: { 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }
      });
    } else {
      controls.stop();
    }
  }, [controls, isHovered]);
  
  // Container size styles
  const sizeStyle = { 
    width: typeof size === 'number' ? `${size}px` : size, 
    height: typeof size === 'number' ? `${size}px` : size 
  };
  
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={sizeStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D perspective container with enhanced depth */}
      <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
        {/* Globe container with rotation animation and bulging effect */}
        <motion.div 
          className="relative w-full h-full"
          animate={controls}
          style={{ 
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            rotateY: isHovered ? rotateY : undefined,
            rotateX: isHovered ? rotateX : undefined
          }}
        >
          {/* Globe base with enhanced 3D sphere effect and bulging */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden" 
            style={{ 
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.8) 80%)',
              boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255,255,255,0.3)',
              transform: 'scale3d(1.03, 1.03, 1.03)', // Slight bulging effect
            }}
          >
            {/* Ocean base with enhanced depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-deep-forest to-deep-forest/70 dark:from-warm-copper/80 dark:to-warm-copper/50">
              {/* 3D depth effect for the globe surface */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)',
                  mixBlendMode: 'multiply'
                }}
              />
              
              {/* Animated water shimmer effect */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
                  backgroundSize: '10px 10px'
                }}
                animate={{ x: [0, 10], y: [0, 5] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
              />
            </div>
            
            {/* Continents with enhanced 3D effect */}
            <div 
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="w-[85%] h-[85%] bg-[url('/world-map.png')] bg-contain bg-center bg-no-repeat"
                style={{ 
                  opacity: 0.9,
                  mixBlendMode: 'soft-light',
                  filter: 'contrast(1.3) brightness(1.2)',
                }}
              />
              
              {/* Continent highlight effect with animation */}
              <motion.div 
                className="absolute w-[85%] h-[85%] bg-[url('/world-map.png')] bg-contain bg-center bg-no-repeat"
                style={{ 
                  opacity: 0.5,
                  filter: 'brightness(1.7) contrast(1.3)',
                  mixBlendMode: 'overlay',
                }}
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
            
            {/* Time zone lines with 3D effect */}
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
              {[20, 40, 60, 80, 100, 120, 140, 160].map((deg, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 border border-cream/15 dark:border-cream/10 rounded-full"
                  style={{ 
                    transform: `rotateZ(${deg}deg) rotateX(80deg) scale3d(1, 0.3, 1)`,
                    boxShadow: 'inset 0 0 5px rgba(255,255,255,0.1)',
                  }}
                />
              ))}
              
              {/* Equator line */}
              <div 
                className="absolute inset-0 border-2 border-cream/20 dark:border-warm-copper/30 rounded-full"
                style={{ transform: 'rotateX(90deg)' }}
              />
            </div>
          </div>
          
          {/* Enhanced 3D atmosphere effect with depth */}
          <div 
            className="absolute -inset-2 rounded-full opacity-40"
            style={{ 
              background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)',
              filter: 'blur(6px)',
              transform: 'translateZ(10px)',
            }}
          />
          
          {/* Additional highlight for 3D bulge effect */}
          <div 
            className="absolute -inset-1 rounded-full"
            style={{ 
              background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
              transform: 'translateZ(5px)',
            }}
          />
        </motion.div>
      </div>

      {/* Enhanced glow effect with more depth */}
      <motion.div 
        className="absolute -inset-8 rounded-full blur-xl"
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          zIndex: -1,
        }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      {/* Secondary glow for layered effect */}
      <motion.div 
        className="absolute -inset-4 rounded-full blur-lg"
        style={{ 
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 60%)`,
          zIndex: -1,
          opacity: 0.3,
        }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 0.5,
        }}
      />
      
      {/* Highlight for 3D effect */}
      <div 
        className="absolute top-0 left-[15%] w-[30%] h-[30%] rounded-full bg-white/30 blur-md"
        style={{ 
          filter: 'blur(8px)',
          transform: 'translateZ(10px)',
        }}
      />
    </div>
  );
}

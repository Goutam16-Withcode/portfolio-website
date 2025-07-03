import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Model3D from '../models/Model3D';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { theme, nextTheme } = useTheme();

  useEffect(() => {
    // Check if we're on a mobile device
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Dynamic floating elements based on theme
  const getRandomColor = (index) => {
    // Extract color from theme accent for floating elements
    const colors = [
      'bg-purple-500',
      'bg-blue-500',
      'bg-cyan-500',
      'bg-green-400',
      'bg-red-500',
      'bg-pink-500',
      'bg-amber-500'
    ];
    
    const colorIndex = (index % colors.length);
    return colors[colorIndex];
  };

  return (
    <section id="home" className="relative h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute top-0 left-0 w-full h-full ${theme.bgPrimary} z-0 transition-colors duration-500`}></div>
      
      {/* Animated particles with theme-based colors */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${getRandomColor(i)} opacity-10`}
            animate={{
              x: [
                Math.random() * 100 - 50, 
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              y: [
                Math.random() * 100 - 50, 
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              scale: [0.8, 1.2, 0.9, 1.1],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left side content */}
        <motion.div 
          className={`w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0 mt-20 md:mt-0 ${theme.textPrimary}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.accent}`}>
              <TypeAnimation
                sequence={['a Developer', 1000, 'a B.Tech Student', 1000, 'an Engineer', 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          
          <p className={`${theme.textSecondary} text-lg md:text-xl mb-8`}>
            I build modern, responsive, and innovative digital experiences for the web and beyond.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="#contact"
              className={`px-8 py-3 ${theme.buttonBg} ${theme.textPrimary} rounded-lg font-medium transition-all duration-300`}
              whileHover={{ scale: 1.05, className: `px-8 py-3 ${theme.buttonBg} ${theme.hoverEffect} ${theme.textPrimary} rounded-lg font-medium` }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              href="#projects"
              className={`px-8 py-3 border border-opacity-50 bg-transparent bg-opacity-10 hover:bg-opacity-20 ${theme.textSecondary} rounded-lg font-medium transition-all duration-300`}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                nextTheme(); // Change theme when clicking this button
              }}
            >
              View Projects & Change Theme
            </motion.a>
          </div>
        </motion.div>

        {/* 3D Model Animation */}
        <motion.div 
          className="w-full md:w-1/2 h-[400px] md:h-[600px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Model3D isMobile={isMobile} />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={1.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll indicator with theme-based animation */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center ">
        <span className={`${theme.textSecondary} mb-2`}>Scroll Down</span>
        <div className={`w-[30px] h-[50px] rounded-full border-2 border-opacity-50 ${theme.textSecondary} flex justify-center p-2`}>
          <motion.div 
            className={`w-1.5 h-1.5 rounded-full ${theme.textSecondary}`}
            animate={{ 
              y: [0, 15, 0],
              backgroundColor: ['#fff', '#aaa', '#fff']
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

const Model3D = ({ isMobile }) => {
  const meshRef = useRef();
  const { theme, currentThemeIndex } = useTheme();
  const [modelColors, setModelColors] = useState({
    main: '#4285F4',
    emissive: '#2b68d9',
    secondary1: '#8C43FF',
    secondary2: '#4FC3F7',
    emissive1: '#5B2CA6',
    emissive2: '#0288D1'
  });

  // Update colors based on theme
  useEffect(() => {
    const themeColors = {
      0: { // midnight theme (purple-blue)
        main: '#6366F1',
        emissive: '#4F46E5',
        secondary1: '#8B5CF6',
        secondary2: '#3B82F6',
        emissive1: '#6D28D9',
        emissive2: '#2563EB'
      },
      1: { // neon theme (green-cyan)
        main: '#10B981',
        emissive: '#059669',
        secondary1: '#34D399',
        secondary2: '#06B6D4',
        emissive1: '#047857',
        emissive2: '#0891B2'
      },
      2: { // crimson theme (red-pink)
        main: '#EF4444',
        emissive: '#DC2626',
        secondary1: '#F43F5E',
        secondary2: '#E11D48',
        emissive1: '#B91C1C',
        emissive2: '#BE185D'
      },
      3: { // sunset theme (amber-red)
        main: '#F59E0B',
        emissive: '#D97706',
        secondary1: '#F97316',
        secondary2: '#EA580C',
        emissive1: '#B45309',
        emissive2: '#C2410C'
      }
    };

    setModelColors(themeColors[currentThemeIndex]);
  }, [currentThemeIndex]);

  // Since we don't have an actual GLTF model, we'll create a geometric shape
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Animate our custom 3D object
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  // Scale for different device sizes
  const scale = isMobile ? 1.5 : 2.2;

  return (
    <group rotation={[Math.PI / 4, 0, 0]}>
      {[...Array(12)].map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const size = 0.2;

        // Create star shape
        const starShape = new THREE.Shape();
        const spikes = 5;
        const outerRadius = 0.4;
        const innerRadius = 0.2;

        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? outerRadius : innerRadius;
          const a = (i / (spikes * 2)) * Math.PI * 2;
          const sx = Math.cos(a) * r;
          const sy = Math.sin(a) * r;
          if (i === 0) starShape.moveTo(sx, sy);
          else starShape.lineTo(sx, sy);
        }
        starShape.closePath();

        const extrudeSettings = { depth: 0.1, bevelEnabled: false };
        const geometry = new THREE.ExtrudeGeometry(starShape, extrudeSettings);

        return (
          <mesh
            key={`star-${index}`}
            position={[x, 0, z]}
            scale={[size, size, size]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial
              color={index % 2 === 0 ? modelColors.secondary1 : modelColors.secondary2}
              emissive={index % 2 === 0 ? modelColors.emissive1 : modelColors.emissive2}
              emissiveIntensity={1}
              metalness={0.7}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>

  );
};

export default Model3D;
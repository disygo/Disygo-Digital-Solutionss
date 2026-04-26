import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function RotatingShape({ position, color, args, distort = 0.3 }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={args} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function DataVisualizer() {
  const groupRef = useRef<THREE.Group>(null);
  const bars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      position: [(i - 20) * 0.3, -2, 0],
      height: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const bar = bars[i];
        child.scale.y = 1 + Math.sin(state.clock.getElapsedTime() * 2 + bar.delay) * 0.5;
        child.position.y = (child.scale.y / 2) - 3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {bars.map((bar, i) => (
        <mesh key={i} position={bar.position as any}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#50e5ea" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function AnimatedBackground() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#50e5ea"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      
      <RotatingShape position={[3, 1, -2]} color="#111" args={[0.8, 64, 64]} distort={0.5} />
      <RotatingShape position={[-4, -2, -3]} color="#50e5ea" args={[0.4, 32, 32]} distort={0.3} />
      
      <DataVisualizer />

      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#50e5ea" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#50e5ea" />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 5, 15]} />
        <AnimatedBackground />
      </Canvas>
    </div>
  );
}

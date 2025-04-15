import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
      <MeshDistortMaterial
        color="#800020"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
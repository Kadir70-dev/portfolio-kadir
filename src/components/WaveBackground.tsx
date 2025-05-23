// src/components/WaveBackground.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import React, { useRef, memo } from "react";
import * as THREE from "three";

const WaveMesh = memo(() => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() / 4) / 2;
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -5]}>
      <planeGeometry args={[50, 50, 64, 64]} />
      <MeshWobbleMaterial
        color="#2196f3"
        factor={0.9}
        speed={1.5}
        transparent
        opacity={0.15}
      />
    </mesh>
  );
});
WaveMesh.displayName = "WaveMesh";

export default function WaveBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 70 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <WaveMesh />
        {/* Uncomment if you want user camera control */}
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  );
}

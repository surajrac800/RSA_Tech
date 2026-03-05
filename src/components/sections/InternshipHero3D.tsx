"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

function CoreCube() {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.5;
      meshRef.current.rotation.x = 0.6 + Math.sin(t * 0.7) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow position={[1.8, 0, 0]}>
      <boxGeometry args={[1.4, 1.4, 1.4]} />
      <meshStandardMaterial
        color="#3b82f6"
        metalness={0.5}
        roughness={0.25}
        emissive="#22c55e"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function OrbitNode(props: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + props.delay;
    if (meshRef.current) {
      meshRef.current.position.x = Math.cos(t * 0.8) * props.position[0];
      meshRef.current.position.z = Math.sin(t * 0.8) * props.position[2];
      meshRef.current.position.y = props.position[1] + Math.sin(t * 1.1) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.18, 24, 24]} />
      <meshStandardMaterial color={props.color} emissive={props.color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function InternshipScene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#60a5fa" />
      <pointLight position={[-3, -4, -2]} intensity={0.9} color="#a855f7" />
      <CoreCube />
      <OrbitNode position={[3.2, 0.4, 2.4]} color="#38bdf8" delay={0} />
      <OrbitNode position={[2.8, -0.3, -2.4]} color="#22c55e" delay={1.2} />
      <OrbitNode position={[3.6, 0.2, -1.8]} color="#eab308" delay={2.4} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </>
  );
}

export function InternshipHero3D() {
  return (
    <div className="relative h-full w-full">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          className="h-full w-full"
        >
          <InternshipScene />
        </Canvas>
      </Suspense>

      {/* Tech bubble overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[62%] top-[18%] h-10 w-10 rounded-full bg-sky-400/40 blur-sm animate-ping" />
        <div className="absolute left-[72%] bottom-[22%] h-8 w-8 rounded-full bg-emerald-400/40 blur-sm animate-pulse" />
        <div className="absolute right-[14%] top-[22%] h-12 w-12 rounded-full bg-blue-500/35 blur-md animate-ping" />
        <div className="absolute right-[6%] bottom-[26%] h-9 w-9 rounded-full bg-purple-500/35 blur-md animate-pulse" />
      </div>
    </div>
  );
}


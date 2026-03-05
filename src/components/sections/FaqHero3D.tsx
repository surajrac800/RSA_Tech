"use client";

import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";
import { useRef } from "react";

function FloatingSphere() {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.x = 0.4 + Math.sin(t * 0.6) * 0.15;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial
        metalness={0.6}
        roughness={0.2}
        color="#60a5fa"
        emissive="#38bdf8"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function Ring(props: { radius: number; color: string; y: number }) {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.z = t * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, props.y, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[props.radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={props.color} />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 4]} intensity={1.4} color="#60a5fa" />
      <pointLight position={[-4, -3, -3]} intensity={0.8} color="#a855f7" />
      <FloatingSphere />
      <Ring radius={2.1} color="#38bdf8" y={-0.1} />
      <Ring radius={1.7} color="#22c55e" y={0.2} />
      <Ring radius={1.3} color="#a855f7" y={-0.4} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export function FaqHero3D() {
  return (
    <div className="relative mx-auto h-64 max-w-sm rounded-3xl border border-slate-700/70 bg-slate-900/80 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur sm:h-72 md:h-80 lg:h-[340px]">
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500/40 via-sky-400/30 to-emerald-400/30 blur-xl" />
      <div className="relative h-full rounded-3xl bg-slate-950/80">
        <Suspense fallback={null}>
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 5.5], fov: 45 }}
            className="rounded-3xl"
          >
            <Scene />
          </Canvas>
        </Suspense>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-4 pb-4 text-[11px] text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Real‑time insight orbit
          </span>
          <span className="hidden rounded-full bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400 md:inline-flex">
            3D FAQ Visual
          </span>
        </div>
      </div>
    </div>
  );
}


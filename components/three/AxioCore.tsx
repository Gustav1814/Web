"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useAxioStore } from "@/lib/store";

const sectionIntensity: Record<string, number> = {
  hero: 0.45,
  problem: 0.18,
  system: 0.75,
  product: 0.9,
  dashboard: 1,
  industries: 0.7,
  modules: 0.82,
  trust: 0.55,
  architecture: 0.68,
  pricing: 0.48,
  final: 1.25,
};

export function AxioCore({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringC = useRef<THREE.Mesh>(null);
  const activeSection = useAxioStore((state) => state.activeSection);
  const progress = useAxioStore((state) => state.sectionProgress);
  const hovered = useAxioStore((state) => state.coreHovered);
  const setHovered = useAxioStore((state) => state.setCoreHovered);
  const setCursorMode = useAxioStore((state) => state.setCursorMode);

  const fragments = useMemo(
    () =>
      Array.from({ length: mobile ? 10 : 18 }, (_, index) => {
        const angle = (index / (mobile ? 10 : 18)) * Math.PI * 2;
        return {
          position: [Math.cos(angle) * 2.35, Math.sin(angle * 1.7) * 0.55, Math.sin(angle) * 2.35] as const,
          rotation: [angle * 0.4, angle, angle * 0.2] as const,
          scale: 0.07 + (index % 4) * 0.015,
        };
      }),
    [mobile],
  );

  useFrame((state, delta) => {
    if (!group.current || !ringA.current || !ringB.current || !ringC.current) return;
    const intensity = sectionIntensity[activeSection] ?? 0.5;
    const targetScale = (hovered ? 1.08 : 1) * (activeSection === "final" ? 0.88 + progress * 0.18 : 1);
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.055);
    group.current.rotation.y += delta * (0.09 + intensity * 0.045);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.12, 0.035);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -state.pointer.x * 0.08, 0.035);
    ringA.current.rotation.x += delta * 0.17;
    ringA.current.rotation.z -= delta * 0.08;
    ringB.current.rotation.y -= delta * 0.13;
    ringB.current.rotation.x += delta * 0.06;
    ringC.current.rotation.z += delta * 0.11;
  });

  return (
    <Float speed={0.75} rotationIntensity={0.08} floatIntensity={0.18}>
      <group
        ref={group}
        onPointerEnter={(event) => {
          event.stopPropagation();
          setHovered(true);
          setCursorMode("drag");
        }}
        onPointerLeave={() => {
          setHovered(false);
          setCursorMode("default");
        }}
      >
        <mesh>
          <icosahedronGeometry args={[0.74, 2]} />
          <MeshTransmissionMaterial
            transmission={0.95}
            thickness={0.38}
            roughness={0.14}
            chromaticAberration={0.03}
            anisotropy={0.2}
            distortion={0.12}
            distortionScale={0.15}
            temporalDistortion={0.04}
            color="#8adfff"
          />
        </mesh>
        <mesh scale={0.62}>
          <icosahedronGeometry args={[0.74, 1]} />
          <meshStandardMaterial
            color="#06151f"
            emissive="#00b8ec"
            emissiveIntensity={activeSection === "final" ? 2.3 : 0.8}
            metalness={0.75}
            roughness={0.22}
          />
        </mesh>

        <mesh ref={ringA} rotation={[Math.PI / 2.6, 0.2, 0.4]}>
          <torusGeometry args={[1.28, 0.045, 8, 180]} />
          <meshStandardMaterial color="#b8edff" metalness={0.92} roughness={0.2} transparent opacity={0.72} />
        </mesh>
        <mesh ref={ringB} rotation={[0.4, Math.PI / 2.2, 0]}>
          <torusGeometry args={[1.62, 0.023, 6, 180]} />
          <meshBasicMaterial color="#4ea7ff" transparent opacity={0.55} />
        </mesh>
        <mesh ref={ringC} rotation={[0.8, -0.4, 1.2]}>
          <torusGeometry args={[1.94, 0.012, 6, 180]} />
          <meshBasicMaterial color="#836cff" transparent opacity={0.38} />
        </mesh>

        {fragments.map((fragment, index) => (
          <mesh
            key={index}
            position={fragment.position}
            rotation={fragment.rotation}
            scale={fragment.scale}
          >
            <boxGeometry args={[1.7, 0.28, 0.7]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#95eaff" : "#51647b"}
              emissive={index % 3 === 0 ? "#00b8ec" : "#000000"}
              emissiveIntensity={0.8}
              metalness={0.85}
              roughness={0.25}
              transparent
              opacity={0.72}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

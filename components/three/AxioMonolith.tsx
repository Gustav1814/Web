"use client";

import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useAxioStore } from "@/lib/store";

export function AxioMonolith({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  const activeSection = useAxioStore((state) => state.activeSection);
  const progress = useAxioStore((state) => state.sectionProgress);

  useFrame((state, delta) => {
    if (!group.current) return;
    elapsed.current += delta;
    const hero = activeSection === "hero";
    group.current.visible = hero;
    if (!hero) return;
    
    // Premium floating effect
    const floatY = Math.sin(elapsed.current * 0.8) * 0.05;
    
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.22 + state.pointer.y * 0.08, 0.035);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0.52 + state.pointer.x * 0.12, 0.035);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.15 - progress * 0.4 + floatY, 0.04);
  });

  return (
    <group ref={group} position={mobile ? [0.55, -0.55, 0] : [2.85, -0.7, 0]} scale={mobile ? 0.46 : 0.7}>
      {Array.from({ length: 7 }, (_, index) => (
        <RoundedBox
          key={index}
          args={[3.7 - index * 0.19, 2.45 - index * 0.13, 0.12]}
          radius={0.07}
          smoothness={4}
          position={[0, 0, -index * 0.22]}
          rotation={[0, 0, (index - 3) * 0.012]}
        >
          <meshPhysicalMaterial
            color={index === 0 ? "#ffffff" : index % 2 ? "#1d1d1d" : "#41413f"}
            metalness={index === 0 ? 0.2 : 0.8}
            roughness={index === 0 ? 0.1 : 0.4}
            transmission={index === 0 ? 0.9 : 0}
            thickness={index === 0 ? 2 : 0}
            clearcoat={index === 0 ? 1 : 0}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
      ))}
      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[2.7, 1.5]} />
        <meshBasicMaterial color="#121212" />
      </mesh>
      <group position={[-0.93, 0, 0.11]}>
        {[-1, 0, 1].map((offset) => (
          <mesh key={offset} position={[offset * 0.72, 0, 0]}>
            <boxGeometry args={[0.52, 0.09, 0.04]} />
            <meshBasicMaterial color="#ebebeb" />
          </mesh>
        ))}
      </group>
      <mesh position={[1.08, 0, 0.11]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.72, 0.09, 0.04]} />
        <meshBasicMaterial color="#ebebeb" />
      </mesh>
    </group>
  );
}

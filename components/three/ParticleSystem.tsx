"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAxioStore } from "@/lib/store";

function seededValue(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export function ParticleSystem({ count }: { count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const elapsed = useRef(0);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const activeSection = useAxioStore((state) => state.activeSection);
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        radius: 2.6 + seededValue(index + 1) * 9,
        theta: seededValue(index + 31) * Math.PI * 2,
        y: (seededValue(index + 67) - 0.5) * 10,
        speed: 0.02 + seededValue(index + 101) * 0.075,
        scale: index % 11 === 0 ? 0.045 : 0.018 + seededValue(index + 149) * 0.018,
        phase: seededValue(index + 197) * 8,
      })),
    [count],
  );

  useEffect(() => {
    if (!mesh.current) return;
    mesh.current.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  }, []);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    elapsed.current += delta;
    const time = elapsed.current;
    const converging = activeSection === "final";
    particles.forEach((particle, index) => {
      const radius = converging ? THREE.MathUtils.lerp(particle.radius, 1.3, 0.76) : particle.radius;
      const angle = particle.theta + time * particle.speed;
      dummy.position.set(
        Math.cos(angle + particle.phase) * radius,
        converging ? particle.y * 0.12 : particle.y + Math.sin(time * 0.2 + particle.phase) * 0.25,
        Math.sin(angle) * radius - 2,
      );
      dummy.scale.setScalar(particle.scale * (converging ? 1.55 : 1));
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} frustumCulled={false}>
      <octahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#63dfff" transparent opacity={0.62} toneMapped={false} />
    </instancedMesh>
  );
}

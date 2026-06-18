"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useAxioStore } from "@/lib/store";

function Stream({
  points,
  color,
  speed,
}: {
  points: THREE.Vector3[];
  color: string;
  speed: number;
}) {
  const marker = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points]);
  const linePoints = useMemo(() => curve.getPoints(80), [curve]);

  useFrame((_, delta) => {
    if (!marker.current) return;
    elapsed.current += delta;
    const point = curve.getPoint((elapsed.current * speed) % 1);
    marker.current.position.copy(point);
  });

  return (
    <>
      <Line points={linePoints} color={color} lineWidth={0.7} transparent opacity={0.28} />
      <mesh ref={marker}>
        <sphereGeometry args={[0.045, 8, 8]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </>
  );
}

export function DataStreams({ mobile }: { mobile: boolean }) {
  const activeSection = useAxioStore((state) => state.activeSection);
  const spread = activeSection === "problem" ? 1.42 : activeSection === "final" ? 0.52 : 1;
  const streamSets = useMemo(
    () => [
      [new THREE.Vector3(-8, 2.4, -2), new THREE.Vector3(-4, 3, 0), new THREE.Vector3(-2, 0.3, 0), new THREE.Vector3(0, 0, 0)],
      [new THREE.Vector3(-7, -3.2, -1), new THREE.Vector3(-4, -2.2, 1), new THREE.Vector3(-2, -0.5, 0), new THREE.Vector3(0, 0, 0)],
      [new THREE.Vector3(0, 0, 0), new THREE.Vector3(2, 1.2, 0), new THREE.Vector3(4.5, 2.5, -1), new THREE.Vector3(8, 1.4, -2)],
      [new THREE.Vector3(0, 0, 0), new THREE.Vector3(2, -1.3, 1), new THREE.Vector3(5, -2.3, 0), new THREE.Vector3(8, -3, -2)],
    ],
    [],
  );

  return (
    <group scale={[spread, 1, 1]}>
      {streamSets.slice(0, mobile ? 2 : 4).map((points, index) => (
        <Stream
          key={index}
          points={points}
          color={index % 2 ? "#7655ff" : "#4ad9ff"}
          speed={0.075 + index * 0.018}
        />
      ))}
    </group>
  );
}

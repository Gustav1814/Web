"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useAxioStore } from "@/lib/store";

const cameraTargets: Record<string, [number, number, number]> = {
  hero: [0.8, 0.1, 9],
  problem: [-1.9, 0.6, 10.8],
  system: [1.7, 0.1, 8],
  product: [-1.3, -0.2, 7.4],
  dashboard: [2.4, 0.5, 9.4],
  industries: [-2.1, -0.2, 10],
  modules: [0, 0.4, 8.5],
  trust: [2.6, -0.4, 11],
  architecture: [-1.6, 0.6, 8.8],
  pricing: [0.2, -0.6, 11.5],
  final: [0, 0, 6.5],
};

export function ScrollCameraRig({ mobile }: { mobile: boolean }) {
  const activeSection = useAxioStore((state) => state.activeSection);

  useFrame((state) => {
    const rawTarget = cameraTargets[activeSection] ?? cameraTargets.hero;
    const mobileOffset = mobile ? 2.2 : 0;
    const target = new THREE.Vector3(
      mobile ? 0 : rawTarget[0] + state.pointer.x * 0.45,
      rawTarget[1] + state.pointer.y * 0.25,
      rawTarget[2] + mobileOffset,
    );
    state.camera.position.lerp(target, 0.035);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

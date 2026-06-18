"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload, Environment } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { AxioMonolith } from "./AxioMonolith";
import { DataStreams } from "./DataStreams";
import { ScrollCameraRig } from "./ScrollCameraRig";
import { PointerInteractionLayer } from "./PointerInteractionLayer";
import { useAxioStore } from "@/lib/store";

export default function AxioCanvas() {
  const [mobile, setMobile] = useState(false);
  const activeSection = useAxioStore((state) => state.activeSection);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (mobile) return null;

  return (
    <div
      className={`axio-canvas axio-canvas--reference ${activeSection !== "hero" ? "is-hidden" : ""}`}
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.65]}
        camera={{ position: [0, 0, 9], fov: 42, near: 0.1, far: 80 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={3.2} color="#ffffff" />
        <pointLight position={[-4, -2, 3]} intensity={8} distance={11} color="#8b8b88" />
        <Environment preset="city" />
        <Suspense fallback={null}>
          <AxioMonolith mobile={mobile} />
          <DataStreams mobile={mobile} />
          <PointerInteractionLayer />
          <ScrollCameraRig mobile={mobile} />
          <AdaptiveDpr pixelated />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";

const AxioCanvas = dynamic(() => import("@/components/three/AxioCanvas"), {
  ssr: false,
  loading: () => <div className="axio-canvas axio-canvas--loading" aria-hidden="true" />,
});

export function AxioExperienceLayer() {
  return <AxioCanvas />;
}

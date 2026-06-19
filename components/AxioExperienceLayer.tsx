"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const AxioCanvas = dynamic(() => import("@/components/three/AxioCanvas"), {
  ssr: false,
  loading: () => <div className="axio-canvas axio-canvas--loading" aria-hidden="true" />,
});

const QUERY = "(min-width: 901px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

export function AxioExperienceLayer() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, () => false);
  return enabled ? <AxioCanvas /> : null;
}

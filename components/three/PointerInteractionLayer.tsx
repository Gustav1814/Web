"use client";

import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function PointerInteractionLayer() {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;
    const down = () => canvas.classList.add("is-grabbing");
    const up = () => canvas.classList.remove("is-grabbing");
    canvas.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      canvas.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [gl]);

  return null;
}

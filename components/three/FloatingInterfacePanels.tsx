"use client";

import { Float, Text } from "@react-three/drei";
import { useAxioStore } from "@/lib/store";

const panelData = [
  { position: [-3.4, 1.5, -0.6] as [number, number, number], label: "INTENT / IELTS", value: "0.94" },
  { position: [3.5, 1.2, -0.4] as [number, number, number], label: "LEAD / QUALIFIED", value: "LIVE" },
  { position: [2.9, -1.8, -0.8] as [number, number, number], label: "NEXT ACTION", value: "BOOK" },
];

export function FloatingInterfacePanels() {
  const activeSection = useAxioStore((state) => state.activeSection);
  if (activeSection === "problem" || activeSection === "pricing") return null;

  return (
    <group>
      {panelData.map((panel, index) => (
        <Float key={panel.label} speed={0.7 + index * 0.12} floatIntensity={0.15} rotationIntensity={0.03}>
          <group position={panel.position} rotation={[0, index === 0 ? 0.2 : -0.18, 0]}>
            <mesh>
              <planeGeometry args={[1.65, 0.64]} />
              <meshBasicMaterial color="#0a1018" transparent opacity={0.78} depthWrite={false} />
            </mesh>
            <lineSegments position={[0, 0, 0.006]}>
              <edgesGeometry args={[undefined]} />
              <lineBasicMaterial color="#4c7890" transparent opacity={0.5} />
            </lineSegments>
            <Text
              position={[-0.67, 0.12, 0.02]}
              anchorX="left"
              fontSize={0.08}
              color="#6f8195"
            >
              {panel.label}
            </Text>
            <Text
              position={[-0.67, -0.1, 0.02]}
              anchorX="left"
              fontSize={0.14}
              color={index === 1 ? "#79ebff" : "#e9f5ff"}
            >
              {panel.value}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}

import { ImageResponse } from "next/og";

export const alt = "Orxivo AI Automation Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#121212", color: "#f0f0ee", fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: "0.18em" }}><span>ORXIVO®</span><span>AI AUTOMATION AGENCY</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: "-0.05em", maxWidth: 980 }}>AI systems that move business workflows forward.</div>
          <div style={{ fontSize: 25, color: "#aaa", maxWidth: 900 }}>Chatbots · Voice agents · Lead automation · Customer support · Websites · SaaS dashboards</div>
        </div>
        <div style={{ height: 2, width: "100%", background: "#ededeb" }} />
      </div>
    ),
    size,
  );
}

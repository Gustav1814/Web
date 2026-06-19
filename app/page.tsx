import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { AxioExperienceLayer } from "@/components/AxioExperienceLayer";
import { HeroExperience } from "@/components/sections/HeroExperience";
import { ProblemField } from "@/components/sections/ProblemField";
import { SystemFlow } from "@/components/sections/SystemFlow";
import { ProductSimulation } from "@/components/sections/ProductSimulation";
import { DashboardExperience } from "@/components/sections/DashboardExperience";
import { NicheEngine } from "@/components/sections/NicheEngine";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { TrustSystem } from "@/components/sections/TrustSystem";
import { ArchitectureStack } from "@/components/sections/ArchitectureStack";
import { PricingPilot } from "@/components/sections/PricingPilot";
import { FinalConvergence } from "@/components/sections/FinalConvergence";
import { Footer } from "@/components/sections/Footer";
import { ReferenceMotion } from "@/components/ReferenceMotion";
import { GlobalServices } from "@/components/sections/GlobalServices";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Orxivo | Global AI Automation Agency for Chatbots, Voice Agents & Workflows",
  description: "Orxivo builds AI chatbots, voice agents, lead generation systems, CRM automations, and workflow automation tools for businesses worldwide.",
  path: "/",
});

export default function Home() {
  return (
    <SmoothScrollProvider>
      <AxioExperienceLayer />
      <ReferenceMotion />
      <Navbar />
      <main id="main-content">
        <HeroExperience />
        <ProblemField />
        <SystemFlow />
        <ProductSimulation />
        <DashboardExperience />
        <NicheEngine />
        <ModuleGrid />
        <TrustSystem />
        <ArchitectureStack />
        <PricingPilot />
        <GlobalServices />
        <FinalConvergence />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

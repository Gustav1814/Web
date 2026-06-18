import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/navigation/Navbar";
import { CustomCursor } from "@/components/navigation/CustomCursor";
import { Preloader } from "@/components/Preloader";
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

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <AxioExperienceLayer />
      <ReferenceMotion />
      <CustomCursor />
      <Navbar />
      <main>
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
        <FinalConvergence />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

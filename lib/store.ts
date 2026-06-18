"use client";

import { create } from "zustand";
import type { NicheId } from "./niche-data";
import type { SectionId } from "./constants";

export type LeadStatus = "New Lead" | "Qualified" | "Demo Booked";

type AxioState = {
  activeSection: SectionId;
  sectionProgress: number;
  selectedNode: string | null;
  selectedNiche: NicheId;
  demoStep: number;
  leadStatus: LeadStatus;
  cursorMode: "default" | "interactive" | "drag";
  coreHovered: boolean;
  setActiveSection: (section: SectionId) => void;
  setSectionProgress: (progress: number) => void;
  setSelectedNode: (node: string | null) => void;
  setSelectedNiche: (niche: NicheId) => void;
  advanceDemo: () => void;
  resetDemo: () => void;
  setCursorMode: (mode: AxioState["cursorMode"]) => void;
  setCoreHovered: (hovered: boolean) => void;
};

export const useAxioStore = create<AxioState>((set) => ({
  activeSection: "hero",
  sectionProgress: 0,
  selectedNode: null,
  selectedNiche: "education",
  demoStep: 0,
  leadStatus: "New Lead",
  cursorMode: "default",
  coreHovered: false,
  setActiveSection: (activeSection) => set({ activeSection }),
  setSectionProgress: (sectionProgress) => set({ sectionProgress }),
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  setSelectedNiche: (selectedNiche) => set({ selectedNiche }),
  advanceDemo: () =>
    set((state) => {
      const demoStep = Math.min(state.demoStep + 1, 4);
      const leadStatus = demoStep >= 4 ? "Demo Booked" : demoStep >= 2 ? "Qualified" : "New Lead";
      return { demoStep, leadStatus };
    }),
  resetDemo: () => set({ demoStep: 0, leadStatus: "New Lead" }),
  setCursorMode: (cursorMode) => set({ cursorMode }),
  setCoreHovered: (coreHovered) => set({ coreHovered }),
}));

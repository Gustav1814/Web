export const SECTION_IDS = [
  "hero",
  "problem",
  "system",
  "product",
  "dashboard",
  "niches",
  "modules",
  "trust",
  "architecture",
  "pricing",
  "final",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_ITEMS = [
  { label: "System", href: "#system" },
  { label: "Product", href: "#product" },
  { label: "Niches", href: "#niches" },
  { label: "Architecture", href: "#architecture" },
] as const;

export const SYSTEM_NODES = [
  {
    id: "message",
    label: "Customer message",
    short: "Intent enters the system.",
    detail: "Every inquiry arrives with channel, time, source, and the raw language of the customer intact.",
  },
  {
    id: "channel",
    label: "Channel layer",
    short: "Web, WhatsApp, voice.",
    detail: "Axio normalizes conversations across channels so the workflow behaves consistently everywhere.",
  },
  {
    id: "agent",
    label: "AI agent",
    short: "Understands and responds.",
    detail: "The agent identifies intent, retrieves approved information, and chooses the next best question.",
  },
  {
    id: "knowledge",
    label: "Business knowledge",
    short: "Grounded in your truth.",
    detail: "Pricing, services, schedules, policies, locations, and FAQs stay controlled by the business.",
  },
  {
    id: "workflow",
    label: "Workflow engine",
    short: "Turns talk into action.",
    detail: "Structured rules qualify the lead, create reminders, schedule bookings, and decide when humans step in.",
  },
  {
    id: "outcome",
    label: "Booking · CRM · handoff",
    short: "A measurable outcome.",
    detail: "The conversation exits as a booked slot, a follow-up task, a CRM record, or a context-rich human handoff.",
  },
] as const;

export const MODULES = [
  ["Website Chat Agent", "Qualifies visitors before the tab closes.", "WEB"],
  ["WhatsApp Agent", "Keeps high-intent mobile conversations moving.", "WA"],
  ["Booking Agent", "Finds the right slot without the back-and-forth.", "CAL"],
  ["Follow-Up Agent", "Reopens conversations at the right moment.", "SEQ"],
  ["Mini CRM", "Turns messages into structured pipeline data.", "CRM"],
  ["Voice Agent", "A future channel on the same intelligence layer.", "SOON"],
  ["Human Handoff", "Escalates with context, urgency, and history.", "HUM"],
  ["Knowledge Base", "Keeps every answer grounded and controlled.", "KB"],
] as const;

export const SECTION_IDS = [
  "hero",
  "problem",
  "system",
  "product",
  "dashboard",
  "industries",
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
  { label: "Industries", href: "#industries" },
  { label: "Architecture", href: "#architecture" },
] as const;

export const SYSTEM_NODES = [
  {
    id: "message",
    label: "Customer message",
    short: "The inquiry enters the system.",
    detail: "Every message arrives with channel, timestamp, source, and customer language preserved for routing.",
  },
  {
    id: "channel",
    label: "Channel layer",
    short: "Website, WhatsApp, voice, unified.",
    detail: "We normalize conversations across all channels so your workflow behaves consistently everywhere.",
  },
  {
    id: "agent",
    label: "AI agent",
    short: "Understands intent, responds intelligently.",
    detail: "The agent identifies what the customer needs, retrieves approved information, and asks the next qualifying question.",
  },
  {
    id: "knowledge",
    label: "Business knowledge",
    short: "Grounded in your approved data.",
    detail: "Your pricing, services, schedules, policies, and FAQs, controlled entirely by your team.",
  },
  {
    id: "workflow",
    label: "Workflow engine",
    short: "Converts conversation into action.",
    detail: "Structured rules qualify the lead, create follow-ups, schedule bookings, and determine when humans should step in.",
  },
  {
    id: "outcome",
    label: "Booking · CRM · handoff",
    short: "A measurable business outcome.",
    detail: "The conversation exits as a booked appointment, a CRM record, a follow-up task, or a context-rich handoff to your team.",
  },
] as const;

export const MODULES = [
  ["Website Chat Agent", "Engages and qualifies website visitors before they leave, 24/7, in under 4 seconds.", "WEB"],
  ["WhatsApp Agent", "Continues high-intent conversations on the channel your customers already use.", "WA"],
  ["Booking Agent", "Finds and confirms available slots without manual back-and-forth.", "CAL"],
  ["Follow-Up Agent", "Re-engages leads at calculated intervals based on intent signals.", "SEQ"],
  ["Mini CRM", "Structures every conversation into pipeline data your team can act on.", "CRM"],
  ["Voice Agent", "Handles inbound calls with the same intelligence layer as chat. Coming soon.", "SOON"],
  ["Human Handoff", "Routes complex conversations to your team with full context and urgency classification.", "HUM"],
  ["Knowledge Base", "Centralizes approved information so every AI response stays accurate and consistent.", "KB"],
] as const;

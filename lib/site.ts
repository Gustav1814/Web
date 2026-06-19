export const SITE_NAME = "Orxivo";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://orxivo.com").replace(/\/$/, "");
export const CONTACT_EMAIL = "hello@orxivo.systems";

export const serviceNav = [
  { href: "/ai-automation-agency", label: "AI Automation" },
  { href: "/ai-chatbot-development", label: "AI Chatbots" },
  { href: "/ai-voice-agents", label: "Voice Agents" },
  { href: "/ai-lead-generation-automation", label: "Lead Automation" },
  { href: "/workflow-automation", label: "Workflow Automation" },
  { href: "/crm-automation", label: "CRM Automation" },
  { href: "/websites-and-saas-dashboards", label: "Websites & SaaS" },
] as const;

export const primaryNav = [
  { href: "/ai-automation-agency", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

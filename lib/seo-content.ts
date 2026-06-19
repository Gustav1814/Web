export type FAQ = { question: string; answer: string };

export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  problem?: string;
  solution?: string;
  howItWorks?: string[];
  whyOrxivo?: string[];
  benefits: string[];
  useCases: { title: string; copy: string }[];
  process: { title: string; copy: string }[];
  faqs: FAQ[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "ai-automation-agency",
    eyebrow: "AI automation agency",
    title: "AI automation systems built around real business workflows",
    description:
      "Orxivo is an AI automation agency building chatbots, voice agents, lead systems, support automation, CRM workflows, and custom operational software.",
    intro:
      "We connect customer conversations, business rules, data, and human teams into reliable systems that increase response speed and remove repetitive work.",
    benefits: [
      "Respond to leads and customers instantly across channels",
      "Qualify, route, and follow up without manual administration",
      "Connect AI to your CRM, calendar, inbox, and internal tools",
      "Give your team clear controls, reporting, and human handoff points",
    ],
    useCases: [
      { title: "Sales operations", copy: "Capture, qualify, nurture, and route opportunities while keeping your CRM accurate." },
      { title: "Customer support", copy: "Resolve routine questions quickly and escalate sensitive or complex cases with full context." },
      { title: "Back-office workflows", copy: "Automate data entry, notifications, approvals, summaries, and recurring operational tasks." },
    ],
    process: [
      { title: "Automation audit", copy: "We map the workflow, bottlenecks, systems, risks, and measurable outcome." },
      { title: "System design", copy: "We define the AI behavior, integrations, guardrails, data model, and human controls." },
      { title: "Build and validate", copy: "We develop the system, test real scenarios, and verify accuracy before launch." },
      { title: "Optimize", copy: "We monitor performance and improve prompts, logic, routing, and conversion points." },
    ],
    faqs: [
      { question: "What does an AI automation agency do?", answer: "An AI automation agency designs and builds systems that use AI, integrations, and workflow logic to automate sales, support, operations, and customer communication." },
      { question: "Can Orxivo work with our existing software?", answer: "Yes. We can connect compatible CRMs, calendars, messaging platforms, databases, APIs, and internal tools instead of forcing a full replacement." },
      { question: "How long does an automation project take?", answer: "A focused pilot can often be delivered in a few weeks. Multi-system projects take longer depending on integrations, data quality, and approval requirements." },
    ],
    related: ["ai-chatbot-development", "ai-calling-agents", "ai-lead-generation-automation"],
  },
  {
    slug: "ai-chatbot-development",
    eyebrow: "AI chatbot development",
    title: "AI chatbots that answer, qualify, and move conversations forward",
    description:
      "Orxivo develops AI chatbots for websites, WhatsApp, lead qualification, customer support, appointment booking, and connected business workflows.",
    intro:
      "Our chatbots are designed as operational systems—not isolated widgets. They use approved knowledge, capture structured data, trigger workflows, and hand serious conversations to your team.",
    benefits: ["24/7 response without queue delays", "Consistent answers grounded in approved information", "Automatic lead capture and qualification", "CRM, calendar, email, and workflow integrations"],
    useCases: [
      { title: "Website lead capture", copy: "Turn anonymous traffic into qualified inquiries with useful, contextual conversations." },
      { title: "WhatsApp automation", copy: "Answer common questions, collect details, share options, and route conversations at scale." },
      { title: "Appointment booking", copy: "Qualify intent, check availability, book the right slot, and send confirmations." },
    ],
    process: [
      { title: "Conversation mapping", copy: "We identify intents, questions, objections, escalation points, and desired actions." },
      { title: "Knowledge and logic", copy: "We structure approved content, business rules, qualification fields, and safeguards." },
      { title: "Integration", copy: "We connect the chatbot to the channels and systems required by the workflow." },
      { title: "Testing and launch", copy: "We test edge cases, analytics, fallbacks, and handoffs before going live." },
    ],
    faqs: [
      { question: "Can an AI chatbot use our business information?", answer: "Yes. It can be grounded in approved FAQs, services, policies, product information, and other maintained sources." },
      { question: "Can the chatbot hand conversations to a person?", answer: "Yes. Human handoff can be triggered by intent, sentiment, qualification score, topic, or a direct customer request." },
      { question: "Which channels can you support?", answer: "Typical channels include websites and WhatsApp, with other channels available when their APIs and business requirements allow." },
    ],
    related: ["ai-customer-support-automation", "ai-lead-generation-automation", "ai-automation-agency"],
  },
  {
    slug: "ai-voice-agents",
    eyebrow: "AI voice agent agency",
    title: "Custom AI voice agents for scalable customer conversations",
    description: "Orxivo builds AI voice agents for inbound reception, qualification, appointment booking, support, follow-up, and connected business workflows.",
    intro: "Give customers a fast, natural way to speak with your business while keeping call outcomes, scheduling, CRM updates, and human transfers under control.",
    problem: "Growing teams miss calls, repeat the same conversations, and lose context between the phone, calendar, CRM, and the person responsible for the next step.",
    solution: "Orxivo designs voice automation around defined business actions, approved knowledge, clear escalation rules, and the systems your team already uses.",
    benefits: ["Handle structured conversations around the clock", "Reduce missed calls and repetitive phone work", "Capture consistent call outcomes and summaries", "Transfer sensitive or valuable calls to the right person"],
    useCases: [
      { title: "Inbound voice assistant", copy: "Identify intent, answer approved questions, collect details, and route calls without a phone queue." },
      { title: "Booking and reminders", copy: "Schedule, confirm, reschedule, and remind customers using connected availability rules." },
      { title: "Qualification and follow-up", copy: "Speak with opted-in prospects, capture fit and intent, and update the sales workflow." },
    ],
    howItWorks: ["The agent listens and identifies the caller's intent.", "Business rules determine the approved answer or next action.", "Connected systems provide availability, records, and workflow context.", "The call is completed, logged, or transferred with a useful summary."],
    process: [
      { title: "Voice workflow audit", copy: "We review call types, volumes, actions, disclosures, exceptions, and transfer requirements." },
      { title: "Conversation and system design", copy: "We define the voice experience, knowledge, integrations, guardrails, and success measures." },
      { title: "Scenario testing", copy: "We test accents, interruptions, unclear answers, edge cases, and human escalation." },
      { title: "Monitored launch", copy: "We roll out carefully, review calls, and improve the system using real outcomes." },
    ],
    whyOrxivo: ["Global, remote-first implementation", "Business-focused call flows rather than generic demos", "Privacy and escalation considered from the start", "Custom integrations and ongoing optimization"],
    faqs: [
      { question: "What is an AI voice agent?", answer: "An AI voice agent is software that can understand and respond to spoken language, follow defined workflows, access connected systems, and complete or route phone-based tasks." },
      { question: "Can the voice agent sound natural?", answer: "Modern voice systems can provide responsive, natural conversations, but the priority should be clarity, speed, disclosure, and reliable task completion." },
      { question: "Can it support international customers?", answer: "Yes, depending on language, telephony, regulatory, and business requirements. Orxivo designs for global teams and remote-first delivery." },
    ],
    related: ["ai-calling-agents", "ai-customer-support-automation", "crm-automation"],
  },
  {
    slug: "ai-calling-agents",
    eyebrow: "AI calling agents",
    title: "AI voice agents for calls, qualification, booking, and follow-up",
    description:
      "Build AI calling agents for appointment booking, lead qualification, inbound reception, reminders, follow-up, and customer service workflows.",
    intro:
      "Orxivo voice agents handle structured phone conversations with clear guardrails, connected data, scheduling logic, and escalation to human staff.",
    benefits: ["Answer or place calls at operational scale", "Book and reschedule appointments automatically", "Capture structured call outcomes in your CRM", "Escalate urgent or high-value conversations"],
    useCases: [
      { title: "AI receptionist", copy: "Answer routine inbound calls, identify intent, share information, and transfer when needed." },
      { title: "Appointment booking", copy: "Offer valid times, confirm details, schedule appointments, and trigger reminders." },
      { title: "Lead follow-up", copy: "Contact opted-in leads quickly, qualify interest, and route strong opportunities." },
    ],
    process: [
      { title: "Call-flow design", copy: "We map objectives, disclosures, qualification logic, exceptions, and transfer rules." },
      { title: "Voice and system setup", copy: "We configure the agent, telephony, knowledge, integrations, and permitted actions." },
      { title: "Scenario testing", copy: "We validate interruptions, unclear answers, edge cases, compliance language, and handoffs." },
      { title: "Controlled rollout", copy: "We launch with monitoring, review outcomes, and improve the flow using real call data." },
    ],
    faqs: [
      { question: "Can an AI voice agent book appointments?", answer: "Yes. It can connect to supported calendars, offer valid availability, collect details, and send confirmations." },
      { question: "Can calls be transferred to a human?", answer: "Yes. Transfers can occur when requested or when the conversation matches defined urgency, complexity, or value criteria." },
      { question: "Do AI calling agents replace every receptionist?", answer: "No. They are most useful for repetitive, structured calls and overflow. Human staff remain important for nuanced, sensitive, or exceptional situations." },
    ],
    related: ["ai-lead-generation-automation", "ai-customer-support-automation", "ai-automation-agency"],
  },
  {
    slug: "workflow-automation",
    eyebrow: "AI workflow automation agency",
    title: "AI workflow automation for faster, cleaner business operations",
    description: "Orxivo automates business workflows across forms, inboxes, approvals, notifications, data, reporting, CRM systems, and AI-assisted decisions.",
    intro: "Replace repetitive handoffs and disconnected admin with scalable workflows that move information, trigger actions, and keep people in control of exceptions.",
    problem: "Manual processes create delays, duplicate data entry, unclear ownership, missed follow-ups, and inconsistent customer experiences as a business grows.",
    solution: "We map the complete process, connect the required tools, apply AI only where it adds value, and keep important rules deterministic and auditable.",
    benefits: ["Reduce repetitive operational work", "Move information between systems accurately", "Create clearer ownership and exception handling", "Scale service without adding the same amount of administration"],
    useCases: [
      { title: "Document and data workflows", copy: "Extract, classify, validate, route, and record information from forms, files, emails, and messages." },
      { title: "Approvals and notifications", copy: "Trigger the right review, reminder, alert, or next action based on business rules." },
      { title: "Operational reporting", copy: "Collect workflow data and produce useful summaries, dashboards, and exception queues." },
    ],
    howItWorks: ["A trigger enters the workflow from a form, message, event, or schedule.", "Rules and AI classify the request and determine permitted actions.", "Integrations update systems, notify owners, and create the next task.", "Exceptions are held for human review with the relevant context."],
    process: [
      { title: "Process mapping", copy: "We document inputs, decisions, systems, owners, delays, exceptions, and outputs." },
      { title: "Automation architecture", copy: "We choose reliable triggers, integrations, AI steps, controls, and monitoring." },
      { title: "Build and validation", copy: "We implement the workflow and test normal, incomplete, and exceptional scenarios." },
      { title: "Rollout and improvement", copy: "We launch in stages and improve throughput, reliability, and reporting." },
    ],
    whyOrxivo: ["Custom builds around the existing operation", "Clear human checkpoints and fallback paths", "Remote-first delivery for global teams", "Technical depth across AI, integrations, dashboards, and web products"],
    faqs: [
      { question: "What business processes can be automated?", answer: "Good candidates have repeated inputs, clear decisions, predictable actions, and measurable outputs, such as lead routing, onboarding, reporting, support triage, and approvals." },
      { question: "Do you replace our existing tools?", answer: "Usually not. Orxivo can connect compatible tools and improve the workflow around them, replacing software only when there is a clear reason." },
      { question: "Where should a business start?", answer: "Start with a process where delays, missed actions, or repetitive work have a visible cost and where the desired outcome can be measured." },
    ],
    related: ["ai-automation-agency", "crm-automation", "websites-and-saas-dashboards"],
  },
  {
    slug: "crm-automation",
    eyebrow: "CRM automation agency",
    title: "CRM automation that keeps sales workflows accurate and moving",
    description: "Orxivo builds CRM automation for lead capture, enrichment, qualification, routing, follow-up, pipeline updates, tasks, summaries, and reporting.",
    intro: "Turn your CRM into an active operating system that captures clean data, prompts the right actions, and gives sales teams useful context without constant manual updates.",
    problem: "CRMs fail when records are incomplete, follow-ups depend on memory, ownership is unclear, and teams spend more time maintaining the system than using it.",
    solution: "We connect lead sources, conversations, calendars, inboxes, and business rules so the CRM reflects what is happening and automatically drives the next action.",
    benefits: ["Create complete and consistent lead records", "Route opportunities by fit, territory, service, or urgency", "Automate follow-up tasks and reminders", "Give teams clearer pipeline and conversion reporting"],
    useCases: [
      { title: "Lead capture and enrichment", copy: "Create records from forms, chat, calls, and referrals while adding useful source and qualification data." },
      { title: "Pipeline automation", copy: "Update stages, ownership, tasks, notifications, and summaries as customer activity changes." },
      { title: "Sales follow-up", copy: "Trigger relevant outreach and reminders without relying on spreadsheets or personal memory." },
    ],
    howItWorks: ["Lead activity enters from a connected channel.", "The workflow validates, enriches, and maps the data.", "Rules assign ownership, stage, score, and required actions.", "The CRM triggers follow-up and reports exceptions to the team."],
    process: [
      { title: "CRM workflow audit", copy: "We review fields, stages, ownership, sources, reporting, and current failure points." },
      { title: "Data and automation design", copy: "We define the record model, triggers, actions, integrations, and safeguards." },
      { title: "Implementation and migration", copy: "We build the automation and carefully handle any required data changes." },
      { title: "Adoption and optimization", copy: "We validate reporting, team workflows, and conversion outcomes after launch." },
    ],
    whyOrxivo: ["Sales and operations logic designed together", "AI used with explicit business rules", "Custom integration capability", "Clear documentation and remote implementation"],
    faqs: [
      { question: "Which CRM platforms can Orxivo automate?", answer: "Integration depends on the CRM API and project requirements. Orxivo can work with compatible mainstream CRMs and custom systems." },
      { question: "Can AI summarize calls and conversations into the CRM?", answer: "Yes. Supported chat and call data can be summarized into structured notes while important fields remain controlled by validation and workflow rules." },
      { question: "Can you clean up an existing CRM workflow?", answer: "Yes. The project can begin with an audit of fields, stages, ownership, automations, duplicates, and reporting before implementing improvements." },
    ],
    related: ["ai-lead-generation-automation", "workflow-automation", "ai-calling-agents"],
  },
  {
    slug: "ai-customer-support-automation",
    eyebrow: "AI customer support automation",
    title: "Faster customer support with AI, workflow automation, and human control",
    description:
      "Orxivo builds AI customer support automation for instant answers, ticket triage, knowledge retrieval, status updates, and human escalation.",
    intro:
      "We automate repetitive support work while preserving clear escalation paths. Customers get faster answers and support teams receive better context when a person needs to step in.",
    benefits: ["Reduce repetitive ticket volume", "Improve first-response time", "Route issues with useful summaries and context", "Provide consistent support across approved channels"],
    useCases: [
      { title: "FAQ resolution", copy: "Answer common policy, service, product, and account questions from approved knowledge." },
      { title: "Ticket triage", copy: "Identify topic, urgency, customer type, and next action before a team member reviews the case." },
      { title: "Order and status updates", copy: "Retrieve supported status information and explain the next step without manual lookup." },
    ],
    process: [
      { title: "Support audit", copy: "We review ticket categories, volumes, knowledge sources, service levels, and escalation risks." },
      { title: "Knowledge design", copy: "We organize reliable source content and define what the AI can and cannot answer." },
      { title: "Workflow integration", copy: "We connect channels, ticketing tools, notifications, customer data, and human queues." },
      { title: "Quality monitoring", copy: "We review unresolved topics, escalation quality, response accuracy, and customer outcomes." },
    ],
    faqs: [
      { question: "Will AI support give customers incorrect answers?", answer: "Any AI can make mistakes, so we reduce risk with approved knowledge, scoped actions, clear fallbacks, monitoring, and human escalation." },
      { question: "Can it work with our help desk?", answer: "Potentially, yes. Integration depends on the help desk API and the actions your workflow requires." },
      { question: "Can customers always reach a human?", answer: "Yes. We can design explicit human handoff paths based on customer request or predefined conditions." },
    ],
    related: ["ai-chatbot-development", "ai-calling-agents", "ai-automation-agency"],
  },
  {
    slug: "ai-lead-generation-automation",
    eyebrow: "AI lead generation automation",
    title: "Lead generation automation that turns inquiries into qualified pipeline",
    description:
      "Orxivo automates lead capture, enrichment, qualification, follow-up, booking, CRM updates, and sales handoff for faster pipeline creation.",
    intro:
      "We build connected lead systems that respond immediately, collect the right information, prioritize intent, and keep follow-up moving until a clear next action exists.",
    benefits: ["Contact new inquiries faster", "Qualify leads consistently", "Keep CRM records complete and current", "Automate follow-up without losing human oversight"],
    useCases: [
      { title: "Inbound qualification", copy: "Ask the right questions, score fit and intent, and route the lead to the correct next step." },
      { title: "Automated nurture", copy: "Send relevant follow-ups based on source, stage, behavior, and previous responses." },
      { title: "Sales handoff", copy: "Create a clean record, summary, task, and notification when a lead is ready for a person." },
    ],
    process: [
      { title: "Funnel mapping", copy: "We define lead sources, stages, qualification criteria, ownership, and conversion events." },
      { title: "Automation design", copy: "We create the response, enrichment, scoring, follow-up, and routing logic." },
      { title: "CRM connection", copy: "We connect compatible forms, messaging channels, calendars, and CRM fields." },
      { title: "Conversion optimization", copy: "We monitor speed-to-lead, completion, qualification, booking, and handoff quality." },
    ],
    faqs: [
      { question: "Can AI qualify leads automatically?", answer: "Yes. It can collect structured answers and apply agreed criteria, while ambiguous or high-value opportunities can be sent to a person." },
      { question: "Will it update our CRM?", answer: "Yes, when the CRM provides suitable integration options. We map fields and actions to your sales process." },
      { question: "Can it follow up through multiple channels?", answer: "Multi-channel workflows are possible where channel permissions, APIs, consent, and business rules support them." },
    ],
    related: ["ai-chatbot-development", "ai-calling-agents", "websites-and-saas-dashboards"],
  },
  {
    slug: "websites-and-saas-dashboards",
    eyebrow: "Websites and SaaS dashboards",
    title: "Premium websites and SaaS dashboards built for conversion and operations",
    description:
      "Orxivo designs and develops premium websites, internal tools, client portals, and SaaS dashboards with strong UX, performance, and automation integrations.",
    intro:
      "We combine product design, modern web development, and workflow thinking to create digital experiences that look distinctive and perform useful business work.",
    benefits: ["Fast, responsive, accessible interfaces", "Clear conversion paths and search-ready structure", "Custom dashboards for operational visibility", "Integrations with automation, CRM, and data systems"],
    useCases: [
      { title: "Premium marketing websites", copy: "Position your offer clearly, capture demand, and connect visitors to the right action." },
      { title: "SaaS products", copy: "Build focused product interfaces, account experiences, subscriptions, and workflow tools." },
      { title: "Internal dashboards", copy: "Give teams visibility into pipeline, support, operations, performance, and exceptions." },
    ],
    process: [
      { title: "Product strategy", copy: "We clarify audiences, jobs to be done, conversion goals, data, and technical constraints." },
      { title: "UX and visual system", copy: "We define information architecture, flows, components, and a distinctive interface direction." },
      { title: "Development", copy: "We build responsive, maintainable pages and product features with appropriate integrations." },
      { title: "QA and launch", copy: "We test accessibility, performance, analytics, SEO, devices, and critical user journeys." },
    ],
    faqs: [
      { question: "Do you build both websites and web applications?", answer: "Yes. We build marketing websites, dashboards, portals, and focused SaaS products depending on project scope." },
      { question: "Will the website be SEO-ready?", answer: "Yes. We build semantic page structure, metadata, crawl controls, structured data, performance foundations, and internal linking." },
      { question: "Can the product include AI automation?", answer: "Yes. AI chat, voice, data extraction, workflow assistance, and operational automation can be integrated where useful." },
    ],
    related: ["ai-automation-agency", "ai-lead-generation-automation", "ai-chatbot-development"],
  },
];

export const servicePageMap = new Map(servicePages.map((page) => [page.slug, page]));

export type IndustryPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  problems: string[];
  workflows: { title: string; copy: string }[];
  outcomes: string[];
  systems: string[];
  relatedServices: string[];
  faqs: FAQ[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "real-estate",
    name: "Real estate",
    title: "AI automation for real estate lead response and qualification",
    description: "Orxivo builds real estate AI chatbots, lead qualification automation, follow-up systems, appointment workflows, and CRM automation.",
    intro: "Help property teams respond to inquiries quickly, identify serious buyers or sellers, schedule viewings, and keep every lead moving across global markets and time zones.",
    problems: ["Portal and website leads go cold before an agent replies", "Teams repeat availability and qualification questions", "Follow-up quality varies by agent and lead source", "CRM records lack context and next actions"],
    workflows: [
      { title: "Property inquiry chatbot", copy: "Answer approved questions, capture requirements, and recommend the next action." },
      { title: "Buyer and seller qualification", copy: "Collect timeline, location, budget, financing, property type, and intent." },
      { title: "Viewing coordination", copy: "Connect calendars, propose valid times, send reminders, and update the CRM." },
      { title: "Long-term nurture", copy: "Follow up based on stage, property interest, engagement, and agent ownership." },
    ],
    outcomes: ["Faster speed-to-lead", "More complete qualification data", "Consistent follow-up across channels", "Clearer agent handoffs and pipeline visibility"],
    systems: ["Real estate AI chatbot", "Lead scoring and routing workflow", "Viewing appointment assistant", "CRM follow-up automation"],
    relatedServices: ["ai-chatbot-development", "ai-lead-generation-automation", "crm-automation"],
    faqs: [
      { question: "Can an AI chatbot qualify real estate leads?", answer: "Yes. It can collect agreed criteria such as location, budget, property type, timeline, and financing status before routing the lead." },
      { question: "Can it integrate with our property CRM?", answer: "Potentially. Integration depends on the platform API and the records and actions required by your workflow." },
    ],
  },
  {
    slug: "clinics",
    name: "Clinics",
    title: "AI automation for clinics and appointment-based businesses",
    description: "Orxivo builds clinic chatbots, AI appointment booking, voice agents, reminders, support workflows, and operational automations.",
    intro: "Reduce missed calls and repetitive front-desk work while giving patients a clear route to information, booking, reminders, and human assistance.",
    problems: ["Front desks are interrupted by repetitive calls and questions", "After-hours inquiries wait until the next working day", "Booking, rescheduling, and reminders consume staff time", "Sensitive or urgent requests need reliable escalation"],
    workflows: [
      { title: "Appointment booking assistant", copy: "Collect service and scheduling needs, offer valid times, and send confirmations." },
      { title: "AI phone receptionist", copy: "Handle routine inbound calls and transfer clinical, urgent, or complex requests." },
      { title: "Patient FAQ automation", copy: "Answer approved operational questions about services, preparation, hours, and policies." },
      { title: "Reminder and follow-up", copy: "Trigger appointment reminders and approved post-visit administrative workflows." },
    ],
    outcomes: ["Fewer missed inquiries", "Lower repetitive front-desk workload", "Better booking completion", "Clearer escalation and patient communication"],
    systems: ["Clinic website chatbot", "AI appointment booking agent", "Voice receptionist", "Reminder and rescheduling workflow"],
    relatedServices: ["ai-voice-agents", "ai-calling-agents", "ai-customer-support-automation"],
    faqs: [
      { question: "Can clinic automation handle medical advice?", answer: "The systems should be scoped to approved administrative workflows unless qualified clinical governance explicitly permits more. Urgent or clinical questions should be escalated." },
      { question: "Can it book and reschedule appointments?", answer: "Yes, when connected to a supported scheduling system with clear service, practitioner, duration, and availability rules." },
    ],
  },
  {
    slug: "ecommerce",
    name: "Ecommerce",
    title: "AI automation for ecommerce support, sales, and operations",
    description: "Orxivo builds ecommerce AI chatbots, customer support automation, order workflows, lead capture, and operational dashboards.",
    intro: "Give shoppers faster answers, reduce repetitive support, recover buying intent, and route exceptions without forcing the customer to wait in a ticket queue.",
    problems: ["Support teams repeat order, product, shipping, and policy answers", "Buying questions go unanswered during high-intent sessions", "Returns and exceptions require repetitive data collection", "Customer context is fragmented across commerce and support tools"],
    workflows: [
      { title: "Ecommerce AI chatbot", copy: "Answer product and policy questions from approved content and help shoppers find the right next step." },
      { title: "Order support automation", copy: "Retrieve supported status information and explain delivery, return, or exchange workflows." },
      { title: "Support triage", copy: "Classify urgency and topic, collect required details, and route complex cases with context." },
      { title: "Customer insight dashboard", copy: "Surface common questions, unresolved issues, conversion friction, and operational exceptions." },
    ],
    outcomes: ["Faster customer response", "Lower repetitive ticket volume", "Better pre-purchase assistance", "More useful support handoffs and insight"],
    systems: ["Storefront AI chatbot", "Order-status support workflow", "Returns triage automation", "Customer operations dashboard"],
    relatedServices: ["ai-customer-support-automation", "ai-chatbot-development", "websites-and-saas-dashboards"],
    faqs: [
      { question: "Can an ecommerce chatbot access order information?", answer: "Yes, when the commerce and order systems provide secure APIs and the workflow defines which information may be shown." },
      { question: "Can customers still reach a support agent?", answer: "Yes. Human escalation should remain available for exceptions, sensitive issues, complaints, and customer requests." },
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    title: "AI automation for agencies that want to handle more clients",
    description: "Orxivo builds agency workflow automation for lead qualification, client onboarding, reporting, support, delivery operations, and CRM follow-up.",
    intro: "Standardize repetitive client and internal workflows so your agency can increase capacity without adding the same amount of coordination and administration.",
    problems: ["Lead qualification and proposals consume senior team time", "Onboarding information arrives incomplete and across multiple channels", "Delivery status and reporting require manual coordination", "Follow-up depends on individual account managers"],
    workflows: [
      { title: "Lead qualification and routing", copy: "Collect project fit, budget, timeline, services, and decision context before a strategy call." },
      { title: "AI client onboarding", copy: "Gather assets, access, goals, approvals, and missing information through a structured workflow." },
      { title: "Delivery operations", copy: "Trigger tasks, summaries, reminders, and exception alerts across the project lifecycle." },
      { title: "Client reporting", copy: "Collect delivery data and produce consistent internal or client-facing summaries." },
    ],
    outcomes: ["More qualified sales conversations", "Faster and more complete onboarding", "Less project coordination overhead", "More consistent client communication"],
    systems: ["Agency lead qualification assistant", "Client onboarding portal", "CRM follow-up automation", "Operations and reporting dashboard"],
    relatedServices: ["workflow-automation", "crm-automation", "websites-and-saas-dashboards"],
    faqs: [
      { question: "Can Orxivo automate our client onboarding?", answer: "Yes. We can structure forms, document collection, access requests, reminders, approvals, and project setup around your delivery process." },
      { question: "Can the system work across our project management and CRM tools?", answer: "Potentially. The available integrations depend on each platform API and the actions required." },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    title: "AI automation for SaaS onboarding, support, and customer operations",
    description: "Orxivo builds SaaS customer support automation, onboarding workflows, AI product assistants, operational dashboards, and CRM automations.",
    intro: "Help SaaS teams guide users, resolve routine questions, identify account risk, and connect customer activity to support and revenue workflows.",
    problems: ["New users need guidance before they reach product value", "Support volume grows faster than the customer team", "Product, billing, support, and CRM context remain disconnected", "Expansion and risk signals are difficult to act on consistently"],
    workflows: [
      { title: "SaaS onboarding assistant", copy: "Guide setup, answer product questions, and trigger help when users become blocked." },
      { title: "Customer support automation", copy: "Resolve approved questions and route technical or account-specific cases with context." },
      { title: "Lifecycle automation", copy: "Trigger outreach, tasks, or alerts from onboarding, usage, billing, and support events." },
      { title: "Customer operations dashboard", copy: "Combine key signals into queues for onboarding, support, success, and revenue teams." },
    ],
    outcomes: ["Faster onboarding and time-to-value", "Lower repetitive support workload", "More connected customer context", "Clearer risk and expansion workflows"],
    systems: ["In-product AI assistant", "SaaS support automation", "Lifecycle CRM workflow", "Customer success dashboard"],
    relatedServices: ["ai-customer-support-automation", "workflow-automation", "websites-and-saas-dashboards"],
    faqs: [
      { question: "Can an AI assistant use our product documentation?", answer: "Yes. It can be grounded in maintained documentation and approved knowledge with clear escalation for uncertain or account-specific issues." },
      { question: "Can automation use product events?", answer: "Yes, when product analytics or application APIs expose the required events securely." },
    ],
  },
];

export const industryPageMap = new Map(industryPages.map((page) => [page.slug, page]));

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  service: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-ai-chatbots-help-businesses-capture-more-leads",
    title: "How AI Chatbots Help Businesses Capture More Leads",
    description: "Learn how AI chatbots improve response speed, qualification, booking, and CRM follow-up to convert more website inquiries.",
    date: "2026-06-10",
    readingTime: "7 min read",
    service: "ai-chatbot-development",
    intro: "Most websites lose leads between the first question and the first human reply. A well-designed AI chatbot closes that delay and gives each inquiry a useful next step.",
    sections: [
      { heading: "Why response speed changes conversion", paragraphs: ["High-intent visitors often compare several providers at once. Immediate, relevant help keeps the conversation moving while intent is still high.", "The goal is not to imitate a person. It is to answer clearly, collect useful context, and make the next action easy."] },
      { heading: "What a lead-focused chatbot should do", paragraphs: ["A useful system combines conversation design with workflow automation."], points: ["Answer approved service questions", "Collect contact and qualification details", "Recommend the right service or next step", "Book calls or appointments", "Create and update CRM records", "Escalate strong or unusual opportunities"] },
      { heading: "Measure outcomes, not chat volume", paragraphs: ["Track qualified conversations, bookings, response time, completed lead records, and sales handoffs. Raw message count rarely proves business value."] },
    ],
  },
  {
    slug: "ai-voice-agents-appointment-booking-guide",
    title: "AI Voice Agents for Appointment Booking: Complete Guide",
    description: "A practical guide to using AI voice agents for inbound calls, appointment booking, reminders, rescheduling, and human transfer.",
    date: "2026-06-06",
    readingTime: "9 min read",
    service: "ai-calling-agents",
    intro: "Appointment workflows are structured, time-sensitive, and repetitive. A carefully controlled AI calling agent can create real operational value.",
    sections: [
      { heading: "What an appointment voice agent handles", paragraphs: ["The agent can answer or place calls, identify the requested service, collect required details, check supported availability, and confirm a booking."], points: ["Inbound reception", "Outbound follow-up", "Booking and rescheduling", "Reminders and confirmations", "Human transfer"] },
      { heading: "The integrations that matter", paragraphs: ["Reliable booking requires more than speech. The agent needs calendar rules, customer records, service duration, location, availability, and notification workflows."] },
      { heading: "Where humans remain essential", paragraphs: ["Sensitive conversations, unusual requests, complaints, emergencies, and high-value exceptions should follow explicit human escalation paths."] },
    ],
  },
  {
    slug: "ai-automation-small-business-workflows",
    title: "AI Automation for Small Businesses: 10 Workflows Worth Automating",
    description: "Ten practical AI automation workflows for small businesses across lead management, support, scheduling, reporting, and operations.",
    date: "2026-06-02",
    readingTime: "8 min read",
    service: "ai-automation-agency",
    intro: "Small businesses usually get the best automation returns by fixing repetitive handoffs rather than chasing a vague promise to automate everything.",
    sections: [
      { heading: "Ten practical workflows", paragraphs: ["Choose workflows with clear inputs, repeated steps, and measurable outputs."], points: ["Lead response", "Lead qualification", "Appointment booking", "Missed-call follow-up", "FAQ support", "Ticket triage", "CRM data entry", "Proposal reminders", "Daily reporting", "Internal request routing"] },
      { heading: "How to choose the first workflow", paragraphs: ["Start where delays cost revenue or where staff repeat the same task frequently. A narrow, measurable pilot is easier to validate and improve."] },
      { heading: "Avoid automating broken processes", paragraphs: ["Document ownership, exceptions, source data, and the desired outcome before adding AI. Automation makes a clear process faster; it can also make a confused process fail faster."] },
    ],
  },
  {
    slug: "ai-customer-support-automation-benefits-cost-setup",
    title: "AI Customer Support Automation: Benefits, Cost, and Setup",
    description: "A practical guide to AI customer support automation, including benefits, cost factors, knowledge setup, integrations, and human escalation.",
    date: "2026-05-28",
    readingTime: "7 min read",
    service: "ai-customer-support-automation",
    intro: "AI support automation works best when it removes repetitive work, improves response time, and gives human agents better context without pretending every issue should be automated.",
    sections: [
      { heading: "Where support automation creates value", paragraphs: ["The best starting points are high-volume questions with reliable answers and clear escalation rules."], points: ["Service and policy questions", "Order or appointment status", "Issue categorization", "Customer detail collection", "Agent handoff with summary"] },
      { heading: "What shapes the cost", paragraphs: ["Cost depends on channels, ticket volume, knowledge quality, integrations, custom interfaces, monitoring, and the risk of the actions the system may take."] },
      { heading: "A reliable setup process", paragraphs: ["Organize approved knowledge, define permissions, connect the support tools, test uncertain scenarios, and give customers a clear route to a person."] },
    ],
  },
  {
    slug: "ai-voice-agent-vs-human-receptionist",
    title: "AI Voice Agent vs Human Receptionist: Which Is Better?",
    description: "Compare AI voice agents and human receptionists across availability, cost structure, empathy, complexity, and operational use cases.",
    date: "2026-05-22",
    readingTime: "8 min read",
    service: "ai-calling-agents",
    intro: "AI voice agents and human receptionists have different strengths. The best operating model often combines automation for structured calls with people for judgment and care.",
    sections: [
      { heading: "Where AI voice agents are strong", paragraphs: ["AI works well for repeatable conversations where the allowed actions and escalation rules are clear."], points: ["After-hours coverage", "Overflow handling", "Basic qualification", "Booking and reminders", "Consistent data capture"] },
      { heading: "Where people are stronger", paragraphs: ["Humans are better at nuanced judgment, emotional reassurance, negotiation, ambiguity, and exceptional situations."] },
      { heading: "Compare total workflow cost", paragraphs: ["Consider setup, call volume, integration, quality review, staff time saved, missed-call opportunity, and escalation—not only a simple per-call price."] },
    ],
  },
  {
    slug: "ai-lead-qualification-automation-sales-teams",
    title: "AI Lead Qualification Automation for Sales Teams",
    description: "A step-by-step framework for automating lead qualification with AI, CRM data, scoring rules, follow-up, and sales handoff.",
    date: "2026-05-18",
    readingTime: "8 min read",
    service: "ai-lead-generation-automation",
    intro: "Automated qualification works when the business can define fit, intent, required data, and the next action for each meaningful outcome.",
    sections: [
      { heading: "Define qualification before choosing tools", paragraphs: ["Agree on the questions, required fields, disqualifiers, high-intent signals, and ownership rules before building the workflow."] },
      { heading: "Combine AI conversation with deterministic rules", paragraphs: ["AI can understand natural answers, while explicit rules should control critical routing, eligibility, permissions, and CRM actions."] },
      { heading: "Create a useful sales handoff", paragraphs: ["A qualified lead should arrive with contact details, source, answers, score, conversation summary, recommended next step, and a clear owner."] },
    ],
  },
  {
    slug: "ai-chatbot-development-cost",
    title: "AI Chatbot Development Cost: What Businesses Should Expect",
    description: "Understand AI chatbot development cost, including conversation scope, knowledge, integrations, channels, testing, monitoring, and ongoing support.",
    date: "2026-05-14",
    readingTime: "8 min read",
    service: "ai-chatbot-development",
    intro: "The cost of a business chatbot depends less on the chat window and more on what the system must know, connect to, decide, and safely complete.",
    sections: [
      { heading: "The main cost factors", paragraphs: ["A simple grounded FAQ assistant is very different from a qualification and booking system connected to a CRM."], points: ["Number of channels", "Knowledge preparation", "Conversation and workflow complexity", "CRM and calendar integrations", "Custom dashboard requirements", "Testing, monitoring, and support"] },
      { heading: "Pilot versus production system", paragraphs: ["A pilot validates the workflow with limited scope. A production system needs stronger fallbacks, analytics, security controls, content ownership, and operational support."] },
      { heading: "Evaluate value alongside price", paragraphs: ["Compare the investment with missed leads, response delays, repetitive support hours, incomplete CRM data, and the revenue value of better booking and follow-up."] },
    ],
  },
  {
    slug: "best-ai-automations-real-estate-agencies",
    title: "Best AI Automations for Real Estate Agencies",
    description: "Practical AI automation ideas for real estate agencies, including lead response, qualification, viewing booking, CRM follow-up, and property inquiry chatbots.",
    date: "2026-05-10",
    readingTime: "8 min read",
    service: "ai-lead-generation-automation",
    intro: "Real estate teams generate inquiries across portals, websites, calls, and social channels. The strongest automations connect those inquiries to qualification, scheduling, and CRM follow-up.",
    sections: [
      { heading: "Automate the first response", paragraphs: ["Use chat or voice automation to answer quickly, capture property requirements, and identify whether the inquiry needs an agent immediately."] },
      { heading: "Standardize qualification and viewing workflows", paragraphs: ["Collect location, budget, property type, timeline, and financing context before proposing a viewing or consultation."], points: ["Property inquiry chatbot", "Buyer and seller qualification", "Viewing scheduling", "Missed-call follow-up", "CRM lead routing"] },
      { heading: "Keep agents focused on judgment", paragraphs: ["Automation should prepare and route the opportunity. Agents remain responsible for negotiation, advice, relationships, and complex property decisions."] },
    ],
  },
  {
    slug: "best-ai-automations-clinics-appointment-businesses",
    title: "Best AI Automations for Clinics and Appointment-Based Businesses",
    description: "Explore AI appointment booking, clinic chatbots, voice reception, reminders, support automation, and front-desk workflow improvements.",
    date: "2026-05-06",
    readingTime: "8 min read",
    service: "ai-voice-agents",
    intro: "Clinics and appointment-based businesses can automate routine administration while preserving clear human and clinical escalation for sensitive situations.",
    sections: [
      { heading: "Start with administrative workflows", paragraphs: ["Booking, rescheduling, reminders, service information, and form collection are structured tasks with clear operational value."], points: ["AI phone receptionist", "Website booking chatbot", "Appointment reminders", "Missed-call follow-up", "Administrative FAQ support"] },
      { heading: "Protect clinical boundaries", paragraphs: ["The system should not improvise medical advice. Define what it may answer, how urgent topics are identified, and when staff must take over."] },
      { heading: "Measure front-desk outcomes", paragraphs: ["Track missed inquiries, booking completion, call handling time, no-shows, escalation quality, and repetitive workload reduced."] },
    ],
  },
  {
    slug: "how-agencies-use-ai-automation-handle-more-clients",
    title: "How Agencies Can Use AI Automation to Handle More Clients",
    description: "How agencies can automate lead qualification, proposals, onboarding, delivery operations, reporting, and client communication without reducing service quality.",
    date: "2026-05-02",
    readingTime: "8 min read",
    service: "workflow-automation",
    intro: "Agency capacity is often limited by coordination rather than specialist work. Automation can remove repetitive handoffs so the team spends more time on judgment, strategy, and delivery.",
    sections: [
      { heading: "Automate before and after the client call", paragraphs: ["Qualification, meeting preparation, summaries, proposals, and follow-up can be structured without making the sales experience impersonal."] },
      { heading: "Build a repeatable onboarding system", paragraphs: ["Collect goals, access, assets, stakeholders, approvals, and missing information through a tracked workflow."], points: ["Lead qualification", "Proposal reminders", "Client onboarding", "Task creation", "Status summaries", "Reporting preparation"] },
      { heading: "Keep account relationships human", paragraphs: ["Use automation to prepare context and complete routine actions. Account strategy, creative judgment, negotiation, and sensitive communication remain human work."] },
    ],
  },
];

export const blogPostMap = new Map(blogPosts.map((post) => [post.slug, post]));

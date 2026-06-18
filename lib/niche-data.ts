export type NicheId = "education" | "real-estate" | "clinics" | "salons" | "travel" | "gyms";

export type NichePack = {
  id: NicheId;
  label: string;
  code: string;
  message: string;
  questions: string[];
  fields: { label: string; value: string }[];
  booking: string;
  followUp: string;
};

export const NICHE_PACKS: NichePack[] = [
  {
    id: "education",
    label: "Education",
    code: "EDU",
    message: "Do you have weekend IELTS classes in Karachi?",
    questions: ["Online or physical?", "Preferred timing?", "Which campus?", "Book a demo class?"],
    fields: [
      { label: "Course", value: "IELTS" },
      { label: "Mode", value: "Physical" },
      { label: "City", value: "Karachi" },
      { label: "Batch", value: "Weekend" },
    ],
    booking: "Free demo class",
    followUp: "Send counselor reminder tomorrow at 10:00",
  },
  {
    id: "real-estate",
    label: "Real Estate",
    code: "EST",
    message: "I need a two-bedroom apartment near Clifton.",
    questions: ["Buy or rent?", "Budget range?", "Furnished?", "Schedule a viewing?"],
    fields: [
      { label: "Intent", value: "Rent" },
      { label: "Budget", value: "PKR 180–220K" },
      { label: "Area", value: "Clifton" },
      { label: "Type", value: "2 bed apartment" },
    ],
    booking: "Property viewing",
    followUp: "Send matched listings in 15 minutes",
  },
  {
    id: "clinics",
    label: "Clinics",
    code: "MED",
    message: "Can I see a dermatologist tomorrow evening?",
    questions: ["New or returning?", "Preferred doctor?", "Any time window?", "Confirm appointment?"],
    fields: [
      { label: "Service", value: "Dermatology" },
      { label: "Patient", value: "New" },
      { label: "Day", value: "Tomorrow" },
      { label: "Window", value: "Evening" },
    ],
    booking: "Clinic appointment",
    followUp: "Send preparation note two hours before",
  },
  {
    id: "salons",
    label: "Salons & Spas",
    code: "SPA",
    message: "Is a bridal makeup slot available this Saturday?",
    questions: ["Which package?", "Preferred artist?", "Event time?", "Reserve with deposit?"],
    fields: [
      { label: "Service", value: "Bridal makeup" },
      { label: "Date", value: "Saturday" },
      { label: "Artist", value: "Senior" },
      { label: "Status", value: "High intent" },
    ],
    booking: "Service reservation",
    followUp: "Send deposit link now",
  },
  {
    id: "travel",
    label: "Travel",
    code: "TRV",
    message: "I want a five-day family trip to Dubai.",
    questions: ["Travel dates?", "Number of travelers?", "Hotel class?", "Request a quote?"],
    fields: [
      { label: "Destination", value: "Dubai" },
      { label: "Duration", value: "5 days" },
      { label: "Travelers", value: "Family · 4" },
      { label: "Hotel", value: "4 star" },
    ],
    booking: "Travel consultation",
    followUp: "Deliver package shortlist in one hour",
  },
  {
    id: "gyms",
    label: "Gyms",
    code: "FIT",
    message: "Can I try the gym before I sign up?",
    questions: ["Primary goal?", "Preferred branch?", "Training time?", "Book a trial?"],
    fields: [
      { label: "Goal", value: "Strength" },
      { label: "Branch", value: "DHA" },
      { label: "Timing", value: "After 7 PM" },
      { label: "Plan", value: "Monthly" },
    ],
    booking: "Free trial session",
    followUp: "Send trainer introduction after booking",
  },
];

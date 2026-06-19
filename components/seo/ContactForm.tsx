"use client";

import { useState, type FormEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get("website_confirm")) return;
    setStatus("sending");

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(data.entries())),
        });
        if (!response.ok) throw new Error("Form endpoint rejected the request.");
      }
      window.gtag?.("event", "generate_lead", { event_category: "contact", event_label: "contact_form" });
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-success" role="status">
        <strong>Thanks—your project brief is ready.</strong>
        <p>{endpoint ? "The Orxivo team will reply with next steps." : <>Email it to <a href="mailto:hello@orxivo.systems">hello@orxivo.systems</a> while the production form endpoint is being connected.</>}</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input name="name" autoComplete="name" minLength={2} required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Company<input name="company" autoComplete="organization" /></label>
      <label>Website<input name="website" type="url" autoComplete="url" placeholder="https://" /></label>
      <label>Service interested in<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>AI automation strategy</option><option>AI chatbot development</option><option>AI voice or calling agent</option><option>Lead generation automation</option><option>Customer support automation</option><option>CRM automation</option><option>Workflow automation</option><option>Website or SaaS dashboard</option></select></label>
      <label>Budget range<select name="budget" defaultValue="" required><option value="" disabled>Select a range</option><option>Under $2,500</option><option>$2,500–$7,500</option><option>$7,500–$20,000</option><option>$20,000+</option><option>Not sure yet</option></select></label>
      <label>Timeline<select name="timeline" defaultValue="" required><option value="" disabled>Select a timeline</option><option>As soon as possible</option><option>Within 1 month</option><option>Within 1–3 months</option><option>3+ months</option><option>Exploring options</option></select></label>
      <label className="contact-form__honeypot" aria-hidden="true">Leave this field empty<input name="website_confirm" tabIndex={-1} autoComplete="off" /></label>
      <label className="contact-form__message">Message<textarea name="message" rows={7} minLength={20} maxLength={4000} required placeholder="Describe the workflow, bottleneck, or product you want to build." /></label>
      <button className="seo-button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Start a Project"} <span aria-hidden="true">↗</span></button>
      {status === "error" && <p className="contact-form__error" role="alert">The form could not be sent. Please email hello@orxivo.systems.</p>}
      <small>We use your details only to respond to this inquiry. Do not submit passwords, payment details, health records, or other sensitive information. Spam protection and server-side validation should be enabled with the production form endpoint.</small>
    </form>
  );
}

import React, { useState } from "react";

const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most teams are up and running in under 15 minutes. Our onboarding wizard walks you through connecting your email, chat, and ticketing systems.",
  },
  {
    q: "Can I integrate with my existing tools?",
    a: "Yes — we support Slack, Jira, Zendesk, Salesforce, and 40+ other integrations out of the box. Custom webhooks are available on Pro and Enterprise plans.",
  },
  {
    q: "Is there a free trial?",
    a: "Absolutely. Every plan comes with a 14-day free trial, no credit card required.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter plans include email support. Pro plans get priority chat support. Enterprise customers receive a dedicated customer success manager and phone support.",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-gray-200">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                <span className="ml-4 text-gray-400">{openIdx === idx ? "−" : "+"}</span>
              </button>
              {openIdx === idx && (
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

const PLANS = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    features: ["Up to 5 agents", "Email support", "Basic analytics", "1 workspace"],
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    features: ["Up to 25 agents", "Priority support", "Advanced analytics", "5 workspaces", "API access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Unlimited agents", "Dedicated CSM", "Custom integrations", "SSO & SCIM", "SLA guarantee"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">Simple, transparent pricing</h2>
        <p className="mt-3 text-center text-gray-500">No hidden fees. Cancel anytime.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-indigo-500 bg-white shadow-lg ring-1 ring-indigo-500"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-emerald-500">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact sales" : "Start free trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

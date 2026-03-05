import React from "react";

export function HeroSection() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Customer support that scales with you
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Acme Support Portal helps teams resolve tickets faster with AI-powered
          routing, smart escalation, and real-time dashboards.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            Start free trial
          </a>
          <a
            href="#faq"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

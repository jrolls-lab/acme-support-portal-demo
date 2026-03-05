import React from "react";

export function SecuritySection() {
  return (
    <section id="security" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold text-gray-900">Enterprise-grade security</h2>
        <p className="mt-3 text-center text-gray-500">
          Your data is protected with industry-leading security practices.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {/* badges */}
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-gray-700">256-bit TLS Encryption</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-gray-700">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-sm font-medium text-gray-700">99.99% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

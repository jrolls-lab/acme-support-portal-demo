import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="#pricing" className="hover:text-gray-700">Pricing</a></li>
              <li><a href="#security" className="hover:text-gray-700">Security</a></li>
              <li><a href="#faq" className="hover:text-gray-700">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="/docs" className="hover:text-gray-700">Documentation</a></li>
              <li><a href="/api" className="hover:text-gray-700">API Reference</a></li>
              <li><a href="/changelog" className="hover:text-gray-700">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-gray-700">About</a></li>
              <li><a href="/blog" className="hover:text-gray-700">Blog</a></li>
              <li><a href="/careers" className="hover:text-gray-700">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li><a href="/help" className="hover:text-gray-700">Questions? We’re here to help.</a></li>
              <li><a href="/help" className="hover:text-gray-700">Reach our support team</a></li>
              <li><a href="/status" className="hover:text-gray-700">System status</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

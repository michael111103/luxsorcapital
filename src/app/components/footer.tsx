// components/footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const platform = ["Features", "Pricing", "Demo", "Docs"];
  const company = ["About", "Careers", "Blog", "Contact"];
  const follow = ["Twitter", "Instagram"];

  return (
    <footer className="bg-black text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-6">QUARK</h3>
            <p className="text-gray-400">
              Your all-in-one AI assistant for writing, chatting, summarizing,
              and learning. Powered by OpenAI.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              {platform.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-6">
              Follow
            </h4>
            <div className="flex space-x-6">
              {follow.map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {year} QUARK. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

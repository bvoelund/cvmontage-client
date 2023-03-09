import Link from "next/link";
import React from "react";

export default function FooterColumn() {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-white">Our Services</p>

      <nav aria-label="Footer Services Nav" className="mt-8">
        <ul className="space-y-4 text-sm">
          <li>
            <Link
              className="text-white transition hover:text-white/75"
              href="/"
            >
              Web Development
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition hover:text-white/75"
              href="/"
            >
              Web Design
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition hover:text-white/75"
              href="/"
            >
              Marketing
            </Link>
          </li>

          <li>
            <Link
              className="text-white transition hover:text-white/75"
              href="/"
            >
              Google Ads
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

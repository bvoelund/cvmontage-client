import Link from "next/link";
import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-darker to-primary text-white rounded-t-3xl relative">
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="outline-none absolute left-1/2 right-1/2 -top-8 bg-white text-primary h-auto w-fit p-4 rounded-full rotate-180 shadow-2xl border-2 transition ease-linear duration-200 delay-75 hover:scale-110"
      >
        <FiArrowUp size={30} className="rotate-180" />
      </button>
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-4xl">CV Montage</h2>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
              Et troværdigt og selvstændigt tømrerfirma, gennem de sidste 15 år.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Company History
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Employee Handbook
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

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

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Links</p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-white transition hover:text-white/75"
                      href="/"
                    >
                      Support
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <span className="text-white transition group-hover:text-white/75">
                        Live Chat
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Kontakt</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <button
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    onClick={() => window.open("mailto:cvmontage@hotmail.com")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="text-white">cvmontage@hotmail.com</span>
                  </button>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="tel:+4522481959"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-white">+45 22 48 19 59</span>
                  </Link>
                </li>

                <li className="group text-white">
                  <Link
                    className="flex items-start justify-center gap-1.5 sm:justify-start "
                    target="_blank"
                    href="https://www.google.com/maps/place/Hedevej+9,+8660+Skanderborg/@56.0146161,9.7460311,442m/data=!3m1!1e3!4m6!3m5!1s0x464c70be83528a69:0xf72980b4c6f79438!8m2!3d56.0144302!4d9.7468657!16s%2Fg%2F11b8v6cjqs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-white group-hover:text-white/75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 not-italic group-hover:text-white/75">
                      Hedevej 9, 8660 Skanderborg, Danmark
                    </address>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-center">
            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2023 CV Montage
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

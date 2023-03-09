import Link from "next/link";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-between w-full">
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
              <p className="text-lg font-medium text-white">Kontakt</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <div
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    onClick={() => window.open("mailto:cvmontage@hotmail.com")}
                  >
                    <HiOutlineMail size={24} />

                    <span className="text-white">cvmontage@hotmail.com</span>
                  </div>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="tel:+4522481959"
                  >
                    <HiOutlinePhone size={24} />

                    <span className="text-white">+45 22 48 19 59</span>
                  </Link>
                </li>

                <li className="group text-white">
                  <Link
                    className="flex items-start justify-center gap-1.5 sm:justify-start "
                    target="_blank"
                    href="https://www.google.com/maps/place/Hedevej+9,+8660+Skanderborg/@56.0146161,9.7460311,442m/data=!3m1!1e3!4m6!3m5!1s0x464c70be83528a69:0xf72980b4c6f79438!8m2!3d56.0144302!4d9.7468657!16s%2Fg%2F11b8v6cjqs"
                  >
                    <HiOutlineLocationMarker size={24} />

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
          <div className="text-center flex justify-between md:flex-row flex-col">
            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              &copy; 2023 CV Montage
            </p>
            <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
              Hjemmeside af:
              <a
                className="ml-2 underline underline-offset-4 hover:text-white/75"
                href="https://www.benjaminvoelund.dev"
                target="_blank"
              >
                benjaminvoelund.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

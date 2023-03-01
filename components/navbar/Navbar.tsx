import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import UnderlineLink from "../UnderlineLink";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={classNames(
        scrollPosition === 0 ? "shadow-md" : "shadow-xl rounded-b-3xl",
        "sticky top-0 flex justify-between w-full lg:px-12 px-6 lg:py-6 py-5 items-center bg-white z-30 transition-all duration-500 delay-75 ease-out"
      )}
    >
      <Link href="/" className="text-3xl font-semibold">
        CV Montage
      </Link>
      <NavbarMenu />
    </nav>
  );
}

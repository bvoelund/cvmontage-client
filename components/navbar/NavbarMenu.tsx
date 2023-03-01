import { HiMenuAlt3 } from "react-icons/hi";
import UnderlineLink from "../UnderlineLink";
import { useState, useEffect } from "react";
import classNames from "classnames";
import SideMenu from "./SideMenu";

export default function NavbarMenu() {
  const [toggleSideMenu, settoggleSideMenu] = useState(false);

  useEffect(() => {
    if (toggleSideMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [toggleSideMenu]);

  return (
    <>
      <div className="hidden lg:flex justify-center items-center space-x-10 text-primary text-lg">
        <UnderlineLink color="text-primary" href="/" title="Home" />
        <UnderlineLink color="text-primary" href="/work" title="Work" />
        <UnderlineLink color="text-primary" href="/contact" title="Contact" />
      </div>

      <button
        className="relative group z-50 lg:hidden block"
        onClick={() => settoggleSideMenu(!toggleSideMenu)}
      >
        <div
          className={classNames(
            toggleSideMenu ? "ring-4" : "ring-0",
            "relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-white ring-gray-300 hover:ring-8  ring-opacity-30 duration-200 shadow-md"
          )}
        >
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div
              className={classNames(
                toggleSideMenu ? "translate-x-10" : "translate-x-0",
                "bg-slate-700 h-[3px] rounded-3xl w-7 transform transition-all duration-300 origin-left"
              )}
            />
            <div
              className={classNames(
                toggleSideMenu ? "translate-x-10" : "translate-x-0",
                "bg-slate-700 h-[3px] rounded-3xl w-7 transform transition-all duration-300 delay-75"
              )}
            />
            <div
              className={classNames(
                toggleSideMenu ? "translate-x-10" : "translate-x-0",
                "bg-slate-700 h-[3px] rounded-3xl w-7 transform transition-all duration-300 origin-left delay-150"
              )}
            />

            <div
              className={classNames(
                toggleSideMenu ? "translate-x-0 w-12" : "-translate-x-10 w-0 ",
                "absolute items-center justify-between transform transition-all duration-500 top-2.5 flex"
              )}
            >
              <div
                className={classNames(
                  toggleSideMenu ? "rotate-45" : "rotate-0",
                  "absolute bg-slate-700 h-[3px] w-5 transform transition-all duration-500 delay-300"
                )}
              />
              <div
                className={classNames(
                  toggleSideMenu ? "-rotate-45" : "rotate-0",
                  "absolute bg-slate-700 h-[3px] w-5 transform transition-all duration-500 -rotate-0 delay-300"
                )}
              />
            </div>
          </div>
        </div>
      </button>
      <SideMenu show={toggleSideMenu} />
    </>
  );
}

import classNames from "classnames";
import React from "react";

type Props = {
  show: boolean;
};

export default function SideMenu({ show }: Props) {
  return (
    <div
      className={classNames(
        show
          ? "bg-opacity-25"
          : "bg-opacity-0 duration-700 pointer-events-none",
        "absolute inset-0 bg-slate-500 h-screen z-40 transition duration-500 ease-out overscroll-none"
      )}
    >
      <div
        className={classNames(
          show ? "w-4/5 translate-x-0" : "w-0 translate-x-full",
          "h-screen fixed right-0 top-0 bg-white transform  transition-all duration-700 ease-linear delay-100"
        )}
      >
        SideMenu
      </div>
    </div>
  );
}

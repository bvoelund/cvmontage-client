import React from "react";
import { CgMenuGridO } from "react-icons/cg";

export default function AboutSection() {
  return (
    <section className="w-full h-full mx-auto grid grid-cols gap-32 xl:grid-cols-2 xl:px-56 px-8 xl:mb-10 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-500 py-32 text-white">
      <div className=" flex justify-center items-center w-full h-full relative mb-20 xl:mb-0">
        <div className="md:w-4/6 xl:w-full flex justify-center relative">
          <img
            src="/profile.jpg"
            className="rounded-tr-full rounded-br-full rounded-tl-full object-cover z-10 shadow-2xl w-full"
          />
          <div className="absolute -left-4 -bottom-4 border-b-4 border-l-4 z-10 w-16 h-16 border-white opacity-70" />
          <div className="absolute -right-4 -top-4 border-t-4 border-r-4 z-10 w-1/3 h-1/2 border-white opacity-70 rounded-tr-full" />
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex w-full justify-start items-center flex-col">
          <h1 className="xl:text-6xl text-3xl flex justify-start flex-col mb-4">
            <span className="pb-2 whitespace-nowrap text-white">
              Hvem er jeg
              <span className=" rounded ml-2">?</span>
            </span>
          </h1>
          <p className="xl:text-xl text-lg w-5/6 leading-8">
            Mit navn er Claus Vølund, og jeg er ejer af CV Montage. Jeg er bosat
            nær Skanderborg, Midtjylland, og har været i erhverv som tømrer
            igennem de sidste 20 år. Jeg valgte sidenhen at gå den selvstændige
            vej, og har siden hen drevet virksomhed selv.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import CheckmarkBullet from "../CheckmarkBullet";

export default function HeroSection() {
  return (
    <section className="w-full h-full mx-auto grid grid-cols xl:grid-cols-2 xl:px-32 px-8">
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex w-fit justify-start flex-col rounded-3xl">
          <h1 className="xl:text-6xl lg:text-4xl text-2xl flex lg:flex-col space-x-2 lg:space-x-0 lg:mb-12 mb-4">
            <span className="pb-2 whitespace-nowrap text-primary">
              Velkommen hos
            </span>
            <span>
              CV Montage
              <span className="text-primary rounded">.</span>
            </span>
          </h1>
          <div className="flex flex-col space-y-4">
            <CheckmarkBullet text="Selvstændigt tømrerfirma, lokaliseret i midtjylland" />
            <CheckmarkBullet text="Tilbyder service til alle former for håndværksmæssige ydelser" />
            <CheckmarkBullet text="Mange års erfaring indenfor feltet" />
          </div>
        </div>
      </div>
      <div className="order-first xl:order-last flex justify-center items-center w-full h-full relative lg:mb-20  xl:mb-0">
        <div className="flex justify-center relative md:w-4/6 xl:w-full">
          <img
            src="/dot-grid-teal.svg"
            className="text-primary absolute lg:top-3 lg:left-3 left-0 top-0 opacity-70 lg:w-32 w-20 h-auto"
          />
          <img
            src="/hero.jpg"
            className="rounded-bl-full rounded-br-full rounded-tl-full object-cover z-10 shadow-2xl "
          />
          <img
            src="/dot-grid-teal.svg"
            className="text-primary absolute bottom-0 right-0 lg:bottom-3 lg:-right-3 opacity-70 lg:w-32 w-20 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

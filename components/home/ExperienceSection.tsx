import React from "react";
import { BiNetworkChart } from "react-icons/bi";
import { RiRuler2Line, RiPencilRulerLine } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { CgAlbum } from "react-icons/cg";
import { BsTools } from "react-icons/bs";
import {
  TbLayersDifference,
  TbTriangle,
  TbTriangleSquareCircle,
} from "react-icons/tb";
import Card from "../Card";
import { RxRulerSquare } from "react-icons/rx";

// Rename
export default function ExperienceSection() {
  return (
    <section className="w-full">
      <div className="mt-8 relative bg-teal-700 mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
        {/* <img
            src="/dot-grid-white.svg"
            className="lg:right-12 lg:top-12 absolute right-2 top-2 opacity-40 w-20 h-auto"
          /> */}
        <BsTools
          color="white"
          className="lg:right-12 lg:top-12 absolute right-2 top-2 opacity-40 w-20 h-auto text-white -rotate-90"
        />
        <RxRulerSquare className="lg:left-12 lg:bottom-12 absolute left-2 bottom-2 opacity-40 w-32 h-auto text-white -rotate-90" />
        {/* <img
            src="/dot-grid-white.svg"
            className="lg:left-12 lg:bottom-12 absolute left-2 bottom-2 opacity-40 w-20 h-auto rotate-45"
          /> */}

        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
            Et erfarent, loyalt og selvstændigt tømrerfirma igennem de sidste 15
            år
          </h1>
        </div>
        {/* <div className="flex justify-center items-center mb-10 sm:mb-20">
            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-teal-700	focus:ring-white rounded text-teal-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Get Started
            </button>
            <button className="hover:bg-white hover:text-primary lg:text-xl hover:border-primary ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-teal-700 focus:ring-white hover:bg-teal-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
          </div> */}
      </div>
      <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
        <div className="relative sm:w-2/3 w-11/12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            icon={<CgAlbum size={40} />}
            title="15+ års erfaring"
            text="Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. 
            Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer"
            reference={{
              referenceLink: "/reference/fixme",
              referenceText: "Se mine fremhævede projekter her",
            }}
          />
          <Card
            icon={<BiNetworkChart size={40} />}
            title="Bredt netværk"
            text="Igennem mine mange år indenfor feltet har jeg dannet mig et stort netværk af dygtige fagfolk.
               Dette rækker fra VVS-folk, elektrikere, murere m.v. 
               Relationen til disse folk er skabt igennem mange års samarbejde, og jeg har folk til at hjælpe med enhver tænkelig udfordring."
          />
          <Card
            icon={<TbLayersDifference size={40} />}
            title="Projekter af alle typer"
            text="Jeg har erfaring indenfor konstruktion, opførelse og vedligeholdese af mange forskellige slags byggeprojekter.
               Disse rækker fra udskiftning af byggematerialer, til konstruktion af tilbygninger og haller.
               Hvad end dit projekt måtte være, er jeg sikker på at vi kan finde en løsning."
          />
        </div>
      </div>
    </section>
  );
}

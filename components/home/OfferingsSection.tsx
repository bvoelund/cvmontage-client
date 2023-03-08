import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { BiBadgeCheck } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { CgAlbum, CgFileDocument } from "react-icons/cg";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RiPencilRuler2Line } from "react-icons/ri";
import { TbForklift, TbPackage, TbTree, TbTrees } from "react-icons/tb";
import { TfiRulerPencil } from "react-icons/tfi";
import { TiSpannerOutline } from "react-icons/ti";
import Card, { CardType } from "../Card";

const cards: CardType[] = [
  {
    icon: <MdOutlineChangeCircle size={40} />,
    title: "Udskiftning",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <CgFileDocument size={40} />,
    title: "Udarbejdet tilbud",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <TbForklift size={40} />,
    title: "Maskiner",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <AiOutlineBlock size={40} />,
    title: "Sammensætninger",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <TbPackage size={40} />,
    title: "Pakkeløsninger",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <RiPencilRuler2Line size={40} />,
    title: "Hjælp til mål og optegning",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <BiBadgeCheck size={40} />,
    title: "Professionelt håndværk",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <TbTrees size={40} />,
    title: "Hjælp til materialevalg",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
  {
    icon: <TiSpannerOutline size={40} />,
    title: "Hjælp til materialevalg",
    text: "Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer",
    reference: {
      referenceLink: "/reference/fixme",
      referenceText: "Se mine fremhævede projekter her",
    },
  },
];

const getDelay = () => {};

export default function OfferingsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="h-full w-full flex flex-col items-center justify-center relative p-4 lg:p-20">
      <h1 className="lg:text-5xl mb-10 text-2xl">
        Hvad kan jeg tilbyde <span className="text-primary">?</span>
      </h1>
      <div
        ref={ref}
        className="grid md:w-4/6 w-full justify-center lg:gap-10 gap-2 lg:grid-cols-3"
      >
        {cards.map((card, i) => {
          const delay = (i + 1) * 150;
          return (
            <div
              className={classNames(
                isInView ? `opacity-100` : "opacity-0",
                `transition-all duration-1000 ease-out delay-${delay}`
              )}
              key={`offerings-card-${i}`}
            >
              <Card
                icon={card.icon}
                title={card.title}
                text={card.text}
                reference={card?.reference}
              />
            </div>
          );
        })}
      </div>
      <img
        src="/dot-grid-teal.svg"
        className="text-primary absolute lg:top-1/3 lg:left-40 left-0 top-0 opacity-70 lg:w-32 w-20 h-auto"
      />
      <img
        src="/dot-grid-teal.svg"
        className="text-primary absolute lg:bottom-1/4 lg:right-32 right-0 bottom-0 opacity-70 lg:w-32 w-20 h-auto"
      />
    </section>
  );
}

import React from "react";
import { CgAlbum } from "react-icons/cg";
import Card from "../Card";

export default function OfferingsSection() {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center relative p-20">
      <h1 className="lg:text-5xl mb-10 text-2xl">
        Hvad kan jeg tilbyde <span className="text-primary">?</span>
      </h1>
      <div className="grid lg:w-4/6 w-full lg:gap-10 gap-2 lg:grid-cols-3">
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
          icon={<CgAlbum size={40} />}
          title="15+ års erfaring"
          text="Jeg har drevet selvstændig tømrerfirma i over 15 år og har været ansvarlig/medansvarlig for en lang række projekter. 
            Udover det håndsværksmæssige skriver jeg selvfølgelig et tilbud på dit byggeprojekt, indenfor retfærdighedens rammer"
          reference={{
            referenceLink: "/reference/fixme",
            referenceText: "Se mine fremhævede projekter her",
          }}
        />
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

import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";
import { CgArrowLongRight } from "react-icons/cg";

type Reference = {
  referenceText: string;
  referenceLink: string;
};

export type CardType = {
  icon: string | ReactNode;
  title: string;
  text: string;
  reference?: Reference;
};

export default function Card({ icon, title, text, reference }: CardType) {
  return (
    <div className="bg-white shadow-2xl w-full rounded-3xl p-8 space-y-8 flex flex-col z-30">
      <div className="flex justify-start items-center border-b-2 pb-4 ">
        <i className="text-primary">{icon}</i>
        <h4 className="text-xl font-semibold ml-4 text-black">{title}</h4>
      </div>
      <p className="leading-6 font-medium">{text}</p>
      {reference && (
        <Link
          href={reference.referenceLink}
          className="flex items-center group"
        >
          <span className="text-sm italic group-hover:text-primary">
            {reference.referenceText}
          </span>
          <CgArrowLongRight className="group-hover:text-primary" size={24} />
        </Link>
      )}
    </div>
  );
}

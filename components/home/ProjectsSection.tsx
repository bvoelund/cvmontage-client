import classNames from "classnames";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { RxDotFilled } from "react-icons/rx";
import CarouselFade from "../CarouselFade";
import CarouselSlide from "../CarouselSlide";
// <div className="w-full flex justify-center items-center">
//   <div className="w-2/5 flex justify-center items-center border-2 border-black">
//     <div className="relative">
//       <div className="w-full overflow-hidden">
//         <div className="ml-[0%] w-[500%] transition duration-500">
//           <Item />
//           <Item />
//           <Item />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

function Item() {
  return (
    <div className="float-left w-1/5">
      <div className="mb-8 flex flex-col justify-center items-center">
        <img
          src="https://mattfarley.ca/img/avatars/pascal.png"
          className="h-auto max-w-[100px] lg:mt-16 lg:mb-8 mx-auto rounded-full"
        />
        <p className="text-xl max-w-2xl mt-0 mx-auto mb-10 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
          quisquam, reiciendis saepe sint dolorum cum? Sequi, laborum fugit,
          facere quibusdam non assumenda enim qui minima perspiciatis error
          eaque ad?
        </p>
        <h3 className="font-semibold text-primary text-lg">John Doe</h3>
        <h4 className="font-medium break-words">Executive Owner, Company</h4>
      </div>
    </div>
  );
}

const items = [
  "https://images.unsplash.com/photo-1559634946-5856e4b8e613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1586064957227-11d763b135a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1645651964715-d200ce0939cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export default function ProjectsSection() {
  return (
    <section className="flex justify-center w-full px-44">
      <div className="grid grid-cols-2 gap-20">
        <div className="flex justify-center items-center w-full h-full relative xl:mb-0">
          <CarouselFade slides={items} />
        </div>
        <div className="order-first xl:order-last w-full h-full">
          <div className="h-full w-full flex justify-center items-center">
            <div className="flex w-full justify-start flex-col">
              <h1 className="xl:text-6xl text-xl flex flex-col mb-4">
                <span className="mr-2 whitespace-nowrap bg-teal-800 bg-clip-text fill-transparent text-transparent">
                  Velkommen hos
                </span>
                <span>
                  CV Montage
                  <span className="text-primary rounded">.</span>
                </span>
              </h1>
              <p className="xl:text-xl w-5/6 leading-8">
                Et selvstændigt tømrerfirma, lokaliseret i midtjylland. Jeg
                tilbyder service til alle former for håndværksmæssige ydelser og
                har mange års erfaring indenfor feltet. Hvis du har interesse i
                min service, så benyt gerne muligheden til at sende mig en
                e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

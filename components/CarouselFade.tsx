import classNames from "classnames";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type Props = {
  slides: string[];
};

export default function CarouselFade({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="h-full w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      />
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 translate-x-0 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 translate-x-0 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="w-full flex justify-center items-center mt-4 space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={classNames(
              currentIndex === index ? "text-primary" : "text-black",
              "text-3xl cursor-pointer"
            )}
          >
            <RxDotFilled onClick={() => setCurrentIndex(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

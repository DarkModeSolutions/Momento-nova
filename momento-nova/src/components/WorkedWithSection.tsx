import React from "react";
import marriottImg from "@/../public/assets/images/marriott.png";
import novotelImg from "@/../public/assets/images/novotel.png";
import oneandonlyImg from "@/../public/assets/images/oneandonly.png";
import pullmanImg from "@/../public/assets/images/pullman.png";
import rafflesimg from "@/../public/assets/images/raffleshotel.png";
import addressImg from "@/../public/assets/images/address.png";
import accorimg from "@/../public/assets/images/accor.png";
// import newMovenpickImg from "@/../public/assets/images/newMovenpickImg.png";
import newMovenpickImg from "@/../public/assets/images/movenpickNewImagePriy-removebg-preview.png";
import whotelsImg from "@/../public/assets/images/whotels.png";
import atpalmdubaiImg from "@/../public/assets/images/atpalmdubai.png";
import jumeirahImg from "@/../public/assets/images/jumeirah.png";
import keminskiImg from "@/../public/assets/images/keminski.png";
import intercontinentalImg from "@/../public/assets/images/intercontinental.png";
import hiltonImg from "@/../public/assets/images/hilton.png";
import WorkedWith from "@/components/WorkedWith";

const WorkedWithSection = () => {
  const workedWithLogos = [
    {
      src: accorimg,
      alt: "Accor",
      height: "h-[%]",
      width: "w-32",
    },
    {
      src: newMovenpickImg,
      alt: "Movenpick",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: whotelsImg,
      alt: "W Hotels",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: atpalmdubaiImg,
      alt: "At Palm Dubai",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: jumeirahImg,
      alt: "Jumeirah",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: keminskiImg,
      alt: "Kempinski",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: intercontinentalImg,
      alt: "Intercontinental",
      height: "h-[%]",
      width: "w-32",
    },
    {
      src: hiltonImg,
      alt: "Hilton",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: marriottImg,
      alt: "Marriott",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: novotelImg,
      alt: "Novotel",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: oneandonlyImg,
      alt: "One&Only",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: pullmanImg,
      alt: "Pullman",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: rafflesimg,
      alt: "Raffles",
      height: "h-[%]",
      width: "w-24",
    },
    {
      src: addressImg,
      alt: "Address",
      height: "h-[%]",
      width: "w-24",
    },
  ];

  return (
    <div className="p-5 gradient-radial" id="portfolio">
      <div className="mt-5 flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-[400]">
          We have worked with
        </h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-2">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>
      {/* First row: 3 logos (indices 0, 1, 2) */}
      <div className="mt-5 flex flex-wrap gap-8 justify-center items-center">
        {workedWithLogos.slice(0, 3).map((logo, index) => {
          return (
            <WorkedWith
              key={`first-${index}`}
              img={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          );
        })}
      </div>
      {/* Second row: 4 logos (indices 3, 4, 5, 6) */}
      <div className="mt-5 flex flex-wrap gap-8 justify-center items-center">
        {workedWithLogos.slice(3, 7).map((logo, index) => {
          return (
            <WorkedWith
              key={`second-${index}`}
              img={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          );
        })}
      </div>
      {/* Third row: 6 logos (indices 7, 8, 9, 10, 11, 12) */}
      <div className="mt-5 flex flex-wrap gap-8 justify-center items-center">
        {workedWithLogos.slice(7, 13).map((logo, index) => {
          return (
            <WorkedWith
              key={`third-${index}`}
              img={logo.src}
              alt={logo.alt}
              height={logo.height}
              width={logo.width}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkedWithSection;

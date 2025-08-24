import React from "react";
import marriottImg from "@/../public/assets/images/marriott.png";
import novotelImg from "@/../public/assets/images/novotel.png";
import oneandonlyImg from "@/../public/assets/images/oneandonly.png";
import pullmanImg from "@/../public/assets/images/pullman.png";
import rafflesimg from "@/../public/assets/images/raffleshotel.png";
import addressImg from "@/../public/assets/images/address.png";
import accorimg from "@/../public/assets/images/accor.png";
import movenpickImg from "@/../public/assets/images/movenpick.png";
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
    },
    {
      src: movenpickImg,
      alt: "Movenpick",
    },
    {
      src: whotelsImg,
      alt: "W Hotels",
    },
    {
      src: atpalmdubaiImg,
      alt: "At Palm Dubai",
    },
    {
      src: jumeirahImg,
      alt: "Jumeirah",
    },
    {
      src: keminskiImg,
      alt: "Kempinski",
    },
    {
      src: intercontinentalImg,
      alt: "Intercontinental",
    },
    {
      src: hiltonImg,
      alt: "Hilton",
    },
    {
      src: marriottImg,
      alt: "Marriott",
    },
    {
      src: novotelImg,
      alt: "Novotel",
    },
    {
      src: oneandonlyImg,
      alt: "One&Only",
    },
    {
      src: pullmanImg,
      alt: "Pullman",
    },
    {
      src: rafflesimg,
      alt: "Raffles",
    },
    {
      src: addressImg,
      alt: "Address",
    },
  ];

  return (
    <div className="p-5 gradient-radial">
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
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {workedWithLogos.slice(0, 3).map((logo, index) => {
          console.log("First row indices: ", index);
          return (
            <WorkedWith key={`first-${index}`} img={logo.src} alt={logo.alt} />
          );
        })}
      </div>
      {/* Second row: 4 logos (indices 3, 4, 5, 6) */}
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {workedWithLogos.slice(3, 7).map((logo, index) => {
          console.log("Second row indices: ", index + 3);
          return (
            <WorkedWith key={`second-${index}`} img={logo.src} alt={logo.alt} />
          );
        })}
      </div>
      {/* Third row: 6 logos (indices 7, 8, 9, 10, 11, 12) */}
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {workedWithLogos.slice(7, 13).map((logo, index) => {
          console.log("Third row indices: ", index + 7);
          return (
            <WorkedWith key={`third-${index}`} img={logo.src} alt={logo.alt} />
          );
        })}
      </div>
    </div>
  );
};

export default WorkedWithSection;

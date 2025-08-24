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
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {workedWithLogos.map((logo, index) => (
          <WorkedWith key={index} img={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default WorkedWithSection;

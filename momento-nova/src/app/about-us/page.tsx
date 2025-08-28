import React from "react";
import aboutUsImg from "@/../public/assets/images/aboutUsImage.png";
import curvyLine from "@/../public/assets/images/curvyLine.png";
import star from "@/../public/assets/images/star.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-[#1B012D] pt-28 relative min-h-screen p-8">
      <div className="w-5/12">
        <div className="w-full text-4xl">
          <h2 className="gradient-text inline">A little bit</h2>
          <h1 className="capitalize text-[#ffffff]">About Us</h1>
        </div>
        <div style={{ lineHeight: "197%" }} className="mt-5 w-full text-white">
          <p>
            We create exceptional, tailor-made experiences that embody elegance,
            innovation, and flawless execution. Our mission is to deliver
            seamless events that exceed expectations and redefine industry
            standards.
          </p>
        </div>
        <hr className="my-8" />
        <div className="w-9/12">
          <div className="text-white">
            <h4 className="font-bold">🎯 Personalized Service</h4>
            <p>
              Curated with your vision in mind, every detail resonates with your
              unique needs.
            </p>
          </div>
          <div className="text-white">
            <h4 className="font-bold">💡 Innovative Solutions</h4>
            <p>
              We blend cutting-edge technology with artistic storytelling to
              deliver unforgettable moments.
            </p>
          </div>
          <div className="text-white">
            <h4 className="font-bold">🛠️ Expert Team</h4>
            <p>
              Our diverse professionals ensure your event unfolds with
              precision, creativity, and grace
            </p>
          </div>
        </div>
      </div>
      <div className="absolute w-[600px] aspect-square right-[20%] top-[26%]">
        <div className="relative">
          <Image
            src={curvyLine}
            alt="curvy"
            width={500}
            height={500}
            className="transform rotate-[2deg]"
          />
          <Image
            src={star}
            alt="star"
            width={60}
            height={60}
            className="absolute top-[-20%] left-[10%]"
          />
          <Image
            src={aboutUsImg}
            alt="about us"
            width={500}
            height={500}
            className="absolute top-[-20%] left-[0%]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

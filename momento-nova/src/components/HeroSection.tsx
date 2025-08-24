import Experiences from "@/components/Experiences";
import Image from "next/image";
import corporateImg from "@/../public/assets/images/corporate.png";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section-bg-gradient pt-20">
      <div className="text-white bg-[#b050fe]">
        This is the Video Overlay part.
      </div>
      <div className="mt-7 p-5 flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-[400]">
          Discover our Experiences
        </h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-2">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>
      <div className="mt-5 flex justify-center items-center p-10">
        <div className="relative experiences-stick-gradient h-[700px] mt-28">
          <Experiences
            experienceContainerSide="right"
            containerTopPosition="top-[0px]"
            experienceHeading="Corporate Experiences & Executive Affairs"
            experienceDescription="From intimate board meetings to global summits, we manage high-level events with precision, confidentiality, and seamless coordination."
          />
          <Experiences
            experienceContainerSide="left"
            containerTopPosition="top-[150px]"
            experienceHeading="Nightfire Camping"
            experienceDescription="We design immersive brand activations that captivate audiences and build lasting impressions—from concept to curtain call."
          />
          <Experiences
            experienceContainerSide="right"
            containerTopPosition="top-[300px]"
            experienceHeading="Signature Celebrations & Private Affairs"
            experienceDescription="Whether it’s a cultural festivity, milestone anniversary, or a private gathering, each celebration is thoughtfully curated to reflect elegance and meaning."
          />
          <Experiences
            experienceContainerSide="left"
            containerTopPosition="top-[450px]"
            experienceHeading="Entertainment & Bespoke Performances"
            experienceDescription="Our curated entertainment includes world-class artists, cultural showcases, and personalized performances that elevate your event to an art form."
          />
          <Experiences
            experienceContainerSide="right"
            containerTopPosition="top-[600px]"
            experienceHeading="Sustainable"
            experienceDescription="Whether it’s a cultural festivity, milestone anniversary, or a private gathering, each celebration is thoughtfully curated to reflect elegance and meaning."
          />
        </div>
      </div>
      <div className="w-full h-[630px] mt-10">
        <Image
          src={corporateImg}
          alt="Corporate Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;

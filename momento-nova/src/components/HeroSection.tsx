import Experiences from "@/components/Experiences";
// import Image from "next/image";
// import corporateImg from "@/../public/assets/images/corporate.png";
import React from "react";
import ExperienceImageSection from "@/components/ExperienceImageSection";

const HeroSection = () => {
  return (
    <div className="hero-section-bg-gradient pt-0" id="home">
      <div className="w-full md:h-screen h-[75vh] relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/video/momentoNovaVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional overlay for text or controls */}
        <div className="absolute inset-0 bg-[#3530303b] bg-opacity-20 flex items-center justify-center">
          <div className="text-white text-center"></div>
        </div>
        {/* You can add overlay text here if needed */}
      </div>
      <div className="mt-7 p-5 flex flex-col justify-center items-center">
        <h1 className="gradient-text md:text-4xl text-2xl font-[400] md:pb-0 pb-2">
          Crafting Moments
        </h1>
        <p className="font-[400] md:text-sm text-xs text-gray-500 ml-2 pt-2 text-center">
          Moments designed with purpose- crafted, produced, and flawlessly
          delivered
        </p>
      </div>
      <div className="mt-5 flex justify-center items-center p-10" id="services">
        <div className="hidden md:block relative experiences-stick-gradient h-[700px] mt-28">
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
        <div className="md:hidden flex flex-col gap-10">
          <Experiences
            screenType="mobile"
            experienceHeading="Corporate Experiences & Executive Affairs"
            experienceDescription="From intimate board meetings to global summits, we manage high-level events with precision, confidentiality, and seamless coordination."
          />
          <Experiences
            screenType="mobile"
            experienceHeading="Nightfire Camping"
            experienceDescription="We design immersive brand activations that captivate audiences and build lasting impressions—from concept to curtain call."
          />
          <Experiences
            screenType="mobile"
            experienceHeading="Signature Celebrations & Private Affairs"
            experienceDescription="Whether it’s a cultural festivity, milestone anniversary, or a private gathering, each celebration is thoughtfully curated to reflect elegance and meaning."
          />
          <Experiences
            screenType="mobile"
            experienceHeading="Entertainment & Bespoke Performances"
            experienceDescription="Our curated entertainment includes world-class artists, cultural showcases, and personalized performances that elevate your event to an art form."
          />
          <Experiences
            screenType="mobile"
            experienceHeading="Sustainable"
            experienceDescription="Whether it’s a cultural festivity, milestone anniversary, or a private gathering, each celebration is thoughtfully curated to reflect elegance and meaning."
          />
        </div>
      </div>
      <div className="w-3/4 mx-auto my-10 hidden md:block">
        <hr />
      </div>
      <div className="w-full md:h-[630px] h-[200px] mt-10">
        <ExperienceImageSection />
      </div>
    </div>
  );
};

export default HeroSection;

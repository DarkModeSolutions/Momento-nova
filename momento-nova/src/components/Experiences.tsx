import React from "react";
import { PiCursorFill } from "react-icons/pi";

const Experiences = ({
  experienceContainerSide,
  containerTopPosition,
  experienceHeading,
  experienceDescription,
  screenType = "desktop",
}: {
  experienceContainerSide?: string;
  containerTopPosition?: string;
  experienceHeading: string;
  experienceDescription: string;
  screenType?: "mobile" | "desktop";
}) => {
  return screenType === "desktop" ? (
    <div className={`absolute w-[200px] h-[100px] ${containerTopPosition}`}>
      <div className="relative h-full w-full">
        {/* dot */}
        <div
          className={`absolute rounded-full bg-[#8F03EE] w-[20px] aspect-square top-0 left-[-5.5%]`}
        ></div>
        {/* dashed line */}
        <div
          className={`absolute border-t-2 border-dashed border-[#FD15DA] w-[40px] top-[9%] ${experienceContainerSide === "left" ? "left-[7%]" : "right-[108%]"}`}
        ></div>
        {/* cursor icon */}
        <div
          className={`${experienceContainerSide === "left" ? "rotate-[135deg]" : "rotate-[315deg]"} absolute top-[1.8%] ${experienceContainerSide === "left" ? "left-[28%]" : "right-[130%]"} text-[#8F03EE]`}
        >
          <PiCursorFill />
        </div>
        {/* experiences */}
        <div
          className={`absolute top-[-100%] ${experienceContainerSide === "left" ? "left-[40%]" : "right-[143%]"}`}
        >
          <div
            className={`${experienceContainerSide === "left" ? "experiences-outer-border-left" : "experiences-outer-border-right"} p-4 rounded-lg text-white`}
          >
            <div className="experiences-desc p-3 h-[200px] w-[450px]">
              <h4 className="font-semibold text-3xl">{experienceHeading}</h4>
              <p className="font-medium text-sm mt-3 text-gray-500">
                {experienceDescription}
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        {/* dashed line */}
        {/* <div className="absolute border-t-2 border-dashed border-[#FD15DA] w-[40px] top-[9%] right-[108%]"></div> */}
        {/* cursor icon */}
        {/* <div className="rotate-[315deg] absolute top-[1.8%] right-[130%] text-[#8F03EE]">
          <PiCursorFill />
        </div> */}
        {/* experiences */}
        {/* <div className="absolute top-[-100%] right-[143%]">
          <div className="experiences-outer-border-right p-4 rounded-lg text-white">
            <div className="experiences-desc p-3 h-[200px] w-[450px]">
              <h4 className="font-semibold text-3xl">Some Heading</h4>
              <p className="font-medium text-sm mt-2">Some desc</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  ) : (
    <div className="experiences-desc p-3">
      <h4 className="font-semibold text-3xl text-[#ffffff9d]">
        {experienceHeading}
      </h4>
      <p className="font-medium text-sm mt-3 text-gray-500">
        {experienceDescription}
      </p>
    </div>
  );
};

export default Experiences;

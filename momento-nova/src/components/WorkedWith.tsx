import Image, { StaticImageData } from "next/image";
import React from "react";

const WorkedWith = ({ img, alt }: { img: StaticImageData; alt: string }) => {
  return (
    <div className="border-[#ffffff46] border-solid border p-4 rounded-3xl flex justify-center items-center">
      <Image src={img} alt={alt} className="w-[150px] h-[50px]" />
    </div>
  );
};

export default WorkedWith;

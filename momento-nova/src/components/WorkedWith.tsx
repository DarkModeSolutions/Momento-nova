import Image, { StaticImageData } from "next/image";
import React from "react";

const WorkedWith = ({
  img,
  alt,
  height,
  width,
}: {
  img: StaticImageData;
  alt: string;
  height: string;
  width: string;
}) => {
  return (
    <div className="border-none md:border-[#ffffff46] md:border-solid border p-4 rounded-3xl flex justify-center items-center">
      <Image src={img} alt={alt} className={`${width} ${height}`} />
    </div>
  );
};

export default WorkedWith;

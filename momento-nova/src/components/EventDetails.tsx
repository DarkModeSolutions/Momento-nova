import Image from "next/image";
import React from "react";

const EventDetails = ({
  img,
  title,
  desc,
  id,
  alt,
  screenType = "desktop",
}: {
  img: string;
  title: string;
  desc: string;
  id?: number;
  alt: string;
  screenType?: "mobile" | "desktop";
}) => {
  return screenType === "desktop" ? (
    <div
      className={`p-5 w-full ${id != 1 && id != 2 ? "border-t" : ""} border-b border-black ${id! % 2 == 0 ? "border-l" : "border-r"}`}
    >
      <div className="w-full relative aspect-video">
        <Image src={img} alt={alt} fill className="object-cover rounded" />
      </div>
      <div className="text-white mt-4">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-[#989a9e] font-normal text-xs">{desc}</p>
      </div>
    </div>
  ) : (
    <div className={`p-5 w-full`}>
      <div className="w-full relative aspect-video">
        <Image src={img} alt={alt} fill className="object-cover rounded" />
      </div>
      <div className="text-white mt-4">
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-[#989a9e] font-normal text-xs">{desc}</p>
      </div>
    </div>
  );
};

export default EventDetails;

"use client";

import React, { useEffect, useMemo, useState } from "react";
import corporateImg from "@/../public/assets/images/corporate.png";
import corporateImgVertical from "@/../public/assets/images/corporateVertical.png";
import weddingImg from "@/../public/assets/images/wedding.png";
import weddingImgVertical from "@/../public/assets/images/weddingVertical.png";
import productLaunchImg from "@/../public/assets/images/productLaunch.png";
import productLaunchImgVertical from "@/../public/assets/images/productLaunchVertical.png";
import Image from "next/image";

const ExperienceImageSection = () => {
  const images = useMemo(
    () => [
      {
        vertical: {
          img: corporateImgVertical,
          alt: "Corporate Vertical Image",
        },
        horizontal: {
          img: corporateImg,
          alt: "Corporate Image",
        },
      },
      {
        vertical: {
          img: weddingImgVertical,
          alt: "Wedding Vertical Image",
        },
        horizontal: {
          img: weddingImg,
          alt: "Wedding Image",
        },
      },
      {
        vertical: {
          img: productLaunchImgVertical,
          alt: "Product Launch Vertical Image",
        },
        horizontal: {
          img: productLaunchImg,
          alt: "Product Launch Image",
        },
      },
    ],
    []
  );

  const [imageShown, setImageShown] = useState(images[0].horizontal);
  const [verticalImagesShown, setVerticalImagesShown] = useState(
    images.filter((img) => img.horizontal.img.src !== imageShown.img.src)
  );

  useEffect(() => {
    setVerticalImagesShown(
      images.filter((img) => img.horizontal.img.src !== imageShown.img.src)
    );
  }, [imageShown, verticalImagesShown, images]);
  return (
    <div className="w-full h-full flex">
      <div className="w-[33%] h-full flex gap-0 justify-between">
        {verticalImagesShown.map((img, index) => (
          <Image
            src={img.vertical.img}
            key={index}
            alt={img.vertical.alt}
            className="flex-1 h-full object-cover"
            onClick={() => setImageShown(img.horizontal)}
          />
        ))}
      </div>
      <div className="w-[67%] h-full">
        <Image
          src={imageShown.img}
          alt={imageShown.alt}
          className="w-full h-full object-cover hidden md:block"
        />
        <Image
          src={imageShown.img}
          alt={imageShown.alt}
          className="w-full h-full block md:hidden"
        />
      </div>
    </div>
  );
};

export default ExperienceImageSection;

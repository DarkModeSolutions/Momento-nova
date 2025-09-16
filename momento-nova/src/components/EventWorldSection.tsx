"use client";

import React from "react";
import img1 from "@/../public/assets/images/eventImg1.png";
import img2 from "@/../public/assets/images/eventImg2.png";
import img3 from "@/../public/assets/images/eventImg3.png";
import img4 from "@/../public/assets/images/eventImg4.png";
import EventDetails from "@/components/EventDetails";

const EventWorldSection = () => {
  const events = [
    {
      id: 1,
      img: img1,
      alt: "Event Image 1",
      title: "Mars Exploration: Unveiling Alien Landscapes",
      desc: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      id: 2,
      img: img2,
      alt: "Event Image 2",
      title: "Blockchain Explained: A Revolution in Finance",
      desc: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      id: 3,
      img: img3,
      alt: "Event Image 3",
      title: "Breaking the Silence: Mental Health Awareness in the Workplace",
      desc: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
    },
    {
      id: 4,
      img: img4,
      alt: "Event Image 4",
      title: "Revolutionizing Investment Strategies",
      desc: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
    },
  ];

  return (
    <div className="p-5 gradient-radial" id="blog">
      <div className="mt-5 flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-[400]">
          Inside the Event World
        </h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-2">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>
      <div className="mt-4 p-5 flex justify-center items-center">
        <div className="hidden md:block">
          <div className="grid grid-cols-2">
            {events.map((event) => (
              <EventDetails
                key={event.id}
                id={event.id}
                img={event.img.src}
                title={event.title}
                desc={event.desc}
                alt={event.alt}
              />
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <div className="grid grid-cols-1">
            {events.map((event) => (
              <EventDetails
                key={event.id}
                id={event.id}
                img={event.img.src}
                title={event.title}
                desc={event.desc}
                alt={event.alt}
                screenType="mobile"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventWorldSection;

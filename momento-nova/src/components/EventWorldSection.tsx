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
      title: "Corporate gatherings by Momento Nova: ",
      desc: "Agenda design, stage/scenic, AV & hybrid streaming, registration, speaker management, and hospitality",
    },
    {
      id: 2,
      img: img2,
      alt: "Event Image 2",
      title: "Bespoke wedding planning & design: ",
      desc: "Concepts, décor, stage, AV, timelines, and on-site management for effortless, unforgettable “I do’s.”",
    },
    {
      id: 3,
      img: img3,
      alt: "Event Image 3",
      title: "Corporate Gala",
      desc: "Awards nights, brand milestones, annual dinners—full-service planning and production that elevates sponsors, speakers, and guest experience.",
    },
    {
      id: 4,
      img: img4,
      alt: "Event Image 4",
      title: "From Idea to Impact",
      desc: "Objectives into experiences - content, staging, AV, and show control handled end-to-end",
    },
  ];

  return (
    <div className="p-5 hero-section-bg-gradient" id="blog">
      <div className="mt-5 flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-[400]">
          Inside the Event World
        </h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-4 md:pt-2 text-center">
          Step inside our world- real events, real moments, crafted by Momento
          Nova
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

"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Review from "@/components/Review";

const WallOfLoveSection = () => {
  const reviews = [
    {
      name: "Aarav Sharma",
      review:
        "Amazing experience! The team was very professional and everything was smooth.",
    },
    {
      name: "Neha Patel",
      review: "Loved the service. Quick, reliable, and worth every penny.",
    },
    {
      name: "Rahul Mehta",
      review:
        "Great attention to detail. I would definitely recommend to my friends.",
    },
    {
      name: "Simran Kaur",
      review:
        "Fantastic! Exceeded my expectations and was very well organized.",
    },
    {
      name: "Karthik Reddy",
      review: "The whole process was seamless. Super impressed.",
    },
    {
      name: "Ananya Iyer",
      review:
        "Very friendly and helpful staff. The overall quality was top-notch.",
    },
    {
      name: "Vikram Singh",
      review: "A great experience from start to finish. Worth it!",
    },
    {
      name: "Priya Nair",
      review: "Loved every bit of it. Would 100% recommend.",
    },
    {
      name: "Manish Kumar",
      review: "Smooth, efficient, and customer-friendly. Will come back again.",
    },
    {
      name: "Ritika Das",
      review:
        "Really well done. Felt very taken care of throughout the experience.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 0, stopOnInteraction: false, playOnInit: true })
  );

  return (
    <div className="gradient-radial pt-6">
      <div className="mt-5 flex flex-col justify-center items-center">
        <div className="p-3 rounded-4xl glass mb-3">
          <span className="gradient-text-love">Wall Of Love</span>
        </div>
        <h1 className="gradient-text text-4xl font-[400]">Loved by Thinkers</h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-2">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>
      <div className="w-full mt-16 px-5">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: false,
            slidesToScroll: 1,
          }}
        >
          <CarouselContent className="flex">
            {/* Duplicate the reviews for seamless looping */}
            {[...reviews, ...reviews].map((review, index) => (
              <CarouselItem
                className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                key={index}
              >
                <Review name={review.name} review={review.review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default WallOfLoveSection;

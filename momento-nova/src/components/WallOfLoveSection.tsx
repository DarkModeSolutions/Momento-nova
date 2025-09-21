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
      name: "Emma Johnson",
      review: "Loved the service. Quick, reliable, and worth every penny.",
    },
    {
      name: "Rahul Mehta",
      review:
        "Great attention to detail. I would definitely recommend to my friends.",
    },
    {
      name: "Sarah Williams",
      review:
        "Fantastic! Exceeded my expectations and was very well organized.",
    },
    {
      name: "Karthik Reddy",
      review: "The whole process was seamless. Super impressed.",
    },
    {
      name: "Jessica Chen",
      review:
        "Very friendly and helpful staff. The overall quality was top-notch.",
    },
    {
      name: "Vikram Singh",
      review: "A great experience from start to finish. Worth it!",
    },
    {
      name: "Michael Rodriguez",
      review: "Loved every bit of it. Would 100% recommend.",
    },
    {
      name: "Priya Nair",
      review: "Smooth, efficient, and customer-friendly. Will come back again.",
    },
    {
      name: "David Thompson",
      review:
        "Really well done. Felt very taken care of throughout the experience.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="hero-section-bg-gradient pt-6">
      <div className="mt-5 flex flex-col justify-center items-center">
        <div className="p-3 rounded-4xl glass mb-3">
          <span className="gradient-text-love">Wall Of Love</span>
        </div>
        <h1 className="gradient-text text-4xl font-[400] md:pb-0 pb-2">
          Loved by Thinkers
        </h1>
      </div>
      <div className="w-full mt-16 px-5">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={() => plugin.current.stop()}
          onMouseLeave={() => plugin.current.play()}
        >
          <CarouselContent className="flex gap-6">
            {reviews.map((review, index) => (
              <CarouselItem
                className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-6"
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

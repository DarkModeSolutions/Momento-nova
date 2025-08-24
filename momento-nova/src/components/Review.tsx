import React from "react";

const Review = ({ name, review }: { name: string; review: string }) => {
  return (
    <div className="p-4 border-b border-gray-200 w-full h-[200px] glass rounded-2xl">
      <h3 className="font-semibold text-[#ffffff83]">{name}</h3>
      <p className="text-[#000000]">{review}</p>
    </div>
  );
};

export default Review;

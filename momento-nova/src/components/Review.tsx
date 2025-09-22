import React from "react";

const Review = ({ name, review }: { name: string; review: string }) => {
  return (
    <div className="p-4 border-b border-gray-200 w-full h-[200px] glass rounded-2xl">
      <h3 className="font-semibold md:text-[#ffffff83] text-[#ffffffd7]">
        {name}
      </h3>
      <p className="md:text-gray-500 text-[#979696] md:mt-0 mt-2">{review}</p>
    </div>
  );
};

export default Review;

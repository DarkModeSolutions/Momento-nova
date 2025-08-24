import Link from "next/link";
import React from "react";

const MenuComponent = ({
  textContent,
  linkTo,
}: {
  textContent: string;
  linkTo: string;
}) => {
  return (
    <div className="mb-7 w-2/5 bottom-gradient-menu-item-border flex justify-center items-center pb-4">
      <Link className="w-full text-center block text-2xl" href={linkTo}>
        {textContent}
      </Link>
    </div>
  );
};

export default MenuComponent;

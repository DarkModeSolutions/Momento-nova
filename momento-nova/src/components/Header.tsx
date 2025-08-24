"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { XIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import logoImg from "@/../public/assets/images/logo.png";
import Image from "next/image";
import MenuComponent from "@/components/MenuComponent";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Apply glass effect after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${isScrolled ? "glass inner-shadow" : ""} p-3 pl-10 fixed top-0 z-50 transition-all duration-300 ease-in-out flex items-center gap-6 w-full`}
    >
      <Sheet>
        <SheetTrigger
          onClick={() => {
            console.log("Sheet opened");
          }}
        >
          <GiHamburgerMenu className="cursor-pointer text-white" />
        </SheetTrigger>
        <SheetContent className="glass inner-shadow p-6 text-white" side="left">
          <div className="flex items-center gap-20 pl-6">
            <SheetClose>
              <XIcon
                className="cursor-pointer"
                width={20}
                height={20}
                color="white"
              />
            </SheetClose>
            <div className="">
              <Image src={logoImg} alt="logo" width={100} height={100} />
            </div>
          </div>
          <div className="mt-2 flex flex-col justify-center items-center">
            <MenuComponent textContent="About Us" linkTo="/about-us" />
            <MenuComponent textContent="Services" linkTo="#" />
            <MenuComponent textContent="Portfolio" linkTo="#" />
            <MenuComponent textContent="Blog" linkTo="#" />
          </div>
        </SheetContent>
      </Sheet>
      <div className="">
        <Image
          src={logoImg}
          alt="logo"
          style={{ width: "75px", height: "50px" }}
        />
      </div>
    </div>
  );
};

export default Header;

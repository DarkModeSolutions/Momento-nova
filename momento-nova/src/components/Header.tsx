"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React, { useState, useEffect } from "react";

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
      className={`${isScrolled ? "glass inner-shadow" : ""} p-3 sticky top-0 z-50 transition-all duration-300 ease-in-out`}
    >
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">Some Content</SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;

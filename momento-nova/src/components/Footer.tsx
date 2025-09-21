"use client";

import Image from "next/image";
import astronautImage from "@/../public/assets/images/astronaut-sitting.png";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const [currentPath, setCurrentPath] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <div
      className={`${
        currentPath === "/about-us"
          ? "hidden"
          : "gradient-radial px-3 md:pt-0 pt-7"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="gradient-text text-4xl font-[400]">Get in Touch</h1>
        <p className="font-[400] text-sm text-gray-500 ml-2 pt-2">
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>
      </div>
      <div className="mt-6 p-4 glass md:flex hidden justify-between items-center rounded-[10px]">
        <div className="p-4 text-white w-3/5">
          <h3>Let&apos;s connect constellations</h3>
          <p>
            Reach out and let the magic of collaboration illuminate our skies.
          </p>
          <form className="flex flex-col gap-3 w-full pt-6">
            <div className="flex justify-between items-center gap-3">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                className=" rounded-[8px] glass-input p-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                className=" rounded-[8px] glass-input p-2 w-full"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" rounded-[8px] glass-input p-2"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="rounded-[8px] glass-input p-2"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className=" rounded-[8px] glass-input p-2"
            ></textarea>
            <button className="p-4 button-gradient">
              Send it to the Moon 🚀
            </button>
          </form>
        </div>
        <div className="w-2/5 h-auto rounded-[12px] relative">
          <Image
            src={astronautImage}
            alt="Astronaut Sitting"
            className="rounded-[12px]"
          />
          <div className="absolute top-0 w-full h-full bg-gray-700 opacity-[40%] rounded-[12px]"></div>
          <p className=" absolute text-white text-sm bottom-[5%] w-4/5 right-[5%]">
            <q className="text-gray-400">
              If it doesn’t move people now, it won’t make history later.
            </q>
            <br /> - Karim Shokry
          </p>
        </div>
      </div>
      <div className="mt-6 p-4 glass md:hidden rounded-[10px]">
        <div className="p-4 text-white w-full">
          <h3>Let&apos;s connect constellations</h3>
          <p className="mt-3">
            Reach out and let the magic of collaboration illuminate our skies.
          </p>
          <form className="flex flex-col gap-3 w-full pt-6">
            {/* <div className="">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                className=" rounded-[8px] glass-input p-2"
              />
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                className=" rounded-[8px] glass-input p-2"
              />
            </div> */}
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              className=" rounded-[8px] glass-input p-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              className=" rounded-[8px] glass-input p-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className=" rounded-[8px] glass-input p-2"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="rounded-[8px] glass-input p-2"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className=" rounded-[8px] glass-input p-2"
            ></textarea>
            <button className="p-4 button-gradient">
              Send it to the Moon 🚀
            </button>
          </form>
        </div>
        <div className="w-full mt-3 h-auto rounded-[12px] relative">
          <Image
            src={astronautImage}
            alt="Astronaut Sitting"
            className="rounded-[12px]"
          />
          <div className="absolute top-0 w-full h-full bg-gray-700 opacity-[40%] rounded-[12px]"></div>
          <p className=" absolute text-white text-sm bottom-[5%] w-4/5 right-[5%]">
            <q className="text-gray-400">
              If it doesn’t move people now, it won’t make history later.
            </q>
            <br /> - Karim Shokry
          </p>
        </div>
      </div>
      <div className="mt-3 p-6 md:hidden">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-white font-[500] text-sm">
            <span className="">Product</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Features</li>
              <li className="text-[#ffffff80] font-[400]">Integration</li>
              <li className="text-[#ffffff80] font-[400]">Updates</li>
              <li className="text-[#ffffff80] font-[400]">FAQ</li>
              <li className="text-[#ffffff80] font-[400]">Pricing</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Company</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">About</li>
              <li className="text-[#ffffff80] font-[400]">Blog</li>
              <li className="text-[#ffffff80] font-[400]">Careers</li>
              <li className="text-[#ffffff80] font-[400]">Manifesto</li>
              <li className="text-[#ffffff80] font-[400]">Press</li>
              <li className="text-[#ffffff80] font-[400]">Contact</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Resources</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Examples</li>
              <li className="text-[#ffffff80] font-[400]">Community</li>
              <li className="text-[#ffffff80] font-[400]">Guides</li>
              <li className="text-[#ffffff80] font-[400]">Docs</li>
              <li className="text-[#ffffff80] font-[400]">Press</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Legal</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Privacy</li>
              <li className="text-[#ffffff80] font-[400]">Terms</li>
              <li className="text-[#ffffff80] font-[400]">Security</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4 justify-center items-center mt-10">
          <Link href="#" className="text-[#ffffff80] text-2xl">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[#ffffff80] text-2xl">
            <CiLinkedin />
          </Link>
        </div>
      </div>
      <div className="mt-3 p-6 hidden md:flex justify-between items-start">
        <div className="grid grid-cols-4 gap-4">
          <div className="text-white font-[500] text-sm">
            <span className="">Product</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Features</li>
              <li className="text-[#ffffff80] font-[400]">Integration</li>
              <li className="text-[#ffffff80] font-[400]">Updates</li>
              <li className="text-[#ffffff80] font-[400]">FAQ</li>
              <li className="text-[#ffffff80] font-[400]">Pricing</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Company</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">About</li>
              <li className="text-[#ffffff80] font-[400]">Blog</li>
              <li className="text-[#ffffff80] font-[400]">Careers</li>
              <li className="text-[#ffffff80] font-[400]">Manifesto</li>
              <li className="text-[#ffffff80] font-[400]">Press</li>
              <li className="text-[#ffffff80] font-[400]">Contact</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Resources</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Examples</li>
              <li className="text-[#ffffff80] font-[400]">Community</li>
              <li className="text-[#ffffff80] font-[400]">Guides</li>
              <li className="text-[#ffffff80] font-[400]">Docs</li>
              <li className="text-[#ffffff80] font-[400]">Press</li>
            </ul>
          </div>
          <div className="text-white font-[500] text-sm">
            <span className="">Legal</span>
            <ul
              className="flex flex-col gap-6 mt-5
            "
            >
              <li className="text-[#ffffff80] font-[400]">Privacy</li>
              <li className="text-[#ffffff80] font-[400]">Terms</li>
              <li className="text-[#ffffff80] font-[400]">Security</li>
            </ul>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/momentonova?igsh=MTRnMTVobWVwcGZyYQ=="
            className="text-[#ffffff80] text-2xl"
          >
            <FaInstagram />
          </Link>
          <Link href="#" className="text-[#ffffff80] text-2xl">
            <CiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

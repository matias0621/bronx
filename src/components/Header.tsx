"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="h-16 flex justify-between px-5 items-center aspect-auto relative z-10
    md:h-20
    "
    >
      <Image src={"/Bronx-negro.webp"} alt="Bronx" width={100} height={50} />

      <ul className="hidden text-[.8rem] text-blueDesing lg:flex">
        <li className="mx-2">
          <a href="#service">SERVICES</a>
        </li>
        <li className="mx-2">
          <a href="#about">ABOUT US</a>
        </li>
        <li className="mx-2">
          <a href="#contact">PRICE</a>
        </li>
        <li className="mx-2">
          <a href="#contact">FAQ</a>
        </li>
        <li className="mx-2">BLOG</li>
        <li className="mx-2">
          <a href="#contact">CONTACTS</a>
        </li>
        <li className="mx-2 text-white bg-blueDesing px-2 rounded-lg text-[0.7rem] flex justify-center items-center">
          <a href="#contact">UKR</a>
        </li>
      </ul>

      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />{" "}
        </svg>
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blueDesing
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 z-50`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="40"
            height="40"
            strokeWidth="1.25"
          >
            {" "}
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />{" "}
          </svg>
        </button>
        <ul className="text-white gap-y-4 flex flex-col text-xl mx-4 my-4">
          <li>
            <a href="#service">SERVICES</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#contact">PRICE</a>
          </li>
          <li>
            <a href="#contact">FAQ</a>
          </li>
          <li>BLOG</li>
          <li>
            <a href="#contact">CONTACTS</a>
          </li>
          <li>
            <a href="#contact">UKR</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

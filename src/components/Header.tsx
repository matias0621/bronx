"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-16 flex justify-between px-5 items-center aspect-auto">
      <Image src={"/Bronx-negro.png"} alt="Bronx" width={100} height={50} />

      <ul className="hidden">
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>PRICE</li>
        <li>FAQ</li>
        <li>BLOG</li>
        <li>CONTACTS</li>
        <li>UKR</li>
      </ul>

      <button onClick={() => setIsOpen(!isOpen)}>
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
          <path d="M4 18l16 0" />
          {" "}
        </svg>
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blueDesing
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500
        `}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="40"
            height="40"
            strokeWidth="1.25"
          >
            {" "}
            <path d="M18 6l-12 12">
            </path>
            <path d="M6 6l12 12">
            </path>
            {" "}
          </svg>
        </button>
        <ul>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>PRICE</li>
          <li>FAQ</li>
          <li>BLOG</li>
          <li>CONTACTS</li>
          <li>UKR</li>
        </ul>
      </div>
    </header>
  );
}

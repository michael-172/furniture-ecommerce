"use client";
import React, { useState } from "react";

export default function HamburgerToggle({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-8 h-8 flex flex-col justify-center items-center group"
      aria-label="Toggle Menu"
    >
      <span
        className={`absolute h-0.5 w-8 bg-black transform transition duration-200 ease-in-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-0.5 w-8 bg-black transition-all duration-200 ease-in-out ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-8 bg-black transform transition duration-200 ease-in-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        }`}
      />
    </button>
  );
}

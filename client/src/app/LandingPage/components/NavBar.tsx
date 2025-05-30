"use client";
import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="container mx-auto px-4 flex items-center justify-between py-6">
        <div className="flex gap-2 items-center ">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <p className="text-[#0B501E] font-bold">Gasless Gossip</p>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? <Menu /> : <X />}
        </button>

        {/* Desktop Link */}
        <ul className="hidden items-center gap-8 md:flex text-black text-base ">
          <Link href="#">
            Features
          </Link>
          <Link href="#">How it works</Link>
          <Link href="#">About</Link>
        </ul>

        {/* button */}
        <button className="hidden md:block bg-[#419057] text-white rounded-[1.25rem] text-center text-base font-semibold py-4 px-8">Connet</button>
      </nav>
    </header>
  );
};

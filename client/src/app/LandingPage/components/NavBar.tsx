'use client'
import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between px-10 py-6">
        <div className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <p className="font-bold text-[#0B501E]">Gasless Gossip</p>
        </div>
        <button
          className="cursor-pointer rounded-lg border border-[#419057] p-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <Menu /> : <X />}
        </button>

        {/* Desktop Link */}
        <ul className="hidden items-center gap-8 text-base text-black md:flex">
          <Link href="#key-features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#about">About</Link>
        </ul>

        {/* button */}
        <button className="cursor hidden rounded-[1.25rem] bg-[#419057] px-8 py-4 text-center text-base font-semibold text-white hover:bg-black hover:text-white md:block">
          Connect
        </button>
      </nav>
      {/* Mobile Dropdown */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col items-center gap-4 border p-4 pb-4">
          <Link href="#key-features" className="text-base text-black">
            Features
          </Link>
          <Link href="#how-it-works" className="text-base text-black">
            How it works
          </Link>
          <Link href="#about" className="text-base text-black">
            About
          </Link>
          <button className="cursor-pointer rounded-[1.25rem] bg-[#419057] px-8 py-4 text-center text-base font-semibold text-white hover:bg-black hover:text-white md:block">
            Connect
          </button>
        </ul>
      </div>
    </header>
  )
}

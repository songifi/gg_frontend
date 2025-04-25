"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export default function TargetAudience() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
  })

  const [userCount, setUserCount] = useState(100)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setUserCount(userCount + 1)
    setFormData({ name: "", phoneNumber: "" })
    alert("Thank you for your interest! You'll get early access soon.")
  }

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/StepSection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Target audience header */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="bg-[#1e1e5a] text-white rounded-[2.5rem] py-6 px-10 mb-2">
            <h2 className="text-xl font-medium text-center">Target audience</h2>
          <h3 className="text-[#C8F9D4] text-2xl md:text-3xl font-bold text-center">Who is this product built for?</h3>
          </div>
        </div>

        {/* Personas circle */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* First line: Arrow, Card, Arrow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-8">
            <div className="hidden md:flex justify-end items-center">
              <Image
                src="/curved arrow2.png"
                width={200}
                height={200}
                alt="Curved arrow"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="flex justify-center">
              <PersonaCard name="Paul Learner" role="Web3 Dev" bgColor="bg-[#d9f7d9]" />
            </div>
            <div className="hidden md:flex justify-start items-center">
              <Image
                src="/curved arrow1.png"
                width={200}
                height={200}
                alt="Curved arrow"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          </div>

          {/* Second line: Card, Text, Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-8">
            <div className="flex justify-center mb-8 md:mb-0">
              <PersonaCard name="Steve Woods" role="Freelancer" />
            </div>
            <div className="flex items-center justify-center mb-8 md:mb-0">
              <div className="text-center p-4">
                <p className="text-[#1e1e5a] text-xl font-bold">Built for Freelancers, DAOs and Crypto Communities</p>
              </div>
            </div>
            <div className="flex justify-center">
              <PersonaCard name="Paula Bean" role="Software Engineer" />
            </div>
          </div>

          {/* Third line: Arrow, Card, Arrow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div className="hidden md:flex justify-end items-center">
              <Image
                src="/curved arrow3.png"
                width={200}
                height={200}
                alt="Curved arrow"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
            <div className="flex justify-center">
              <PersonaCard name="Danny Wills" role="Mobile Dev" />
            </div>
            <div className="hidden md:flex justify-start items-center">
              <Image
                src="/curved arrow4.png"
                width={200}
                height={200}
                alt="Curved arrow"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          </div>
        </div>

        {/* Early birds section */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#1e1e5a] text-white rounded-4xl py-6 px-8 mb-2">
            <h2 className="text-lg text-center font-medium">Early Birds</h2>
          <h3 className="text-[#C8F9D4] text-2xl md:text-3xl font-medium text-center">Be part of it</h3>
          </div>
        </div>


        {/* Sign up form and NFT card */}
       <div className="max-w-6xl mx-auto">
        <div className="text-left mb-8">
          <p className="text-lg text-[#1F1D5D]">
            Sign up for free and experience <span className="font-bold">Gasless Gossip</span>
            <br />
            before it's available to the public
          </p>
        </div>
       <div className="flex flex-col md:flex-row items-end justify-center gap-6 max-w-6xl mx-auto">
          <div className="w-full md:w-[60%] bg-[#6b4d9c] rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-white/50 py-3 px-2 text-white placeholder-white/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/50 py-3 px-2 text-white placeholder-white/70 focus:outline-none"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b border-white/50 py-3 px-2 text-white placeholder-white/70 focus:outline-none"
                  required
                />
              </div>
              <div className="pt-4 relative top-12 mx-auto flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-white text-[#1F1D5D] border-2 border-[#1F1D5D] mx-auto rounded-full py-3 px-6 font-medium hover:bg-gray-100 transition-colors md:w-[50%]"
                >
                  REQUEST EARLY ACCESS
                </button>
              </div>
            </form>
          </div>

          <div className="md:relative md:right-16">
          
              <div className="h-full w-full flex items-center justify-center">
                <Image
                  src="/nft.png"
                  width={500}
                  height={500}
                  alt="NFT avatar with sunglasses"
                  className="object-cover"
                />
            </div>
          </div>
          {/* User counter */}
        <div className="flex items-end md:w-[19%] h-[100%] justify-end  mt-4">
          <div className="flex flex-col items-end gap-2">
            <span className="text-3xl font-bold text-[#1F1D5D]">{userCount}</span>
            <span className="text-xs text-[#1F1D5D]">USERS ALREADY JOINED</span>

          </div>
          <Image src="/Line 4.png" width={450} height={450} alt="line" className="object-cover w-0.5 h-32 ml-1" />
        </div>
        </div>

       </div>
      </div>
    </section>
  )
}

// Persona card component
function PersonaCard({ name, role, bgColor = "bg-white" }: { name: string; role: string; bgColor?: string }) {
  return (
    <div
      className={`${bgColor} rounded-xl p-4 md:p-6 shadow-md w-full max-w-[200px] md:w-64 flex flex-col items-center`}
    >
      <div className=" rounded-full w-16 h-16 md:w-24 md:h-24 mb-3 md:mb-4 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
          <Image
            src="/profilePic.png"
            width={64}
            height={64}
            alt={`${name} avatar`}
            className="object-cover"
          />
        </div>
      </div>
      <h4 className="font-bold text-base md:text-lg">{name}</h4>
      <p className="text-gray-600 text-sm md:text-base">{role}</p>
      <div className="mt-2">
        <Image src="/naija.png" width={24} height={16} alt="Nigerian flag" className="h-4 w-6" />
      </div>
    </div>
  )
}

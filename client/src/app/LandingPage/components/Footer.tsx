'use client'

import Image from 'next/image'
import { FaXTwitter, FaDiscord, FaTelegram, FaGithub } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className="mt-15 w-full bg-gradient-to-b from-[#FEFEFE] to-[#CDF3D8] text-black py-12 px-10 md:px-16">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start gap-10">

  
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image src="/Logo.png" alt="Gasless Gossip Logo" width={112} height={112} className="mb-4" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-[#0B501E] to-[#70DD8D] bg-clip-text text-transparent">
            Gasless <span>Gossip</span>
          </h1>
          <p className="text-sm mt-1 text-[#0E5723]">Chat. Gossip. Tip. No Gas Required</p>

    
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="X (Twitter)" className="hover:text-green-500">
              <FaXTwitter className="text-2xl" />
            </a>
            <a href="#" aria-label="Discord" className="hover:text-green-500">
              <FaDiscord className="text-2xl" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-green-500">
              <FaTelegram className="text-2xl" />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-green-500">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>

      
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">Features</h2>
          <p>Gasless Messaging</p>
          <p>Token Tipping</p>
          <p>Real Time Communication</p>
        </div>

       
        <div className="flex flex-col gap-2">
          <h2 className="font-bold mb-2">How it works</h2>
          <p>Connect Wallet</p>
          <p>Start Chatting Instantly</p>
          <p>Tip Friends and Gossip Freely</p>
        </div>
      </div>

  
      <div className="my-10 border-t border-green-200"></div>


      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© 2025 Gasless Gossip. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-green-500">Trademark Policy</a>
          <a href="#" className="hover:text-green-500">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

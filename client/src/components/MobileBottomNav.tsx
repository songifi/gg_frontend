import React from 'react'
import {
  House,
  MessagesSquare,
  WalletMinimal,
  Gem,
  UserRound,
} from 'lucide-react'

export default function MobileBottomNav() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 flex h-16 w-full items-center justify-around border-t bg-white md:hidden">
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <House />
        Home
      </button>
      <button className="flex flex-col items-center text-xs text-green-700 focus:outline-none">
        <MessagesSquare />
        Chats
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <WalletMinimal />
        Wallet
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <Gem />
        NFTS
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <UserRound />
        Profile
      </button>
    </div>
  )
}

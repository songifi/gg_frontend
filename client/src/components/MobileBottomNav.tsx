'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  House,
  MessagesSquare,
  WalletMinimal,
  Gem,
  UserRound,
} from 'lucide-react'

const navRoutes = [
  { label: 'Home', icon: House, href: '/app/home' },
  { label: 'Chats', icon: MessagesSquare, href: '/app/chats' },
  { label: 'Wallet', icon: WalletMinimal, href: '/app/wallet' },
  { label: 'NFTS', icon: Gem, href: '/app/nfts' },
  { label: 'Profile', icon: UserRound, href: '/app/profile' },
]

export default function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 flex h-16 w-full items-center justify-around border-t bg-white md:hidden">
      {navRoutes.map(({ label, icon: Icon, href }) => {
        const isActive = pathname === href

        return (
          <Link
            key={label}
            href={href}
            className={`flex flex-col items-center text-xs focus:outline-none ${
              isActive ? 'text-green-700' : 'text-gray-400 focus:text-green-700'
            }`}
          >
            <Icon />
            {label}
          </Link>
        )
      })}
    </div>
  )
}

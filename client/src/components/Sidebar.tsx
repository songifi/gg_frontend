'use client'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const sidebarItems = [
  { icon: '/homeIconGrey.svg', label: 'Home' },
  { icon: '/chatIconWhite.svg', label: 'Chats', active: true },
  { icon: '/wallet.svg', label: 'Wallet' },
  { icon: '/nftIcon.svg', label: 'NFTs' },
  { icon: '/profileIcon.svg', label: 'Profile' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="flex h-full w-56 flex-col justify-between border-r bg-white px-4 py-6">
      <div>
        <div className="mb-10 pl-2 text-2xl font-bold">LOGO</div>
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === `/app/${item.label.toLowerCase()}`
            return (
              <Link
                href={`/app/${item.label.toLowerCase()}`}
                key={item.label}
                className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={22}
                  height={22}
                />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

import Image from 'next/image'
import { LogOut } from 'lucide-react'

const sidebarItems = [
  { icon: '/homeIconGrey.svg', label: 'Home' },
  { icon: '/chatIconWhite.svg', label: 'Chats', active: true },
  { icon: '/wallet.svg', label: 'Wallet' },
  { icon: '/nftIcon.svg', label: 'NFTs' },
  { icon: '/profileIcon.svg', label: 'Profile' },
]

export default function Sidebar() {
  return (
    <aside className="flex w-56 flex-col justify-between border-r bg-white px-4 py-6">
      <div>
        <div className="mb-10 pl-2 text-2xl font-bold">LOGO</div>
        <nav className="flex flex-col gap-2">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 ${item.active ? 'bg-gray-100 font-semibold' : ''}`}
            >
              <Image src={item.icon} alt={item.label} width={22} height={22} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100">
        <LogOut />
        <span>Log Out</span>
      </div>
    </aside>
  )
}

import Image from 'next/image'
import { BellDot } from 'lucide-react'

export default function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div></div>
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <BellDot size={20} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/avatar.png"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium">User 1234</span>
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  )
}

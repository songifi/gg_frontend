import React from 'react'

export default function MobileBottomNav() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-10 flex h-16 w-full items-center justify-around border-t bg-white md:hidden">
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        Home
      </button>
      <button className="flex flex-col items-center text-xs text-green-700 focus:outline-none">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8z" />
        </svg>
        Chats
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
        Wallet
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M16 3v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3" />
        </svg>
        NFTS
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400 focus:text-green-700 focus:outline-none">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
        </svg>
        Profile
      </button>
    </div>
  )
}

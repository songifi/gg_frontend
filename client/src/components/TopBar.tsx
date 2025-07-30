'use client'
import Image from 'next/image'
import { BellDot, Wallet } from 'lucide-react'
import WalletModal from './modals/WalletModal'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import AccountModal from './modals/AccountModal'
import { useAccount } from '@starknet-react/core'

export default function TopBar() {
  const { address } = useAccount()
  const [showWalletModal, setShowWalletModal] = useState(false)
  const [showAccountModal, setShowAccountModal] = useState(false)
  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }
  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-white px-8">
        <div></div>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <BellDot size={20} strokeWidth={1.5} />
          </button>
          {!address ? (
            <button
              onClick={() => setShowWalletModal(true)}
              className="flex items-center gap-2 rounded-full border px-5 py-2"
            >
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </button>
          ) : (
            <button
              className="flex items-center gap-2 rounded-full border px-3 py-2"
              onClick={() => setShowAccountModal(true)}
            >
              <Image
                src="/avatar.png"
                alt="User"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm font-medium">
                {shortenAddress(address)}
              </span>
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
            </button>
          )}
        </div>
      </header>

      {showWalletModal &&
        createPortal(
          <WalletModal onClose={() => setShowWalletModal(false)} />,
          document.body,
        )}

      {showAccountModal &&
        createPortal(
          <AccountModal onClose={() => setShowAccountModal(false)} />,
          document.body,
        )}
    </>
  )
}

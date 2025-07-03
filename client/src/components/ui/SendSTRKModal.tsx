import SendSTRKTab from './SendSTRKTab'
import SendNFTTab from './SendNFTTab'
import Image from 'next/image'
import { useState } from 'react'

// Modal Header
function ModalHeader({ onClose }: { onClose: () => void }) {
  return (
    <>
      <button
        className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-gray-600"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <h2 className="mb-6 text-lg font-semibold text-gray-900">Send</h2>
    </>
  )
}

// Modal Tabs
function ModalTabs({
  tab,
  setTab,
}: {
  tab: 'strk' | 'nft'
  setTab: (t: 'strk' | 'nft') => void
}) {
  return (
    <div className="mb-6 flex border-b border-gray-200">
      <button
        className={`px-4 pb-2 font-medium hover:cursor-pointer ${tab === 'strk' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-400'}`}
        onClick={() => setTab('strk')}
      >
        Send STRK
      </button>
      <button
        className={`px-4 pb-2 font-medium hover:cursor-pointer ${tab === 'nft' ? 'border-b-2 border-green-700 text-green-700' : 'text-gray-400'}`}
        onClick={() => setTab('nft')}
      >
        Send NFT
      </button>
    </div>
  )
}

// Recipient Info
function RecipientInfo() {
  return (
    <div className="mt-10 mb-10 flex flex-col items-center">
      <Image
        src="/anna.png"
        alt="Anna"
        width={64}
        height={64}
        className="mb-2 rounded-full"
      />
      <span className="text-lg font-semibold text-green-700">Anna</span>
    </div>
  )
}

interface SendSTRKModalProps {
  onClose: () => void
}

export default function SendSTRKModal({ onClose }: SendSTRKModalProps) {
  const [tab, setTab] = useState<'strk' | 'nft'>('strk')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="relative flex h-full w-full flex-col rounded-none bg-white p-4 shadow-xl md:ml-200 md:h-[760px] md:w-[580px] md:rounded-2xl md:p-8">
        <ModalHeader onClose={onClose} />
        <ModalTabs tab={tab} setTab={setTab} />
        <RecipientInfo />
        {tab === 'strk' ? <SendSTRKTab /> : <SendNFTTab />}
        <button className="mt-auto rounded-full bg-green-800 py-3 text-lg font-semibold text-white transition-colors hover:bg-green-900">
          Send
        </button>
      </div>
    </div>
  )
}

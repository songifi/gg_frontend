import { Camera, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import SendSTRKModal from './SendSTRKModal'

interface AttachmentModalProps {
  onClose: () => void
}

export default function AttachmentModal({ onClose }: AttachmentModalProps) {
  const [showSendSTRK, setShowSendSTRK] = useState(false)

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs">
        <div className="relative mt-80 flex w-72 flex-col gap-4 rounded-2xl bg-white p-8 shadow-xl">
          <button
            className="absolute top-3 right-3 text-xl text-gray-400 hover:cursor-pointer hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setShowSendSTRK(true)
            }}
          >
            <Image
              src="/starknetIconMd.png"
              alt="STRK"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>STRK</span>
          </button>
          <button className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:cursor-pointer hover:bg-gray-100">
            <Image
              src="/nftIcon.svg"
              alt="NFTs"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>NFTs</span>
          </button>
          <button className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:cursor-pointer hover:bg-gray-100">
            <Camera size={20} className="text-green-700" />
            <span>Camera</span>
          </button>
          <button className="flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:cursor-pointer hover:bg-gray-100">
            <ImageIcon size={20} className="text-green-700" />
            <span>Photos</span>
          </button>
        </div>
      </div>
      {showSendSTRK && <SendSTRKModal onClose={() => setShowSendSTRK(false)} />}
    </>
  )
}

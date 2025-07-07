import { Camera, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

export default function AttachmentModalMobile({
  onClose,
  onSendSTRK,
}: {
  onClose: () => void
  onSendSTRK: () => void
}) {
  return (
    <div className="relative flex w-full max-w-sm flex-col gap-2 rounded-t-2xl bg-none p-4 pb-8 shadow-xl md:hidden">
      <button
        className="absolute top-3 right-3 text-2xl text-gray-400 hover:cursor-pointer hover:text-gray-600"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        className="flex items-center gap-4 rounded-full px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100"
        onClick={onSendSTRK}
      >
        <Image
          src="/starknetIconMd.png"
          alt="STRK"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span>STRK</span>
      </button>
      <button className="flex items-center gap-4 rounded-full px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100">
        <Image
          src="/nftIcon.svg"
          alt="NFTs"
          width={32}
          height={32}
          className="h-8 w-8"
        />
        <span>NFTs</span>
      </button>
      <button className="flex items-center gap-4 rounded-full px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100">
        <Camera size={32} className="text-green-700" />
        <span>Camera</span>
      </button>
      <button className="flex items-center gap-4 rounded-full px-4 py-3 text-lg font-medium transition-colors hover:bg-gray-100">
        <ImageIcon size={32} className="text-green-700" />
        <span>Photos</span>
      </button>
    </div>
  )
}

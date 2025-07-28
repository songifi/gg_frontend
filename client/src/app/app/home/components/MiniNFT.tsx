'use client'
import Image from 'next/image'

interface miniNft {
  id: string
  img: string
  price: string
  isSelected: boolean
  selectionIndex?: number
  onSelect: (id: string) => void
  className?: string
}
const MiniNFT = ({
  id,
  img,
  price,
  isSelected,
  selectionIndex,
  onSelect,
  className = '',
}: miniNft) => {
  return (
    <div
      className={`relative inline-block h-[125.25px] w-[125.25px] cursor-pointer overflow-hidden ${className}`}
      onClick={() => onSelect(id)}
    >
      <Image src={img} alt="img" fill className="object-cover" />
      <h1 className="absolute top-1 left-1 z-10 m-0 rounded-[1000px] border-[1px] border-[#C8F9D4] bg-[#EDFDF1] px-1.5 py-0.75 font-sans text-[9.3px] font-medium text-[#0B501E]">
        {price}
      </h1>
      {isSelected && (
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: '#0B501E4D' }}
        />
      )}
      {isSelected && selectionIndex !== undefined && (
        <div className="absolute right-1 bottom-1 z-10 flex h-[22px] w-[22px] items-center justify-center rounded-full border-[2px] border-white bg-[#0B501E] font-sans text-[13.96px] font-medium text-white">
          {selectionIndex}
        </div>
      )}
    </div>
  )
}
export default MiniNFT

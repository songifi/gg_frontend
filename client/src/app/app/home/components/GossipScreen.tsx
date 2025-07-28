import { useEffect, useState } from 'react'
import { X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import MiniNFT from './MiniNFT'

interface Profile {
  name: string
  img: string
  onClose: () => void
}

const GossipScreen = ({ name, img, onClose }: Profile) => {
  useEffect(() => {
    const originalStyle = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const sendMenu = [{ name: 'Send STRK' }, { name: 'Send NFT' }]

  const [selected, setSelected] = useState('Send NFT')
  const [selectedNFTs, setSelectedNFTs] = useState<string[]>([])

  const handleSelect = (id: string) => {
    setSelectedNFTs((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const miniNfts = [
    '/miniNft1.jpg',
    '/miniNft2.jpg',
    '/miniNft3.jpg',
    '/miniNft4.jpg',
    '/miniNft5.jpg',
    '/miniNft6.jpg',
    '/miniNft7.jpg',
    '/miniNft8.jpg',
  ]

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-[2px]">
      <div className="flex min-h-screen items-start justify-end">
        <div className="my-8 mr-8 w-[580px] rounded-[16px] border-[1.5px] border-[#DBE2E8] bg-white p-8">
          <div className="flex justify-end">
            <X
              size={28}
              className="cursor-pointer rounded-full border-[1px] border-[#DBE1E7] p-1"
              onClick={onClose}
            />
          </div>
          <div className="py-4">
            <h1 className="font-sans text-[24px] font-semibold">Send</h1>
          </div>
          <div className="flex h-[54px] w-full border-b-[1px] border-[#E4E7EC]">
            {sendMenu.map((item) => (
              <div
                key={item.name}
                className={`p-4 ${selected === item.name ? 'border-b-[1px] border-b-[#0B501E] font-medium text-[#0B501E]' : 'text-[#667185]'}`}
              >
                <div
                  onClick={() => setSelected(item.name)}
                  className="cursor-pointer"
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="flex justify-center py-4">
              <Image
                src={img}
                alt="img"
                width={80}
                height={80}
                className="rounded-full border-[5px] border-[#F4F4F2]"
              />
            </div>
            <div className="text-center font-sans text-[24px] font-medium text-[#0B501E]">
              {name}
            </div>
          </div>
          {selected === 'Send NFT' && (
            <div>
              <div className="pt-12">
                <div className="rounded-t-2xl border-b-[0.5px] border-b-[#DBE1E7] bg-[#F7F8F9] p-4 text-center font-sans text-[14px] font-semibold text-[#0B501E]">
                  Your NFTs (24)
                </div>
                <div className="grid grid-cols-4 grid-rows-2 gap-[4px]">
                  {miniNfts.map((img, i) => (
                    <MiniNFT
                      key={img}
                      id={img}
                      img={img}
                      price="$24.89"
                      isSelected={selectedNFTs.includes(img)}
                      selectionIndex={
                        selectedNFTs.includes(img)
                          ? selectedNFTs.indexOf(img) + 1
                          : undefined
                      }
                      onSelect={handleSelect}
                      className={
                        i === 4
                          ? 'rounded-bl-[8px]'
                          : i === 7
                            ? 'rounded-br-[8px]'
                            : ''
                      }
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center pt-28">
                <button className="h-[72px] w-full cursor-pointer rounded-[1000px] bg-[#0B501E] px-2 py-6 font-sans font-medium text-[#FFFFFF]">
                  Send
                </button>
              </div>
            </div>
          )}
          {selected === 'Send STRK' && (
            <div>
              <div className="pt-18">
                <div className="flex h-[56px] items-center rounded-lg border-[0.5px] border-[#DBE1E8] bg-[#F9FAFA]">
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="flex-1 rounded-l-lg bg-transparent px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none"
                  />
                  <div className="flex h-[56px] cursor-pointer items-center gap-1 rounded-r-lg border-[0.5px] border-[#DBE1E8] bg-[#FFFFFF] pr-3 pl-4 text-[12px] font-semibold text-[#090909]">
                    <h1>STRK</h1>
                    <div>
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <textarea
                  placeholder="Note"
                  rows={6}
                  className="w-full resize-none rounded-lg border-[0.5px] border-[#DBE1E8] bg-[#F9FAFA] px-4 py-2 text-[12px] text-black placeholder:text-gray-500 focus:outline-none"
                />
              </div>
              <div className="flex justify-center pt-48">
                <button className="h-[72px] w-full cursor-pointer rounded-[1000px] bg-[#0B501E] px-2 py-6 font-sans font-medium text-[#FFFFFF]">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GossipScreen

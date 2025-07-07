'use client'
import Navbar from '@/components/Navbar'
import GossipScreen from './components/GossipScreen'
import NFT from './components/NFT'
import Image from 'next/image'
import { Eye, EyeOff, ArrowLeft, Plus, Search } from 'lucide-react'
import { useState } from 'react'
const HomePage = () => {
  const [showBalance, setShowBalance] = useState(true)
  const people = [
    { name: 'Alexis', img: '/alexis.png' },
    { name: 'Ralph', img: '/ralph.png' },
    { name: 'Victor', img: '/victor.png' },
    { name: 'Anna', img: '/anna.png' },
    { name: 'Jakub', img: '/alexis.png' },
  ]
  const [gossipScreen, setGossipScreen] = useState(false)
  const [seeAllNFT, setSeeAllNFT] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<{
    name: string
    img: string
  } | null>(null)

  return (
    <div>
      <Navbar />
      {seeAllNFT ? (
        <div className="w-[992px] p-16">
          <div
            className="flex cursor-pointer items-center gap-2"
            onClick={() => setSeeAllNFT(false)}
          >
            <ArrowLeft
              size={26}
              className="rounded-[4px] border-[1px] border-[#DBE2E8] p-1"
            />
            <div className="font-sans font-medium text-[#090909]">Go back</div>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-between">
              <div className="font-sans text-[32px] font-semibold text-[#08090A]">
                ALL NFTs
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <div className="relative w-[280px]">
                    <input
                      type="text"
                      placeholder="Search"
                      className="h-[48px] w-full rounded-[8px] border border-[#DBE1E7] pr-4 pl-10 text-sm text-black placeholder:text-[#9CA3AF] focus:outline-none"
                    />
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]" />
                  </div>
                </div>
                <div>
                  <button className="flex h-[48px] w-[138px] items-center justify-center rounded-[8px] bg-[#0B501E] text-white">
                    <Plus /> Add NFT
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4">
            <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
            <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
            <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
            <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
            <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
            <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
            <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
            <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
          </div>
        </div>
      ) : (
        <div className="p-16">
          <div className="border-b-[0.75px] border-[#dbe1e7] py-4">
            <h1 className="font-sans text-[#5a5b5c]">Welcome👋</h1>
            <h1 className="font-sans text-[24px] font-semibold text-[#090909]">
              User 1234
            </h1>
          </div>
          <div className="flex gap-16 py-8">
            <div className="h-[386px] w-[430px]">
              <div className="rounded-[20px] bg-[#f9f9fa]">
                <div className="p-4">
                  <div className="rounded-[16px] border-[0.5px] border-[#dbe2e8] bg-white p-6 text-center">
                    <div className="flex items-center justify-center gap-1 text-[#666666]">
                      <div className="text-[12px]">Wallet Balance</div>
                      <div
                        onClick={() => setShowBalance(!showBalance)}
                        className="cursor-pointer"
                      >
                        {showBalance ? <Eye size={16} /> : <EyeOff size={16} />}
                      </div>
                    </div>
                    <div className="pt-2 font-sans text-[32px] font-semibold">
                      {showBalance ? (
                        <div>
                          <span className="text-[#0B501E]">$6192.</span>
                          <span className="text-[#0B501E80]">50</span>
                        </div>
                      ) : (
                        '******'
                      )}
                    </div>
                    <div className="pt-8">
                      <button className="h-[42px] w-full cursor-pointer rounded-[100px] bg-[#f9f9fa] font-sans text-[14px] font-medium text-[#0B501E]">
                        Fund Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="py-4 font-sans font-medium text-[#4D4845]">
                  Frequent Gossips
                </div>
                <div className="flex gap-12">
                  {people.map((item) => (
                    <div key={item.name}>
                      <div
                        className="flex cursor-pointer flex-col gap-3"
                        onClick={() => {
                          setSelectedPerson(item)
                          setGossipScreen(true)
                        }}
                      >
                        <Image
                          src={item.img}
                          alt="img"
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        {item.name}
                      </div>
                    </div>
                  ))}
                  {gossipScreen && selectedPerson && (
                    <GossipScreen
                      name={selectedPerson.name}
                      img={selectedPerson.img}
                      onClose={() => {
                        setGossipScreen(false)
                        setSelectedPerson(null)
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="h-[648px] w-[498px]">
              <div className="flex justify-between pb-5">
                <div>
                  <h1 className="font-sans text-[14px] font-medium text-[#4D4845]">
                    Your NFTs
                  </h1>
                  <p className="text-[12px] text-[#5A5B5C]">24 total</p>
                </div>
                <div>
                  <button
                    className="h-[32px] w-[62px] cursor-pointer rounded-[1000px] border-[1px] border-[#C8F9D4] bg-[#EDFDF1] text-[12px] text-[#0B501E]"
                    onClick={() => setSeeAllNFT(true)}
                  >
                    See all
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
                <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
                <NFT name="Ganger Gangsta" price="$24.89" img="/NFT1.jpg" />
                <NFT name="Nerdy Freddy Mendy" price="$24.89" img="/NFT2.jpg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default HomePage

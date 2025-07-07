import Image from 'next/image'

const nfts = [
  { id: 1, img: '/smokeNFT.jpg', price: '$24.49' },
  { id: 2, img: '/dreadNFT.jpg', price: '$24.49' },
  { id: 3, img: '/haloNFT.jpg', price: '$24.49' },
  { id: 4, img: '/frogNFT.jpg', price: '$24.49' },
  { id: 5, img: '/hoodNFT.jpg', price: '$24.49' },
  { id: 6, img: '/oldMonkNFT.jpg', price: '$24.49' },
  { id: 7, img: '/monkNFT.jpg', price: '$24.49' },
  { id: 8, img: '/oldMonkNFT.jpg', price: '$24.49' },
]

export default function SendNFTTab() {
  return (
    <div className="mb-6 w-full overflow-auto rounded-xl border bg-gray-50 p-4">
      <div className="mb-2 text-center text-xs font-semibold text-green-700">
        Your NFTs (24)
      </div>
      <div className="mt-10 grid grid-cols-4 gap-1">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="relative h-32 overflow-hidden rounded-lg border bg-white"
          >
            <Image
              src={nft.img}
              alt="NFT"
              width={123}
              height={123}
              className="h-full w-full object-cover"
            />
            <span className="absolute top-1 left-1 rounded-xl bg-white/80 px-1 text-xs font-semibold text-green-700">
              {nft.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

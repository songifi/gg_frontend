import Image from 'next/image'

interface Card {
  name: string
  price: string
  img: string
}

const NFT = ({ name, price, img }: Card) => {
  return (
    <div className="inline-block rounded-[12px] border-[1px] border-[#DBE1E7]">
      <div className="relative inline-block">
        <Image
          src={img}
          alt="img"
          width={241}
          height={210}
          className="rounded-t-[12px] object-cover"
        />
        <h1 className="absolute top-3 left-3 z-10 m-0 rounded-[1000px] border-[1px] border-[#C8F9D4] bg-[#EDFDF1] px-3 py-1.5 font-sans text-[12px] font-medium text-[#0B501E]">
          {price}
        </h1>
      </div>
      <h1 className="px-5 pt-1 pb-4 font-sans font-medium text-[#222222]">
        {name}
      </h1>
    </div>
  )
}
export default NFT

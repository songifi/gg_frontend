import { NavBar } from './NavBar'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="container mx-auto px-4">
          <div className='flex items-center gap-2 border-[2px] py-2 px-3.5 max-w-[12rem] justify-center mx-auto border-[#0B501E] rounded-[5rem] '>
            <Image src="/starknetIcon.png" width={15} height={15} alt="stacknet" />
            <p className='text-[#0B501E] text-sm '>Powered by starkent</p>
          </div>
          <div className='mx-auto'>
            <h1>Chat</h1>
          </div>
        </div>
      </section>
    </>
  )
}

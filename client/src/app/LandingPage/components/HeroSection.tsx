import { NavBar } from './NavBar'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section>
        <div className="container mx-auto mt-20 flex flex-col items-center gap-6 px-4">
          <div className="flex items-center gap-2 rounded-[5rem] border-[2px] border-[#0B501E] px-3.5 py-2">
            <Image
              src="/starknetIcon.png"
              width={15}
              height={15}
              alt="stacknet"
            />
            <p className="text-sm text-[#0B501E]">Powered by starkent</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[#0B501E]">
              <span className="text-4xl font-bold md:text-[5.5rem]">
                Chat.{' '}
              </span>
              <span className="text-4xl italic md:text-[5.5rem]">Gossip. </span>
              <span className="text-4xl font-bold md:text-[5.5rem]">Tip</span>
            </h1>

            <p className="mt-4 max-w-xl text-center text-[1.375rem]">
              A social messaging app built on Starknet real-time chat and token
              tipping chat and token tipping all gasless.
            </p>
            <button className="mt-10 rounded-[1.25rem] bg-[#419057] px-8 py-4 text-base font-semibold text-white hover:bg-black md:block">
              Join the Group
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

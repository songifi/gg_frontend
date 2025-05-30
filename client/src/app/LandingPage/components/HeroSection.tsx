import { NavBar } from './NavBar'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { Plus } from 'lucide-react'
import { Home } from 'lucide-react'

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
      {/* Big hero Image */}
      <section className="relative mx-auto mt-16 flex max-w-7xl flex-col items-center justify-center px-4 md:px-8">
        {/* Floating Cards */}
        <div className="relative container mx-auto px-4">
          {/* Center Hero Phone */}
          <Image
            src="/HeroImageMockUp.png" // Use your actual image
            alt="hero phone"
            width={700}
            height={1000}
            className="relative z-10 mx-auto h-auto w-full max-w-[320px] md:max-w-[400px]"
            priority
          />

          {/* Floating Cards */}
          {/* Top Left Card */}
          <div className="absolute top-0 left-0 z-20 hidden md:block">
            <div className="flex flex-col items-center gap-3 rounded-md border border-[rgba(112,221,141,0.57)] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] p-4 shadow-md backdrop-blur-[10px]">
              <div className="flex items-center gap-10 rounded-4xl bg-[#F8F8F8] p-2">
                <div className="flex items-center gap-1">
                  <Image
                    src="/starknetIconMd.png"
                    width={20}
                    height={20}
                    alt="starknet"
                  />
                  <span className="text-sm font-medium">STRK</span>
                </div>
                <button className="rounded-full bg-white p-2">
                  <ChevronDown size={16} className="text-black" />
                </button>
              </div>
              <p className="text-[0.75rem] text-gray-400">Wallet balance</p>
              <p className="text-2xl font-bold text-[#1A1A1A]">24,9087 STRK</p>
              <p className="text-xs font-medium text-[#767676]">$ 689.00</p>

              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-[0.5px] border-[#DBE1E7] bg-[#F8F8F8] p-6">
                    <ArrowUpRight size={16} />
                  </div>
                  <p className="text-[#090909 font-medium] text-xs">Send</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-[0.5px] border-[#DBE1E7] bg-[#0B501E] p-6">
                    <Plus size={16} className="text-white" />
                  </div>
                  <p className="text-[#090909 font-medium] text-xs">Fund</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="rounded-full border-[0.5px] border-[#DBE1E7] bg-[#F8F8F8] p-6">
                    <Image
                      src="/homeIcon.svg"
                      width={16}
                      height={16}
                      alt="Home Icon"
                    />
                  </div>
                  <p className="text-[#090909 font-medium] text-xs">Details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Middle Card */}
          <div className="absolute top-1/2 left-12 z-20 hidden -translate-y-1/2 transform md:block">
            <div className="flex w-[200px] flex-col items-center rounded-md border border-[rgba(112,221,141,0.57)] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] px-4 py-3 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[10px]">
              <div className="mb-2 flex items-center gap-2">
                <Image
                  src="/starkNetIcon.png"
                  width={20}
                  height={20}
                  alt="Starknet"
                />
                <span className="text-xs font-medium text-gray-700">
                  Starknet Token
                </span>
              </div>

              <p className="text-center text-[2rem] font-bold text-[#0B501E]">
                $500
              </p>

              <p className="text-center text-sm text-gray-600">
                50,678.89 STRK
              </p>

              <p className="mt-3 w-full text-right text-[0.625rem] text-gray-500">
                Read 16:40
              </p>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="absolute bottom-[0px] left-12 z-20 hidden md:block">
            <div className="rounded-[1.25rem] border border-[rgba(112,221,141,0.57)] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.08)_100%)] p-5 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[10px]">
              <h1 className="text-[0.875rem] font-medium text-gray-600">
                Frequent Gossips
              </h1>
              <div className="mt-4 flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/alexis.png"
                    alt="Alexis"
                    width={80}
                    height={80}
                    className="rounded-full w-12 h-12 shrink-0 aspect-square "
                    priority
                  />
                  <p className='text-xs font-medium'>Alexis</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/ralph.png"
                    alt="ralph"
                    width={80}
                    height={80}
                    className="rounded-full w-12 h-12 shrink-0 aspect-square "
                    priority
                  />
                  <p className='text-xs font-medium'>Ralph</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/victor.png"
                    alt="Victor"
                    width={80}
                    height={80}
                    className="rounded-full w-12 h-12 shrink-0 aspect-square "
                    priority
                  />
                  <p className='text-xs font-medium'>Victor</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/anna.png"
                    alt="anna"
                    width={80}
                    height={80}
                    className="rounded-full w-12 h-12 shrink-0 aspect-square "
                    priority
                  />
                  <p className='text-xs font-medium'>Anna</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className='flex justify-center w-[3rem] h-3rem p-3 bg-[#FD8240] rounded-[6.75rem]'>
                    <p className='text-white text-[0.875rem] font-medium '>J</p>
                  </div>
                  <p className='text-xs font-medium'>Jakub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="absolute top-0 right-0 z-20 hidden md:block">
            <Image src="/uiCard3.png" alt="User Info" width={180} height={80} />
          </div>

          {/* Bottom Right Card */}
          <div className="absolute right-[-40px] bottom-[-20px] z-20 hidden md:block">
            <Image
              src="/uiCard4.png"
              alt="Wallet Balance"
              width={240}
              height={140}
            />
          </div>
        </div>
      </section>
    </>
  )
}

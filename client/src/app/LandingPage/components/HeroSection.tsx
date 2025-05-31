import { NavBar } from './NavBar'
import Image from 'next/image'
import {
  ChevronDown,
  ArrowUpRight,
  Plus,
  ChevronLeft,
  ChevronRight,
  EllipsisVertical,
} from 'lucide-react'

export const HeroSection = () => {
  return (
    <>
      <section className="relative bg-[linear-gradient(180deg,_#F4FFF7_46.8%,_#FFF_71.33%)]">
        <NavBar />
        <div className=" container mx-auto mt-10 flex flex-col items-center gap-6 px-10 ">
          <div className="flex items-center gap-2 rounded-full border-2 border-[#0B501E] px-3.5 py-2">
            <Image
              src="/starknetIcon.png"
              width={15}
              height={15}
              alt="starknet"
            />
            <p className="text-sm text-[#0B501E]">Powered by Starknet</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-[#0B501E]">
              <span className="text-3xl font-bold  sm:text-4xl md:text-6xl lg:text-[5.5rem]">
                Chat.{' '}
              </span>
              <span className="text-3xl italic sm:text-4xl md:text-6xl lg:text-[5.5rem] font-instrument">
                Gossip.{' '}
              </span>
              <span className="text-3xl font-bold sm:text-4xl md:text-6xl lg:text-[5.5rem]">
                Tip
              </span>
            </h1>
            <h2 className="text-3xl font-bold text-[#0B501E] sm:text-4xl md:text-6xl lg:text-[5.5rem]">
              No Gas Required
            </h2>

            <p className="mt-4 max-w-xl text-center text-lg sm:text-xl md:text-[1.375rem]">
              A social messaging app built on Starknet real-time chat and token
              tipping all gasless.
            </p>
            <button className="mt-8 cursor-pointer rounded-xl bg-[#419057] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-black md:mt-10 md:px-8 md:py-4">
              Join the Group
            </button>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative mx-auto mt-16 max-w-7xl px-4 md:px-8">
        <div className="relative container mx-auto">
          {/* Center Hero Phone */}
          <div className="relative z-10 mx-auto max-w-[320px] md:max-w-[400px]">
            <Image
              src="/HeroImageMockUp.png"
              alt="hero phone mockup"
              width={700}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>

          {/* Top Left Card - Wallet */}
          <div className="absolute top-[-20] left-0 z-20 hidden md:block lg:left-20 xl:left-50">
            <div className="flex w-64 flex-col items-center gap-3 rounded-lg border border-[rgba(112,221,141,0.57)] bg-white/10 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex w-full items-center justify-between rounded-full bg-[#F8F8F8] p-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/starknetIconMd.png"
                    width={20}
                    height={20}
                    alt="starknet"
                  />
                  <span className="text-sm font-medium">STRK</span>
                </div>
                <button className="rounded-full bg-white p-2 hover:bg-gray-100">
                  <ChevronDown size={16} className="text-black" />
                </button>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500">Wallet balance</p>
                <p className="text-2xl font-bold text-[#1A1A1A]">
                  24,908.7 STRK
                </p>
                <p className="text-xs font-medium text-[#767676]">$689.00</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <button className="rounded-full border border-[#DBE1E7] bg-[#F8F8F8] p-3 hover:bg-gray-100">
                    <ArrowUpRight size={16} />
                  </button>
                  <p className="text-xs font-medium text-[#090909]">Send</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="rounded-full border border-[#DBE1E7] bg-[#0B501E] p-3 hover:bg-[#0a4419]">
                    <Plus size={16} className="text-white" />
                  </button>
                  <p className="text-xs font-medium text-[#090909]">Fund</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <button className="rounded-full border border-[#DBE1E7] bg-[#F8F8F8] p-3 hover:bg-gray-100">
                    <Image
                      src="/homeIcon.svg"
                      width={16}
                      height={16}
                      alt="Home Icon"
                    />
                  </button>
                  <p className="text-xs font-medium text-[#090909]">Details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Middle Card - Token Info */}
          <div className="absolute top-1/2 left-0 z-0 hidden -translate-y-1/5 md:block lg:left-30 xl:left-50">
            <div className="w-56 rounded-lg border border-[rgba(112,221,141,0.57)] bg-white/10 p-4 shadow-lg backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2">
                <Image
                  src="/starkNetIcon.png"
                  width={20}
                  height={20}
                  alt="Starknet"
                />
                <span className="text-sm font-medium text-gray-700">
                  Starknet Token
                </span>
              </div>

              <p className="text-3xl font-bold text-[#0B501E]">$500</p>
              <p className="text-sm text-gray-600">50,678.89 STRK</p>
              <p className="mt-3 text-right text-xs text-gray-500">
                Read 16:40
              </p>
            </div>
          </div>

          {/* Bottom Left Card - Frequent Gossips */}
          <div className="absolute bottom-25 left-0 z-20 hidden md:block lg:left-30 xl:left-55">
            <div className="rounded-xl border border-[rgba(112,221,141,0.57)] bg-white/10 p-5 shadow-lg backdrop-blur-sm">
              <h3 className="mb-4 text-sm font-medium text-gray-700">
                Frequent Gossips
              </h3>
              <div className="flex items-center gap-3">
                {[
                  { src: '/alexis.png', name: 'Alexis' },
                  { src: '/ralph.png', name: 'Ralph' },
                  { src: '/victor.png', name: 'Victor' },
                  { src: '/anna.png', name: 'Anna' },
                ].map((person, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <Image
                      src={person.src}
                      alt={person.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <p className="text-xs font-medium">{person.name}</p>
                  </div>
                ))}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FD8240]">
                    <p className="text-sm font-medium text-white">J</p>
                  </div>
                  <p className="text-xs font-medium">Jakub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right Card - User Profile */}
          <div className="absolute top-16 right-0 z-20 hidden w-80 md:block lg:right-20 xl:right-40">
            <div className="rounded-xl border border-[rgba(112,221,141,0.57)] bg-white/10 py-1 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <button className="rounded p-1 hover:bg-gray-100">
                  <ChevronLeft size={20} />
                </button>

                <div className="flex flex-col items-center gap-2">
                  <Image
                    src="/avatar.png"
                    width={50}
                    height={50}
                    alt="user avatar"
                    className="rounded-full"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">
                      theXaxxo Outlook
                    </span>
                    <button className="p-1">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <button className="rounded p-1 hover:bg-gray-100">
                  <EllipsisVertical size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Middle Card - Wallet Balance */}
          <div className="absolute top-1/2 right-0 z-20 hidden w-72 -translate-y-1/2 md:block lg:right-10 xl:right-35">
            <div className="rounded-xl border border-[rgba(112,221,141,0.57)] bg-white/10 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-sm text-gray-700">Wallet Balance</p>
              <p className="mt-2 text-3xl font-bold">
                <span className="text-[#0B501E]">$6,192.</span>
                <span className="text-[rgba(11,80,30,0.50)]">50</span>
              </p>
              <button className="mt-4 w-full rounded-full border border-[#C8F9D4] bg-[#EDFDF1] py-3 font-medium text-[#0B501E] transition-colors hover:bg-[#d4f5dc]">
                Fund Wallet
              </button>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="absolute right-0 bottom-20 z-20 hidden w-80 md:block lg:right-10 xl:right-35">
            <div className="rounded-lg border border-[rgba(112,221,141,0.57)] bg-white/10 p-5 shadow-lg backdrop-blur-sm">
              <h3 className="text-center text-2xl font-extrabold">
                Chat Securely, Send Instantly
              </h3>
              <p className="mt-4 text-center text-base font-medium text-[#08090A]">
                Talk with friends or communities using end-to-end encrypted
                wallet-to-wallet messaging.
              </p>
            </div>
          </div>
          <article className="absolute bottom-0 left-1/2 z-10 h-[12rem] w-full max-w-7xl -translate-x-1/2 bg-[linear-gradient(174deg,_rgba(255,255,255,0)_-114.14%,_#ffffff_-87.95%)] blur-[40px]"></article>
        </div>
      </section>
    </>
  )
}

'use client'

import { Mail, Wallet, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export const EarlyAccess = () => {
  const [view, setView] = useState<'main' | 'email' | 'connect'>('main')

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <section className="mt-10 flex min-h-screen items-center justify-center bg-gradient-to-b from-[#eaf9ec] to-white px-4 py-16">
      <AnimatePresence mode="wait">
        {view === 'main' && (
          <motion.div
            key="main"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative container mx-auto max-w-3xl rounded-[20px] bg-[#eaf9ec] px-10 py-20 text-center shadow-lg"
          >
            <div className="pointer-events-none absolute inset-0 bg-[url('/opacImage.png')] bg-contain" />
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-[#2C6C3E] sm:text-4xl">
                Get early access
              </h2>
              <p className="mb-2 text-[#419057]">
                Web3 is evolving — and so is how we communicate. Be part of the
                first community to experience gasless, on-chain conversations
                powered by Starknet.
              </p>
              <p className="mb-8 text-green-700">
                Whether you're a seasoned crypto user or just curious about
                Web3, Gasless Gossip puts the power of messaging back in your
                hands — no fees, no friction.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setView('email')}
                  className="flex items-center gap-2 cursor-pointer rounded-xl bg-[#419057] px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </button>
                <button
                  onClick={() => setView('connect')}
                  className="flex items-center gap-2 cursor-pointer rounded-xl bg-[#419057] px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700"
                >
                  <Wallet className="h-5 w-5" />
                  Wallet
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {view === 'connect' && (
          <motion.div
            key="connect"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md"
          >
            <button
              onClick={() => setView('main')}
              className="mb-4 flex items-center text-sm cursor-pointer text-[#419057] transition hover:text-green-700"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back
            </button>
            <h2 className="text-2xl font-bold text-[#419057] md:text-3xl">
              Connect wallet
            </h2>
            <p className="mt-2 text-sm text-[#419057]">
              Get started by connecting your preferred wallet below.
            </p>

            <div className="mt-6 space-y-4">
              {[
                { name: 'Metamask', bg: '#FBEDC8', icon: '/metamask.png' },
                { name: 'Phantom', bg: '#8797F8', icon: '/phantom.png' },
                { name: 'Coinbase', bg: '#0E4CEF', icon: '/coinbase.png' },
                { name: 'Rabby', bg: '#8797F8', icon: '/rabby.png' },
              ].map((wallet) => (
                <button
                  key={wallet.name}
                  className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-left transition hover:bg-gray-50"
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: wallet.bg }}
                  >
                    <Image
                      src={wallet.icon}
                      alt={wallet.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#419057]">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>

            <button className="mt-8 w-full cursor-pointer rounded-xl border border-[#419057] px-6 py-3 text-sm font-medium text-[#419057] transition hover:bg-[#f1fcf3]">
              Learn More
            </button>

            <p className="mt-4 text-center text-xs text-[#419057]">
              By connecting your wallet, you’re agreeing to our{' '}
              <a href="#" className="font-semibold text-black">
                Terms of Service
              </a>{' '}
              and our{' '}
              <a href="#" className="font-semibold text-black">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>
        )}

        {view === 'email' && (
          <motion.div
            key="email"
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-4xl rounded-[1.25rem] border border-[#73AF84] bg-white px-6 py-10 shadow-md md:px-14"
          >
            <button
              onClick={() => setView('main')}
              className="mb-4 flex items-center text-sm cursor-pointer text-[#419057] transition hover:text-green-700"
            >
              <ArrowLeft className="mr-1 h-4 w-4" /> Back
            </button>
            <h1 className="text-center text-3xl font-bold text-[#0B501E] md:text-5xl">
              Ready to Join?
            </h1>
            <p className="mt-2 text-center text-base text-[#0B501E] md:text-lg">
              Be the First to Know. Stay Ahead of the Chain.
            </p>

            <form className="mt-8 w-full">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-md rounded-full border border-[#419057] px-6 py-3 text-[#0B501E] placeholder:text-[#419057] focus:ring-2 focus:ring-[#73AF84] focus:outline-none sm:rounded-[1.25rem_0rem_0rem_1.25rem]"
                  required
                />
                <button
                  type="submit"
                  className="w-full max-w-[160px] rounded-full bg-[#419057] px-6 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-[#337749] sm:rounded-[0rem_1.25rem_1.25rem_0rem]"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

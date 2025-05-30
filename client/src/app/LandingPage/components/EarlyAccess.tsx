import { Mail, Wallet } from 'lucide-react'

export const EarlyAccess = () => {
  return (
    <section className="mt-30">
      <div className="container mx-auto px-4 relative overflow-hidden rounded-[20px] bg-[#eaf9ec] px-4 py-20 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[url('/opacImage.png')] bg-contain" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-[#2C6C3E] sm:text-4xl">
            Get early access
          </h2>
          <p className="mb-2 text-[#419057]">
            Web3 is evolving — and so is how we communicate. Be part of the
            first community to experience gasless, on-chain conversations
            powered by Starknet.
          </p>
          <p className="mb-8 text-green-700">
            Whether you're a seasoned crypto user or just curious about Web3,
            Gasless Gossip puts the power of messaging back in your hands — no
            fees, no friction.
          </p>

       
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-[#419057] px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700">
              <Mail className="h-5 w-5" />
              Email
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#419057] px-6 py-3 font-semibold text-white shadow transition hover:bg-green-700">
              <Wallet className="h-5 w-5" />
              Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

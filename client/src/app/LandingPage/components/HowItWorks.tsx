import Image from 'next/image'
export const HowItWorks = () => {
  return (
    <section className="mt-8">
      <div className="container mx-auto h-auto min-h-[600px] w-full bg-[url('/howitworksMain.png')] bg-cover bg-center bg-no-repeat px-10 py-16">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <h1 className="text-center text-[2.5rem] leading-tight font-semibold md:text-left md:text-[3.625rem]">
              How It Works
            </h1>
          </div>

          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 rounded-b-4xl bg-white p-8 shadow-md">
              <div className="flex items-center gap-5">
                <p className="w-fit self-start rounded-[1.875rem_1.875rem_0rem_0rem] border border-[#419057] px-4 py-1 text-[2.20588rem] font-bold text-[#419057]">
                  1
                </p>
                <Image
                  src="/walletImage.png"
                  alt="wallet"
                  width={120}
                  height={120}
                  className="justify-self-end"
                  priority
                />
              </div>

              <p className="text-2xl font-bold text-[#419057]">
                Connect Your Wallet
              </p>
              <p className="text-justify text-base text-[#419057] sm:text-[1.10294rem]">
                Start by connecting your crypto wallet (like Argent, Braavos, or
                MetaMask via Starknet). No need to preload it with ETH — you
                won’t be paying gas. Gasless Gossip uses account abstraction to
                cover network fees for you.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 rounded-b-4xl bg-white p-8 shadow-md">
              <div className="flex items-center gap-5">
                <p className="w-fit self-start rounded-[1.875rem_1.875rem_0rem_0rem] border border-[#419057] px-4 py-1 text-[2.20588rem] font-bold text-[#419057]">
                  2
                </p>
                <Image
                  src="/chatIcon.svg"
                  alt="wallet"
                  width={120}
                  height={120}
                  className="justify-self-end"
                  priority
                />
              </div>

              <p className="text-2xl font-bold text-[#419057]">
                Start Chatting Instantly
              </p>
              <p className="text-justify text-base text-[#419057] sm:text-[1.10294rem]">
                Once you're in, it feels just like any modern messaging app —
                but it's fully on-chain. Send direct messages, chat in groups,
                or reply to friends in real-time. Every message is recorded on
                Starknet, ensuring censorship resistance and transparency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 rounded-b-4xl bg-white p-8 shadow-md">
              <div className="flex items-center gap-5">
                <p className="w-fit self-start rounded-[1.875rem_1.875rem_0rem_0rem] border border-[#419057] px-4 py-1 text-[2.20588rem] font-bold text-[#419057]">
                  3
                </p>
                <Image
                  src="/coinIcon.svg"
                  alt="wallet"
                  width={120}
                  height={120}
                  className="justify-self-end"
                  priority
                />
              </div>

              <p className="text-2xl font-bold text-[#419057]">
                Tip Friends & Gossip Freely
              </p>
              <p className="text-justify text-base text-[#419057] sm:text-[1.10294rem]">
                Send tokens to friends straight from the chat. No pop-ups, no
                signing prompts, no gas. Just tap to tip — whether it’s $ETH,
                $USDC, or custom tokens — and keep the gossip flowing. It's
                social, seamless, and seriously Web3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

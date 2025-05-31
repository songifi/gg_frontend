import Image from 'next/image'
import { Send, MailIcon } from 'lucide-react'

export const KeyFeatures = () => {
  return (
    <section className="mt-20" id="key-features">
      <div className="container mx-auto px-10 ">
        <h1 className="mb-10 text-center text-3xl font-bold sm:text-4xl md:text-6xl">
          Key Features
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/*card 1 */}
            <div className="relative rounded-lg bg-[#E4F9E9] px-9 py-4 shadow-[0px_2px_4px_0px_#CDF3D8]">
              <div className="flex w-fit items-center gap-2 rounded-[1.25rem] bg-white px-4 py-2">
                <Image
                  src="/emaiiIcon.svg"
                  width={30}
                  height={30}
                  alt="Email Icon"
                />
                <p className="text-[1.125rem] font-bold text-[#419057]">
                  Gaseless Messaging
                </p>
              </div>

              <p className="mt-4 text-justify text-base leading-7 font-medium text-[#419057]">
                Say goodbye to gas fees. Gasless Gossip uses account abstraction
                and Starknet’s L2 scalability to let you send messages without
                ever worrying about transaction costs.
              </p>

              <article className="flex flex-col gap-5">
                <div className="mt-10 flex items-center gap-5">
                  <div className="w-[40%] rounded-[0.625rem] bg-[#FE7B6C] p-3"></div>
                  <div className="w-[10%] rounded-[0.625rem] bg-[#FE7B6C] p-3"></div>
                </div>

                <div className="w-[80%] rounded-[0.625rem] bg-[#4AB037] p-3"></div>

                <div className="relative flex items-center justify-between">
                  <div className="w-[40%] rounded-[0.625rem] bg-[#FFCF61] p-3"></div>

                  <Send className="absolute -top-5 right-40 text-[#62B97A]" />
                </div>
              </article>
            </div>

            {/* card 2 */}
            <div className="rounded-lg bg-[#E4F9E9] px-6 py-4 shadow-[0px_2px_4px_0px_#CDF3D8]">
              <div className="flex w-fit items-center gap-2 rounded-[1.25rem] bg-white px-4 py-2">
                <Image
                  src="/timerIcon.svg"
                  width={30}
                  height={30}
                  alt="Timer Icon"
                />
                <p className="text-[1.125rem] font-bold text-[#419057]">
                  Real-Time Communication
                </p>
              </div>
              <p className="mt-4 text-justify text-base leading-7 font-medium text-[#419057]">
                Conversations happen live, just like you're used to. Leveraging
                off-chain indexing with on-chain confirmations, Gasless Gossip
                ensures your chats are fast, smooth, and always synced across
                devices.
              </p>
              <div className="relative mx-auto w-full max-w-[400px]">
                <Image
                  src="/eclipesImage.png"
                  alt="Eclipse"
                  width={400}
                  height={400}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-center rounded-lg bg-[#E4F9E9] px-6 py-4 shadow-[0px_2px_4px_0px_#CDF3D8]">
            <div className="flex w-fit items-center gap-2 rounded-[1.25rem] bg-white px-4 py-2">
              <Image
                src="/tokenIcon.svg"
                width={30}
                height={30}
                alt="Wallet Icon"
              />
              <p className="text-[1.125rem] font-bold text-[#419057]">
                Token Tipping
              </p>
            </div>
            <p className="mt-4 mb-10 text-justify text-base leading-7 font-medium text-[#419057]">
              Show some love with tokens. Whether you're tipping a friend,
              rewarding a witty comment, or boosting a message, tipping is built
              right into the chat — no extra steps, no friction, and still
              gasless.
            </p>
            <Image
              src="/Apple_Wallet_Icon 1.png"
              alt="Apple Wallet"
              width={400}
              height={400}
              className="h-auto w-full mt-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

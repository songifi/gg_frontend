import Image from 'next/image'

export const AboutUs = () => {
  return (
    <section className="mt-10" id='about'>
      <div className="container mx-auto px-10 ">
        
        <article className="flex flex-col items-start gap-4 md:flex-row">
          <h3 className="mx-auto w-fit rounded-[1.25rem] bg-[#E4F9E9] px-4 py-3 text-base font-bold text-[#419057] md:mx-0 md:w-[35%]">
            About Us & Powered by Starknet
          </h3>
          <p className="w-full text-justify text-base leading-relaxed text-[#419057] md:w-[65%]">
            Start by connecting your crypto wallet (like Argent, Braavos, or
            MetaMask via Starknet). No need to preload it with ETH — you won’t
            be paying gas. Gasless Gossip uses account abstraction to cover
            network fees for you.
          </p>
        </article>

      
        <article className="mt-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2">
      
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-md">
              <Image
                src="/PSSTIMage.png"
                alt="Psst Image"
                width={400}
                height={400}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center rounded-[1.25rem] bg-[#A8F0BD] p-6 shadow-md">
              <Image
                src="/chatMulti.png"
                alt="Chat Multi"
                width={100}
                height={100}
                className="mb-4 rounded-[1.25rem] object-contain"
                priority
              />
              <p className="text-base font-bold text-[#419057]">
                Making Real Conversations Better
              </p>
            </div>

            {/* Card 3 */}
            <div className="col-span-full rounded-[1.25rem] bg-[#FFF7D1] p-6 text-center shadow-md">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <p className="font-bold text-[#0B501E]">Gasless Gossip</p>
              </div>
              <p className="text-base text-[#0B501E]">
                What if you could send your friends and family tokens in a chat?
              </p>
            </div>
          </div>

          {/* Right Column (Card 4) */}
          <div className="flex h-full flex-col items-center justify-center rounded-[1.25rem] bg-[#E8F5E9] p-6 text-center shadow-md">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={20}
              height={20}
              className="mb-2 h-5 w-5"
            />
            <p className="font-bold text-[#0B501E]">Gasless Gossip</p>
          </div>
        </article>
      </div>
    </section>
  )
}

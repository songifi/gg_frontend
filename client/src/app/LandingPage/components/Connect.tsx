import Image from "next/image";

export const Connect = () => {
  return (
    <section className="mt-10 min-h-screen flex items-center justify-center bg-gradient-to-b from-[#eaf9ec] to-white px-4 py-16">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <h2 className="text-2xl font-bold text-[#419057] md:text-3xl">Connect wallet</h2>
        <p className="mt-2 text-sm text-[#419057]">
          Get started by connecting your preferred wallet below.
        </p>

        <div className="mt-6 space-y-4">
          {[
            { name: 'Metamasks', bg: '#FBEDC8', icon: '/metamask.png' },
            { name: 'Phantom', bg: '#8797F8', icon: '/phantom.png' },
            { name: 'Coinbase', bg: '#0E4CEF', icon: '/coinbase.png' },
            { name: 'Rabby', bg: '#8797F8', icon: '/rabby.png' },
          ].map((wallet) => (
            <button
              key={wallet.name}
              className="flex w-full items-center gap-3 cursor-pointer rounded-lg border border-gray-200 px-4 py-3 text-left hover:bg-gray-50 transition"
            >
              <div
                className="flex items-center justify-center h-8 w-8 rounded-full"
                style={{ backgroundColor: wallet.bg }}
              >
                <Image
                  src={wallet.icon}
                  alt={wallet.name}
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-sm font-medium  text-[#419057]">{wallet.name}</span>
            </button>
          ))}
        </div>

        <button className="mt-8 w-full cursor-pointer rounded-xl border border-[#419057] px-6 py-3 text-sm font-medium text-[#419057] hover:bg-[#f1fcf3] transition">
          Learn More
        </button>

        <p className="mt-4 text-center text-xs text-[#419057]">
          By connecting your wallet, you’re agreeing to our{" "}
          <a href="#" className="font-semibold text-black ">
            Terms of Service
          </a>{" "}
          and our{" "}
          <a href="#" className="font-semibold text-black">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

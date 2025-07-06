import React from "react";
import { ChevronRight } from "lucide-react";

const chains = [
  { name: "Arbitrum One", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/arbitrum.png" alt="Arbitrum One" className="w-6 h-6" /></span> },
  { name: "Base", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/base.png" alt="Base" className="w-6 h-6" /></span> },
  { name: "Ethereum", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/ethereum.png" alt="Ethereum" className="w-6 h-6" /></span> },
  { name: "Immutable zkEVM", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/immutable.png" alt="Immutable zkEVM" className="w-6 h-6" /></span> },
  { name: "Abstract", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/abstract.png" alt="Abstract" className="w-6 h-6" /></span> },
  { name: "Arbitrum Nova", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/arbitrum nova.png" alt="Arbitrum Nova" className="w-6 h-6" /></span> },
  { name: "Avalanche", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/avalanche.png" alt="Avalanche" className="w-6 h-6" /></span> },
  { name: "BSC", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/bsc.png" alt="BSC" className="w-6 h-6" /></span> },
  { name: "Blast", icon: <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]"><img src="/blast.png" alt="Blast" className="w-6 h-6" /></span> },
];

function truncateAddress(walletAddress:string, startLength=6, endLength=6):string{
if (walletAddress.length <= startLength + endLength) return walletAddress;
return `${walletAddress.slice(0, startLength)}....${walletAddress.slice(-endLength)}`
}



const FromOtherChainsContent: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-2 flex-1 overflow-y-auto">
      <div className="text-gray-500 text-sm mb-4 w-full text-left">
        Select from the listed chains below how you which you like
        to fund your wallet.
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200"
      />
      <div className="flex flex-col gap-1 rounded-2xl border border-gray-200 bg-white p-2">
        {chains.map((chain) => (
          <div
            key={chain.name}
            className="flex items-center justify-between px-2 py-3 border-b border-[#DBE1E7] cursor-pointer hover:bg-gray-50 "
          >
            <div className="flex items-center gap-3">
              {chain.icon}
              <span className="font-medium text-base text-gray-900">{chain.name}</span>
            </div>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FromOtherChainsContent; 
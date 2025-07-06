import React from "react";
import { ChevronRight } from "lucide-react";
import { WalletModalType } from './walletModalTypes';

interface FundWalletContentProps {
  onSelectOption: (option: WalletModalType) => void;
}

const options = [
  {
    icon: (
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]">
        <img src="/appleLogo.svg" alt="Apple" className="w-6 h-6" />
      </span>
    ),
    title: "Buy Crypto",
    desc: "Apple Pay, card or bank transfer",
    onClick: undefined,
  },
  {
    icon: (
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]">
        <img src="/argent.svg" alt="Argent" className="w-6 h-6" />
      </span>
    ),
    title: "From STRK Wallet",
    desc: "Argent, Binance, e.t.c",
    onClick: (onSelectOption: FundWalletContentProps["onSelectOption"]) => onSelectOption(WalletModalType.FromStrkWallet),
  },
  {
    icon: (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
        {/* Placeholder for Other Chains icon */}
        <span className="text-gray-400 text-2xl">●</span>
      </div>
    ),
    title: "From Other Chains",
    desc: "Argent, Binance, e.t.c",
    onClick: (onSelectOption: FundWalletContentProps["onSelectOption"]) => onSelectOption(WalletModalType.FromOtherChains),
  },
];

const FundWalletContent: React.FC<FundWalletContentProps> = ({ onSelectOption }) => {
  return (
    <div className="flex flex-col w-full p-2">
      <div className="flex flex-col gap-2">
        {options.map((opt, idx) => (
          <div
            key={opt.title}
            className={`flex items-center justify-between px-2 py-4 ${idx < options.length - 1 ? 'border-b border-gray-200' : ''} cursor-pointer hover:bg-gray-50 rounded-lg`}
            onClick={opt.onClick ? () => opt.onClick(onSelectOption) : undefined}
          >
            <div className="flex items-center gap-4">
              {opt.icon}
              <div>
                <div className="font-medium text-sm lg:text-base text-gray-900">{opt.title}</div>
                <div className="text-xs text-gray-400">{opt.desc}</div>
              </div>
            </div>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
      {/* <button
        className="block md:hidden mt-6 w-full rounded-full bg-[#0B501E] py-3 text-base font-semibold text-white transition hover:bg-green-800"
        onClick={() => onSelectOption('details')}
      >
        View your wallet address
      </button> */}
    </div>
  );
};

export default FundWalletContent; 
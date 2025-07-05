import React from "react";
import { ChevronRight, Gem } from "lucide-react";
import { WalletModalType } from './walletModalTypes';

interface SendOptionsContentProps {
  onSelectOption: (option: WalletModalType) => void;
}

const options = [
  {
    icon: (
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]">
        <img src="/starknetIconMd.png" alt="Starknet" className="w-6 h-6" />
      </span>
    ),
    title: "Send via chat",
    desc: "Send STRK to your chat list",
    onClick: (onSelectOption: SendOptionsContentProps["onSelectOption"]) => onSelectOption(WalletModalType.SendViaChat),
  },
  {
    icon: (
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]">
        <Gem className="w-5 h-5 text-[##0B501E]" />
      </span>
    ),
    title: "Send NFT",
    desc: "Send NFTs via chat",
    onClick: undefined,
  },
  {
    icon: (
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F8F8]">
        <img src="/argent.svg" alt="Argent" className="w-5 h-5" />
      </span>
    ),
    title: "Send to Wallet",
    desc: "Send to external wallet",
    onClick: undefined,
  },
];

const SendOptionsContent: React.FC<SendOptionsContentProps> = ({ onSelectOption }) => {
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
                <div className="font-medium text-base text-gray-900">{opt.title}</div>
                <div className="text-xs text-gray-400">{opt.desc}</div>
              </div>
            </div>
            <ChevronRight className="text-gray-400 w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendOptionsContent; 
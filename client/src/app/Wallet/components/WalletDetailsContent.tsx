import { Check, Copy, QrCode, ChevronRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

interface WalletDetailsContentProps {
  address: string
  copied: boolean
  onCopy: () => void
}


const WalletDetailsContent: React.FC<WalletDetailsContentProps> = ({
  address,
  copied,
  onCopy,
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <h2 className="mb-6 w-full text-left text-xl font-semibold">
        Your wallet address
      </h2>
      <div className="flex h-full flex-col justify-between">
        <div className="mb-8 w-full">
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
            <div>
              <div className="mb-1 text-xs text-gray-400">
                Your Wallet Address
              </div>
              <div className="font-mono text-base break-all">{address}</div>
            </div>
            <button
              onClick={onCopy}
              className="flex cursor-pointer items-center gap-2 rounded-full bg-[#0B501E] px-3 py-2 text-xs text-white transition hover:bg-green-800"
            >
              {copied ? (
                <span>
                  <Check className="h-4 w-4 text-white" />
                </span>
              ) : (
                <>
                  Copy
                  <Copy className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center">
              <Image src="/QR code.png" width={200} height={200} alt="" />
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full bg-[#F6FEF8] p-1">
              <img
                src="/starknetIconMd.png"
                alt="Starknet"
                className="h-6 w-6"
              />
              <span className="px-2 py-0.5 text-xs text-green-800">
                Starknet
              </span>
            </div>

            <div className="mb-8 text-center text-sm text-gray-500">
              This is your STRK wallet address, share to receive funds
            </div>
          </div>
        </div>
        <button className="w-full rounded-full bg-[#0B501E] py-3 text-lg font-semibold text-white transition hover:bg-green-800">
          Share Address
        </button>
      </div>
    </div>
  )
}

// New preview component for mobile pop-up
export const WalletDetailsPreview: React.FC<
  WalletDetailsContentProps & { onViewFull: () => void }
> = ({ address, copied, onCopy, onViewFull }) => (
  <div className="flex flex-col gap-4 p-2 pb-6">
    <div className="mt-8 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">
      <div className="font-mono text-sm break-all">{address}</div>
      <button
        onClick={onCopy}
        className="flex h-12 w-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-200 bg-[#F2F2F8] text-xs text-white transition"
      >
        {copied ? (
          <Check className="h-4 w-4 text-white" />
        ) : (
          <>
            <Copy className="h-5 w-5 text-blue-950" />
          </>
        )}
      </button>
    </div>
    <button
      className="mt-4 flex w-full items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-4 py-4 text-base font-medium text-gray-900 transition hover:bg-gray-50"
      onClick={onViewFull}
    >
      <span className="flex items-center gap-2">
        <QrCode className="h-6 w-6 text-gray-400" />
        View your wallet address
      </span>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </button>
  </div>
)

// Full-screen minimalist wallet address modal
export const WalletAddressFullScreen: React.FC<{ address: string; onCopy: () => void; copied: boolean }> = ({ address, onCopy, copied }) => {
  // Format address into groups of 4, split into two lines
  const formatted = address.match(/.{1,4}/g) || [];
  const firstLine = formatted.slice(0, Math.ceil(formatted.length / 2)).join(' ');
  const secondLine = formatted.slice(Math.ceil(formatted.length / 2)).join(' ');

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-8 pb-4 px-4">
      <h2 className="text-center text-lg font-semibold mb-6">Wallet Address</h2>
      <div className="flex flex-col items-center w-full">
        <div className="mb-2 text-xs font-medium text-green-700 tracking-wide text-center">TAP TO COPY</div>
        <div
          className="rounded-2xl bg-gray-50 p-4 mb-6 cursor-pointer"
          onClick={onCopy}
        >
          <Image src="/QR code.png" width={200} height={200} alt="" />
        </div>
      </div>
      <div
        className="mt-2 text-center text-base font-mono text-gray-900 cursor-pointer select-all"
        onClick={onCopy}
      >
        <span>{firstLine}</span><br />
        <span>{secondLine}</span>
        {copied && <span className="ml-2 text-green-600 text-xs align-middle">Copied!</span>}
      </div>
    </div>
  );
};

// New FromStrkWalletContent for 'From STRK Wallet' screen
export const FromStrkWalletContent: React.FC<{ address: string; onCopy: () => void; copied: boolean }> = ({ address, onCopy, copied }) => {
  const formatted = address.match(/.{1,4}/g) || [];
  const firstLine = formatted.slice(0, Math.ceil(formatted.length / 2)).join(' ');
  const secondLine = formatted.slice(Math.ceil(formatted.length / 2)).join(' ');

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white pt-4 pb-4 px-4">
      <div className="text-gray-500 text-sm mb-6 text-center w-full">
        Below is your wallet address. Copy or share to receive STRK into your Gasless Gossip wallet.
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="mb-2 text-xs font-medium text-green-700 tracking-wide text-center">TAP TO COPY</div>
        <div
          className="rounded-2xl bg-gray-50 p-4 mb-4 cursor-pointer"
          onClick={onCopy}
        >
          <Image src="/QR code.png" width={200} height={200} alt="" />
        </div>
        <div className="flex w-fit items-center gap-1 rounded-full bg-[#F6FEF8] p-1 mb-4">
          <img src="/starknetIconMd.png" alt="Starknet" className="h-6 w-6" />
          <span className="px-2 py-0.5 text-xs text-green-800">Starknet</span>
        </div>
      </div>
      <div
        className="mt-2 text-center text-base font-mono text-gray-900 cursor-pointer select-all"
        onClick={onCopy}
      >
        <span>{firstLine}</span><br />
        <span>{secondLine}</span>
        {copied && <span className="ml-2 text-green-600 text-xs align-middle">Copied!</span>}
      </div>
    </div>
  );
};

export default WalletDetailsContent

import { div } from 'framer-motion/client'
import {
  Eye,
  Plus,
  ArrowUpRight,
  LandmarkIcon,
  EyeOff,
  CopyIcon,
  Check,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Modal from './Modal'
import WalletDetailsContent, {
  WalletAddressFullScreen,
  FromStrkWalletContent,
} from './WalletDetailsContent'
import FundWalletContent from './FundWalletContent'
import FromOtherChainsContent from './FromOtherChainsContent'
import SendOptionsContent from './SendOptionsContent'
import SendViaChatContent from './SendViaChatContent'
import { WalletDetailsPreview } from './WalletDetailsContent'
import { WalletModalType } from './walletModalTypes'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return isMobile
}

// Tablet detection for 768-1023px
const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;

// Option type for send/fund options
type Option = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick?: (onSelectOption: (modal: WalletModalType) => void) => void;
};

// Centralized back navigation logic
const getBackModal = (modal: WalletModalType): WalletModalType => {
  switch (modal) {
    case WalletModalType.FromStrkWallet:
    case WalletModalType.FromOtherChains:
      return WalletModalType.Fund;
    case WalletModalType.SendViaChat:
      return WalletModalType.Send;
    default:
      return WalletModalType.None;
  }
};

// Custom hook for modal state/navigation
function useWalletModal() {
  const [openModal, setOpenModal] = useState<WalletModalType>(WalletModalType.None);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const goBack = () => setOpenModal(getBackModal(openModal));
  const close = () => {
    setOpenModal(WalletModalType.None);
    setShowFullDetails(false);
  };
  return { openModal, setOpenModal, showFullDetails, setShowFullDetails, goBack, close };
}

export default function WalletBalance() {
  const walletAddress = '0x05e8c1234567890b08fd4637c'
  const [showBalance, setShowBalance] = useState<boolean>(true)
  const [copied, setCopied] = useState<boolean>(false)
  const isMobile = useIsMobile()
  const { openModal, setOpenModal, showFullDetails, setShowFullDetails, goBack, close } = useWalletModal()

  const handleCopy = async (value: string) => {
    console.log('handleCopy called with value:', value)
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
      console.log('Copy to clipboard successful')
    } catch (err) {
      console.error('Copy to clipboard failed:', err)
    }
  }

  function truncateAddress(
    walletAddress: string,
    startLength = 6,
    endLength = 6,
  ): string {
    if (walletAddress.length <= startLength + endLength) return walletAddress
    return `${walletAddress.slice(0, startLength)}....${walletAddress.slice(-endLength)}`
  }

  return (
    <div className="w-full">
      <div className="flex w-full flex-col gap-7 lg:w-5/6">
        <div className="h-[250px] rounded-lg bg-[#F9FAFA] p-4">
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-4">
            <div className="flex items-center justify-between gap-1">
              <h3 className="text-xs text-[#666666]">Wallet Balance</h3>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="cursor-pointer"
              >
                {showBalance ? (
                  <Eye strokeWidth={1} className="h-4 w-4 text-[#666666]" />
                ) : (
                  <EyeOff strokeWidth={1} className="h-4 w-4 text-[#666666]" />
                )}
              </button>
            </div>
            <div>
              {showBalance ? (
                <div>
                  <p className="text-2xl font-bold text-[#0B501E]">
                    $6,192.<span className="text-[#0B501E]/50">50</span>
                  </p>
                  <p className="text-sm text-[#666666]">
                    10,098,890 <span>STRK</span>
                  </p>
                </div>
              ) : (
                '*******'
              )}
            </div>
            <div className="flex w-full items-center justify-between px-8">
              {/* send button */}
              <button
                className="flex cursor-pointer flex-col items-center gap-2"
                onClick={() => setOpenModal(WalletModalType.Send)}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#DBE1E7] bg-[#f8f8f8] p-2">
                  <ArrowUpRight
                    strokeWidth={1}
                    className="h-6 w-6 text-[#090909]"
                  />
                </div>
                <p className="text-xs text-[#090909]">send</p>
              </button>
              {/* fund button */}
              <button
                className="flex cursor-pointer flex-col items-center gap-2"
                onClick={() => setOpenModal(WalletModalType.Fund)}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#DBE1E7] bg-[#0B501E] p-2">
                  <Plus strokeWidth={1} className="h-6 w-6 text-white" />
                </div>
                <p className="text-xs text-[#090909]">Fund</p>
              </button>
              {/* details button */}
              <button
                className="flex cursor-pointer flex-col items-center gap-2"
                onClick={() => setOpenModal(WalletModalType.Details)}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#DBE1E7] bg-[#f8f8f8] p-2">
                  <LandmarkIcon
                    strokeWidth={1.5}
                    className="h-6 w-6 text-[#090909]"
                  />
                </div>
                <p className="text-xs text-[#090909]">Details</p>
              </button>
            </div>
          </div>
        </div>
        {/* address */}
        <div className="h-16 rounded-xl bg-[#F9FAFA] p-1">
          <div className="flex h-full items-center justify-between rounded-xl bg-white p-3 text-xs">
            <p className="text-[#929292]">
              Your wallet address /{' '}
              <span className="font-semibold text-[#090909]">
                {' '}
                {truncateAddress(walletAddress)}
              </span>
            </p>
            <button
              onClick={() => handleCopy(walletAddress)}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0B501E] px-3 py-1 text-sm text-white"
            >
              {copied ? (
                <div className="px-3">
                  <Check strokeWidth={1} className="h-4 w-4" />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  {' '}
                  copy
                  <CopyIcon strokeWidth={1} className="h-3 w-3 text-white" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:px-20">
        <Modal
          isOpen={openModal !== WalletModalType.None}
          onClose={close}
          onBack={goBack}
          slideFromBottom={isMobile && openModal === WalletModalType.Details}
          fullHeight={isMobile && (
            openModal === WalletModalType.FromStrkWallet ||
            openModal === WalletModalType.FromOtherChains ||
            openModal === WalletModalType.Send ||
            openModal === WalletModalType.SendViaChat ||
            (openModal === WalletModalType.Details && showFullDetails)
          )}
          backButton={(isMobile || isTablet) && openModal !== WalletModalType.None && window.innerWidth < 1024}
          title={
            isMobile && openModal === WalletModalType.Send ? 'Send money'
            : isMobile && openModal === WalletModalType.Fund ? 'Fund your wallet'
            : isMobile && openModal === WalletModalType.FromStrkWallet ? 'From STRK Wallet'
            : isMobile && openModal === WalletModalType.FromOtherChains ? 'From Other Chains'
            : isMobile && openModal === WalletModalType.SendViaChat ? 'Send via Chat'
            : undefined
          }
        >
          {openModal === WalletModalType.FromStrkWallet && isMobile ? (
            <FromStrkWalletContent
              address={walletAddress}
              copied={copied}
              onCopy={() => handleCopy(walletAddress)}
            />
          ) : openModal === WalletModalType.FromOtherChains && isMobile ? (
            <FromOtherChainsContent />
          ) : openModal === WalletModalType.Details ? (
            isMobile && !showFullDetails ? (
              <WalletDetailsPreview
                address={walletAddress}
                copied={copied}
                onCopy={() => handleCopy(walletAddress)}
                onViewFull={() => setShowFullDetails(true)}
              />
            ) : isMobile && showFullDetails ? (
              <WalletAddressFullScreen
                address={walletAddress}
                copied={copied}
                onCopy={() => handleCopy(walletAddress)}
              />
            ) : (
              <WalletDetailsContent
                address={walletAddress}
                copied={copied}
                onCopy={() => handleCopy(walletAddress)}
              />
            )
          ) : openModal === WalletModalType.FromOtherChains ? (
            <FromOtherChainsContent />
          ) : openModal === WalletModalType.Send ? (
            <SendOptionsContent onSelectOption={setOpenModal} />
          ) : openModal === WalletModalType.Fund ? (
            <FundWalletContent onSelectOption={setOpenModal} />
          ) : openModal === WalletModalType.SendViaChat ? (
            <SendViaChatContent />
          ) : null}
        </Modal>
      </div>
    </div>
  )
}

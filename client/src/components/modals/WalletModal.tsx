'use client'
import { Button } from '@/components/ui/button'
import {
  Connector,
  useConnect,
  useInjectedConnectors,
} from '@starknet-react/core'
import { X } from 'lucide-react'
import toast from 'react-hot-toast'

interface WalletModalProps {
  onClose: () => void
}

const WalletModal = ({ onClose }: WalletModalProps) => {
  const { connectAsync } = useConnect()
  const { connectors } = useInjectedConnectors({
    includeRecommended: 'onlyIfNoConnectors',
  })

  const handleConnect = async (connector: Connector) => {
    try {
      await connectAsync({ connector })
      toast('Wallet connected successfully')
      onClose()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      onClick={() => {
        onClose()
      }}
      className="bg-op absolute inset-0 z-[12] flex items-center justify-center bg-white/65 backdrop-blur-sm"
    >
      <div
        className="bg-card border-border relative h-fit w-[500px] rounded-[12px] border px-6 py-10 sm:max-w-md"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button
          onClick={() => {
            onClose()
          }}
          className="absolute top-4 right-4 text-[#c4c4c4]"
        >
          <X size={20} />
        </button>
        <div className="text-center text-xl font-bold">Connect Your Wallet</div>

        <div className="mt-6 space-y-3">
          {connectors.map((connector: Connector) => (
            <Button
              key={connector.name}
              variant="default"
              className="flex h-16 w-full items-center justify-start gap-4 p-4"
              onClick={() => handleConnect(connector)}
            >
              <img src={connector.icon as string} className="w-[30px]" alt="" />
              <div className="text-left">
                <div className="font-semibold">{connector.name}</div>
                <div className="text-muted-foreground text-sm">
                  Fast and simple wallet
                </div>
              </div>
            </Button>
          ))}
        </div>

        <div className="text-muted-foreground mt-6 text-center text-sm">
          Connect your wallet to use gasless gossip
        </div>
      </div>
    </div>
  )
}

export default WalletModal

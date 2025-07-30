import { Button } from '@/components/ui/button'
import { Copy, LogOut, X } from 'lucide-react'
import { useAccount, useDisconnect } from '@starknet-react/core'
import Image from 'next/image'
import toast from 'react-hot-toast'

interface AccountModalProps {
  onClose: () => void
}

const AccountModal = ({ onClose }: AccountModalProps) => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const copyAddress = () => {
    navigator.clipboard.writeText(address as string)
    toast('Address copied to clipboard')
  }
  const handleDisconnect = async () => {
    try {
      disconnect()
      toast('Wallet disconnected')
      onClose()
    } catch (err) {
      console.log(err)
      toast.error('Wallet disconnect failed')
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
        <div className="text-center text-xl font-bold">Account</div>

        <div className="mt-6 flex flex-col items-center space-y-6">
          {/* Avatar */}
          <div className="flex items-center justify-center">
            <Image
              src="/avatar.png"
              alt="User"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>

          {/* Address */}
          <div className="w-full">
            <div className="text-muted-foreground mb-2 text-center text-sm">
              Wallet Address
            </div>
            <div className="bg-muted rounded-lg p-3 text-center font-mono text-sm break-all">
              {address}
            </div>
          </div>

          {/* Actions */}
          <div className="flex w-full gap-3">
            <Button variant="default" className="flex-1" onClick={copyAddress}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Address
            </Button>

            <Button
              variant="destructive"
              className="flex-1"
              onClick={handleDisconnect}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Disconnect
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountModal

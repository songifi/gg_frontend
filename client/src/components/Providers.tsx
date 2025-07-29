'use client'
import { ReactNode } from 'react'
import { sepolia } from '@starknet-react/chains'
import {
  StarknetConfig,
  ready,
  braavos,
  useInjectedConnectors,
  jsonRpcProvider,
  voyager,
} from '@starknet-react/core'

export function Providers({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [ready(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: 'onlyIfNoConnectors',
    // Randomize the order of the connectors.
    order: 'alphabetical',
  })
  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={jsonRpcProvider({
        rpc: () => ({ nodeUrl: process.env.NEXT_PUBLIC_RPC_URL }),
      })}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  )
}

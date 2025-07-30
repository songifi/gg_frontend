import { Inter } from 'next/font/google'

import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import QueryProvider from '@/components/ui/query-provider'
import { Toaster } from 'react-hot-toast'
import { Providers } from '@/components/Providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Gasless Gossip Landing Page</title>
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <QueryProvider>
          <Providers>
            {children}
            <Toaster
              toastOptions={{
                duration: 1000,
              }}
            />
          </Providers>
        </QueryProvider>
      </body>
    </html>
  )
}

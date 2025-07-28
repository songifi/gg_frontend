import MobileBottomNav from '@/components/MobileBottomNav'
import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import React from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-[100vh] overflow-y-hidden bg-white">
      <div className="hidden h-full md:block">
        <Sidebar />
      </div>
      <main className="relative flex w-full flex-1 flex-col">
        <div className="hidden md:block">
          <TopBar />
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto md:flex-row">
          {children}
        </div>
        <MobileBottomNav />
      </main>
    </div>
  )
}

export default layout

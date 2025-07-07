'use client'

import Sidebar from '@/components/Sidebar'
import TopBar from '@/components/TopBar'
import ChatList from '@/components/ChatList'
import MainChatArea from '@/components/MainChatArea'

const chats = [
  {
    id: 1,
    avatar: '/alexis.png',
    name: 'thetimileyin',
    lastMsg: 'GM serrrr',
    time: '22:17',
    unread: false,
    attachment: '',
    sent: true,
    read: true,
  },
  {
    avatar: '/anna.png',
    name: 'thetimileyin',
    lastMsg: 'GM serrrr',
    time: '22:17',
    unread: false,
    attachment: '',
    sent: true,
    read: false,
  },
  {
    avatar: '/ralph.png',
    name: 'thetimileyin',
    lastMsg: 'GM serrrr',
    time: '22:17',
    unread: false,
    attachment: '',
    sent: true,
    read: true,
  },
  {
    avatar: '/victor.png',
    name: 'thetimileyin',
    lastMsg: 'GM serrrr',
    time: '22:17',
    unread: true,
    attachment: '',
    sent: false,
    read: false,
  },
  // ...add more as needed
]

import { useState } from 'react'
import { useChatStore } from '@/components/chatStore'

export default function ChatPage() {
  const selectedChatId = useChatStore((s) => s.selectedChatId)
  const setSelectedChatId = useChatStore((s) => s.setSelectedChatId)
  const [showChatAreaMobile, setShowChatAreaMobile] = useState(false)

  return (
    <div className="flex h-screen bg-[#FAFBFA]">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex w-full flex-1 flex-col">
        <div className="hidden md:block">
          <TopBar />
        </div>
        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          <div
            className={`h-[calc(100vh-56px)] min-h-0 w-full border-b bg-white md:h-auto md:w-96 md:flex-shrink-0 md:border-r md:border-b-0 ${showChatAreaMobile ? 'hidden' : 'block'} md:block`}
          >
            <ChatList
              chats={chats.map((chat, idx) => ({
                ...chat,
                id: chat.id ?? idx + 1,
              }))}
              onSelectChat={(id) => {
                setSelectedChatId(id?.toString?.() ?? null)
                setShowChatAreaMobile(true)
              }}
              selectedChatId={selectedChatId ? Number(selectedChatId) : null}
            />
          </div>
          <div
            className={`h-[calc(100vh-56px)] min-h-0 flex-1 md:h-auto ${showChatAreaMobile ? 'block' : 'hidden'} md:block`}
          >
            <MainChatArea onBack={() => setShowChatAreaMobile(false)} />
          </div>
        </div>
      </main>
    </div>
  )
}

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

export default function ChatPage() {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null)

  return (
    <div className="flex h-screen bg-[#FAFBFA]">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <TopBar />
        <div className="flex min-h-0 flex-1">
          <ChatList
            chats={chats.map((chat, idx) => ({
              ...chat,
              id: chat.id ?? idx + 1,
            }))}
            onSelectChat={setSelectedChatId}
            selectedChatId={selectedChatId}
          />
          <MainChatArea
            selectedChatId={selectedChatId}
            onSelectChat={setSelectedChatId}
          />
        </div>
      </main>
    </div>
  )
}

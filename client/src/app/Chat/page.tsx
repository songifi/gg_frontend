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

import { useChatStore } from '@/components/chatStore'

export default function ChatPage() {
  const selectedChatId = useChatStore((s) => s.selectedChatId)
  const setSelectedChatId = useChatStore((s) => s.setSelectedChatId)

  return (
    <div className="flex h-screen bg-[#FAFBFA]">
      <Sidebar />
      <main className="flex w-full flex-1 flex-col">
        <TopBar />
        <div className="flex min-h-0 flex-1">
          <ChatList
            chats={chats.map((chat, idx) => ({
              ...chat,
              id: chat.id ?? idx + 1,
            }))}
            onSelectChat={(id) => setSelectedChatId(id?.toString?.() ?? null)}
            selectedChatId={selectedChatId ? Number(selectedChatId) : null}
          />
          <MainChatArea />
        </div>
      </main>
    </div>
  )
}

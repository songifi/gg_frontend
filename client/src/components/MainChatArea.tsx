'use client'

import ChatHeader from './ChatHeader'
import ChatBubble from './ChatBubble'
import MessageInput from './MessageInput'
import { useEffect } from 'react'
import { useChatStore } from './chatStore'

const chatData = [
  {
    id: '1',
    name: 'theXaxxo Outlook',
    avatar: '/avatar.png',
    messages: [
      {
        fromUser: true,
        content:
          'GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🦉',
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content:
          'Man in as much as you are sending me that STRK, I can twerk if you want me to.\nHell I will do whatever you want😏🥱',
        time: 'Delivered',
      },
      {
        fromUser: true,
        content:
          'GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🦉',
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content:
          'Man in as much as you are sending me that STRK, I can twerk if you want me to.\nHell I will do whatever you want😏🥱',
        time: 'Delivered',
      },
      {
        fromUser: false,
        content: 'Hey you there?? I was kidding',
        time: 'Delivered',
      },
    ],
  },
  {
    id: '2',
    name: 'thetimileyin',
    avatar: '/avatar.png',
    messages: [
      {
        fromUser: true,
        content:
          'GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🦉',
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content:
          'Man in as much as you are sending me that STRK, I can twerk if you want me to.\nHell I will do whatever you want😏🥱',
        time: 'Delivered',
      },
      {
        fromUser: true,
        content:
          'GM to those that Gm.\nHow you doing man? I wanna send you some STRK but you gotta sing for me first🦉',
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content:
          'Man in as much as you are sending me that STRK, I can twerk if you want me to.\nHell I will do whatever you want😏🥱',
        time: 'Delivered',
      },
      {
        fromUser: false,
        content: 'Hey you there?? I was kidding',
        time: 'Delivered',
      },
    ],
  },
]

export default function MainChatArea({ onBack }: { onBack?: () => void }) {
  const chats = useChatStore((s) => s.chats)
  const selectedChatId = useChatStore((s) => s.selectedChatId)
  const setChats = useChatStore.setState

  useEffect(() => {
    if (chats.length === 0) {
      setChats({ chats: chatData })
    }
  }, [chats.length, setChats])

  const selectedChat = chats.find((c) => c.id === selectedChatId)

  return (
    <section className="relative flex h-full w-full flex-col bg-[#FAFBFA]">
      {selectedChat ? (
        <>
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 pt-4 pb-2 md:justify-start md:bg-white md:px-8 md:pt-6">
            <button
              className="mr-2 flex items-center justify-center md:hidden"
              onClick={onBack}
              aria-label="Back"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#222"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <ChatHeader name={selectedChat.name} avatar={selectedChat.avatar} />
            <button
              className="ml-auto flex items-center justify-center md:hidden"
              aria-label="Menu"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                stroke="#222"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="6" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="18" r="2" />
              </svg>
            </button>
          </div>

          <div
            className="flex flex-1 flex-col gap-2 overflow-y-auto px-2 py-4 md:px-8 md:py-6"
            style={{ minHeight: 0 }}
          >
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-400 shadow-sm">
                Today 16:23
              </span>
            </div>
            {selectedChat.messages.map((msg, idx) => (
              <ChatBubble key={idx} fromUser={msg.fromUser} time={msg.time}>
                {msg.content.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </ChatBubble>
            ))}
          </div>

          <div className="sticky bottom-0 z-20 border-t border-gray-200 bg-white px-2 pt-2 pb-4 md:px-8 md:pb-6">
            <MessageInput />
          </div>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center text-gray-400"></div>
      )}
    </section>
  )
}

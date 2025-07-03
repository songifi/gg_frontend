'use client'

import ChatHeader from './ChatHeader'
import ChatBubble from './ChatBubble'
import MessageInput from './MessageInput'

const chatData = [
  {
    id: 1,
    name: 'theXaxxo Outlook',
    avatar: '/avatar.png',
    messages: [
      {
        fromUser: true,
        content: (
          <>
            <span className="font-bold">GM</span> to those that Gm.
            <br />
            How you doing man? I wanna send you some STRK but you gotta sing for
            me first🦉
          </>
        ),
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content: (
          <>
            Man in as much as you are sending me that STRK, I can twerk if you
            want me to.
            <br />
            Hell I will do whatever you want😏🥱
          </>
        ),
        time: 'Delivered',
      },
      {
        fromUser: true,
        content: (
          <>
            <span className="font-bold">GM</span> to those that Gm.
            <br />
            How you doing man? I wanna send you some STRK but you gotta sing for
            me first🦉
          </>
        ),
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content: (
          <>
            Man in as much as you are sending me that STRK, I can twerk if you
            want me to.
            <br />
            Hell I will do whatever you want😏🥱
          </>
        ),
        time: 'Delivered',
      },
      {
        fromUser: false,
        content: <>Hey you there?? I was kidding</>,
        time: 'Delivered',
      },
    ],
  },
  {
    id: 2,
    name: 'thetimileyin',
    avatar: '/avatar.png',
    messages: [
      {
        fromUser: true,
        content: (
          <>
            <span className="font-bold">GM</span> to those that Gm.
            <br />
            How you doing man? I wanna send you some STRK but you gotta sing for
            me first🦉
          </>
        ),
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content: (
          <>
            Man in as much as you are sending me that STRK, I can twerk if you
            want me to.
            <br />
            Hell I will do whatever you want😏🥱
          </>
        ),
        time: 'Delivered',
      },
      {
        fromUser: true,
        content: (
          <>
            <span className="font-bold">GM</span> to those that Gm.
            <br />
            How you doing man? I wanna send you some STRK but you gotta sing for
            me first🦉
          </>
        ),
        time: 'Read 16:40',
      },
      {
        fromUser: false,
        content: (
          <>
            Man in as much as you are sending me that STRK, I can twerk if you
            want me to.
            <br />
            Hell I will do whatever you want😏🥱
          </>
        ),
        time: 'Delivered',
      },
      {
        fromUser: false,
        content: <>Hey you there?? I was kidding</>,
        time: 'Delivered',
      },
    ],
  },
]

interface MainChatAreaProps {
  selectedChatId: number | null
  onSelectChat: (id: number) => void
}

export default function MainChatArea({ selectedChatId }: MainChatAreaProps) {
  const selectedChat = chatData.find((c) => c.id === selectedChatId)

  return (
    <section className="flex h-full min-h-0 flex-1 flex-col bg-[#FAFBFA]">
      <div className="flex h-full min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col">
          {selectedChat ? (
            <>
              <div className="sticky top-[56px] z-10 border-b border-gray-200 bg-white px-8 pt-6 pb-2">
                <ChatHeader
                  name={selectedChat.name}
                  avatar={selectedChat.avatar}
                />
              </div>
              <div
                className="flex flex-1 flex-col gap-2 overflow-y-auto px-8 py-6"
                style={{ minHeight: 0 }}
              >
                <div className="mb-4 flex justify-center">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-400 shadow-sm">
                    Today 16:23
                  </span>
                </div>
                {selectedChat.messages.map((msg, idx) => (
                  <ChatBubble key={idx} fromUser={msg.fromUser} time={msg.time}>
                    {msg.content}
                  </ChatBubble>
                ))}
              </div>
              <div className="sticky bottom-0 z-10 border-t border-gray-200 bg-white px-8 pt-2 pb-6">
                <MessageInput />
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-gray-400"></div>
          )}
        </div>
      </div>
    </section>
  )
}

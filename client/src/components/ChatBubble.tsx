import { ReactNode } from 'react'

interface ChatBubbleProps {
  fromUser?: boolean
  time?: string
  children: ReactNode
}

export default function ChatBubble({
  fromUser,
  time,
  children,
}: ChatBubbleProps) {
  return (
    <div className={`flex flex-col ${fromUser ? 'items-end' : 'items-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 text-gray-800 shadow-sm ${
          fromUser ? 'bg-green-100' : 'bg-gray-100'
        }`}
      >
        {children}
      </div>
      {time && <span className="mt-1 text-xs text-gray-400">{time}</span>}
    </div>
  )
}

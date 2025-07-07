import ChatListItem, { ChatListItemProps } from './ChatListItem'
import MobileBottomNav from './MobileBottomNav'

interface ChatListProps {
  chats: ChatListItemProps[]
  onSelectChat: (id: number) => void
  selectedChatId: number | null
}

export default function ChatList({
  chats,
  onSelectChat,
  selectedChatId,
}: ChatListProps) {
  return (
    <section className="flex h-full w-full flex-col bg-white md:w-96 md:border-r">
      <div className="block px-4 pt-6 pb-2 text-center text-lg font-semibold md:hidden">
        Chats
      </div>
      <div className="flex items-center gap-2 px-4 pt-2 pb-2 md:pt-4 md:pb-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 rounded border bg-gray-50 px-3 py-2 focus:ring focus:outline-none"
        />
        <button className="ml-2 hidden rounded-full bg-green-700 p-2 text-white hover:bg-green-800 md:inline-flex">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto pb-24 md:pb-0">
        {chats.map((chat, i) => (
          <div
            key={chat.id ?? i}
            onClick={() => onSelectChat(chat.id)}
            className={
              (selectedChatId === chat.id ? 'bg-green-50 ' : '') +
              'cursor-pointer'
            }
          >
            <ChatListItem {...chat} />
          </div>
        ))}
      </div>
      <MobileBottomNav />
      <button className="fixed right-6 bottom-20 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg md:hidden">
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </section>
  )
}

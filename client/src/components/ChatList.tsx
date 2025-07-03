import ChatListItem, { ChatListItemProps } from './ChatListItem'

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
    <section className="flex w-96 flex-col border-r bg-white">
      <div className="flex items-center gap-2 p-4 pb-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 border bg-gray-50 px-3 py-2 focus:ring focus:outline-none"
        />
        <button className="ml-2 bg-green-700 p-2 text-white hover:bg-green-800">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
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
    </section>
  )
}

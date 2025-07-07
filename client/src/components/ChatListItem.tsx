import Image from 'next/image'

export interface ChatListItemProps {
  id: number
  avatar: string
  name: string
  lastMsg: string
  time: string
  unread: boolean
  attachment: string
  sent: boolean
  read: boolean
}

export default function ChatListItem({
  avatar,
  name,
  lastMsg,
  time,
  unread,
  attachment,
  sent,
  read,
}: ChatListItemProps) {
  return (
    <div className="relative flex cursor-pointer items-center gap-3 border-b px-4 py-3 last:border-b-0 hover:bg-gray-50">
      <Image
        src={avatar}
        alt={name}
        width={44}
        height={44}
        className="rounded-full"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="truncate font-medium">{name}</span>
          <span className="ml-2 text-xs text-gray-400">{time}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          {attachment && (
            <span className="font-semibold text-green-700">
              Attachment: {attachment}
            </span>
          )}
          <span className="truncate">{lastMsg}</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        {unread && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-xs text-white">
            2
          </span>
        )}
        <span>
          {sent ? (
            read ? (
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#4ADE80"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#A3A3A3"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )
          ) : null}
        </span>
      </div>
    </div>
  )
}

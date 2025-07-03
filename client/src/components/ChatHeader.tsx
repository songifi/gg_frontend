import Image from 'next/image'

interface ChatHeaderProps {
  name: string
  avatar: string
}

export default function ChatHeader({ name, avatar }: ChatHeaderProps) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <Image
        src={avatar.replace('/public', '')}
        alt="Avatar"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full border"
      />
      <div>
        <div className="font-semibold">{name}</div>
      </div>
    </div>
  )
}

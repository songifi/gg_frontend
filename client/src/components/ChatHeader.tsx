import Image from 'next/image'

interface ChatHeaderProps {
  name: string
  avatar: string
}

export default function ChatHeader({ name, avatar }: ChatHeaderProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 md:mb-6 md:flex-row md:justify-start">
      <span className="hidden text-gray-400 md:block">To:</span>
      <Image
        src={avatar.replace('/public', '')}
        alt="Avatar"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full border"
      />
      <div>
        <div className="text-gray-400 md:font-semibold md:text-black">
          {name}
          <span className="-translate-y-5/6 text-xl md:hidden">&gt;</span>
        </div>
      </div>
    </div>
  )
}

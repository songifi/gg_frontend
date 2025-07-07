import { BellDot, ChevronDown } from 'lucide-react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="flex h-[100px] items-center justify-end gap-5 border-[1px] border-[#e5e7e6] px-8">
      <div className="rounded-full border-[0.5px] border-[#e5e7e6] p-2">
        <BellDot size={16} />
      </div>
      <div className="flex items-center gap-3">
        <Image
          src="/outlookAvatar.png"
          alt="profile-picture"
          width={32}
          height={32}
        />
        <div className="font-sans font-medium">User 1234</div>
        <div>
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  )
}
export default Navbar
